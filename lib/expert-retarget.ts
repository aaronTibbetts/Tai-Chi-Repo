'use client';

import { PoseLandmarker } from '@mediapipe/tasks-vision';
import { getCalibration } from '@/lib/calibration';

type V3 = { x:number; y:number; z:number };
type Frame = {
  timestamp_ms: number;
  world: V3[];                // mediapipe worldLandmarks[0]
  norm?: { x:number; y:number; z:number }[]; // optional
};

// indices we use
const I = { L_SH:11, R_SH:12, L_HIP:23, R_HIP:24 } as const;

// --- basic vec ops ---
function mid(a: V3, b: V3): V3 { return { x:(a.x+b.x)/2, y:(a.y+b.y)/2, z:(a.z+b.z)/2 }; }
function sub(a: V3, b: V3): V3 { return { x:a.x-b.x, y:a.y-b.y, z:a.z-b.z }; }
function add(a: V3, b: V3): V3 { return { x:a.x+b.x, y:a.y+b.y, z:a.z+b.z }; }
function mul(a: V3, s: number): V3 { return { x:a.x*s, y:a.y*s, z:a.z*s }; }
function len(v: V3){ return Math.hypot(v.x, v.y, v.z); }

// shoulder width & pelvis helpers
function shoulderWidth(w: V3[]) { return len(sub(w[I.R_SH], w[I.L_SH])); }
function pelvis(w: V3[]) { return mid(w[I.L_HIP], w[I.R_HIP]); }

// --- yaw utils ---
// angle of shoulder vector in XZ plane (atan2(z, x)), using frame 0 for stability
function initialYawRadians(w0: V3[]) {
  const sh = sub(w0[I.R_SH], w0[I.L_SH]);   // right - left
  // project onto XZ plane (ignore Y)
  return Math.atan2(sh.z, sh.x);            // radians
}

// rotate a vector around Y by angle "a" (right-handed, Y up)
function rotY(p: V3, a: number): V3 {
  const ca = Math.cos(a), sa = Math.sin(a);
  return { x: ca*p.x - sa*p.z, y: p.y, z: sa*p.x + ca*p.z };
}

// apply same rotY to an array
function rotateFrameY(points: V3[], a: number): V3[] {
  return points.map(p => rotY(p, a));
}

/**
 * Retarget with yaw alignment:
 * 1) center by pelvis
 * 2) compute yaw from frame0 shoulders, rotate all frames by -yaw
 * 3) scale by user/expert shoulder width
 * 4) re-place at user pelvis depth (Z)
 */
function retargetFramesYawAligned(
  userShoulderWidth: number,
  userPelvisZ: number,
  frames: Frame[]
) {
  if (!frames.length) return frames;

  // center frame0 and get initial yaw
  const f0 = frames[0];
  const cen0 = pelvis(f0.world);
  const centered0 = f0.world.map(p => sub(p, cen0));
  const yaw0 = initialYawRadians(centered0);

  // compute scaling from frame0 after yaw removal for consistency
  const rot0 = rotateFrameY(centered0, -yaw0);
  const expSW0 = shoulderWidth(rot0) || 1;
  const scale = userShoulderWidth / expSW0;

  // transform all frames with same yaw0 & scale
  return frames.map(f => {
    const cen = pelvis(f.world);
    const centered = f.world.map(p => sub(p, cen));              // center to pelvis
    const yawAligned = rotateFrameY(centered, -yaw0);            // remove initial yaw
    const scaled = yawAligned.map(p => mul(p, scale));           // scale to user
    const placed = scaled.map(p => add(p, { x:0, y:0, z:userPelvisZ })); // put at user depth
    return { ...f, world: placed };
  });
}

export async function extractAndRetargetFromVideo(
  videoUrl: string,
  landmarker: PoseLandmarker,
  sequenceKey: string,
  fps = 15
) {
  const calib = getCalibration();
  if (!calib) throw new Error('No calibration found. Please calibrate first.');

  const userSW = calib.proportions?.SHOULDER_WIDTH || 0.35;
  const userZ  = calib.camera?.estimatedZ_m ?? 2.4;

  // 👉 Ensure VIDEO running mode for detectForVideo
  try {
    const anyLm = landmarker as any;
    if (typeof anyLm.setOptions === 'function') {
      // If API exposes a getter, you can check first. Otherwise just set it.
      await anyLm.setOptions({ runningMode: 'VIDEO' });
      // console.log('[expert] landmarker runningMode set to VIDEO');
    }
  } catch (e) {
    console.warn('[expert] could not set runningMode=VIDEO (proceeding)', e);
  }

  // Offscreen video
  const vid = document.createElement('video');
  vid.src = videoUrl;
  vid.crossOrigin = 'anonymous'; // okay for same-origin; harmless
  vid.muted = true;
  vid.playsInline = true;
  vid.preload = 'auto';

  console.log('[expert] loading video:', videoUrl);

  // Wait for metadata (duration, dimensions)
  await new Promise<void>((resolve, reject) => {
    const onMeta = () => { cleanup(); resolve(); };
    const onErr  = () => { cleanup(); reject(new Error('Failed to load expert video metadata')); };
    const cleanup = () => {
      vid.removeEventListener('loadedmetadata', onMeta);
      vid.removeEventListener('error', onErr);
    };
    vid.addEventListener('loadedmetadata', onMeta);
    vid.addEventListener('error', onErr);
  });

  // Some browsers need an initial play/pause to fully prime decoders
  await vid.play().catch(() => {});
  vid.pause();

  const total = vid.duration;
  const vw = vid.videoWidth, vh = vid.videoHeight;
  console.log('[expert] metadata:', { duration: total, videoWidth: vw, videoHeight: vh });

  if (!Number.isFinite(total) || total <= 0) {
    throw new Error('Video duration unavailable. Check that /public/videos/* is accessible as /videos/*.');
  }
  if (!vw || !vh) {
    console.warn('[expert] videoWidth/videoHeight are 0 — detection may fail');
  }

  // Robust seek helper with timeout
  const seekTo = (time: number, timeoutMs = 2000) =>
    new Promise<void>((resolve, reject) => {
      let done = false;
      const onSeeked = () => { if (!done) { done = true; cleanup(); resolve(); } };
      const onCanPlayThrough = () => { if (!done) { done = true; cleanup(); resolve(); } };
      const onErr = () => { if (!done) { done = true; cleanup(); reject(new Error('Video seek error')); } };
      const cleanup = () => {
        clearTimeout(tid);
        vid.removeEventListener('seeked', onSeeked);
        vid.removeEventListener('canplaythrough', onCanPlayThrough);
        vid.removeEventListener('error', onErr);
      };
      const tid = setTimeout(() => {
        if (!done) { done = true; cleanup(); reject(new Error('Video seek timeout')); }
      }, timeoutMs);

      vid.addEventListener('seeked', onSeeked);
      vid.addEventListener('canplaythrough', onCanPlayThrough);
      vid.addEventListener('error', onErr);
      vid.currentTime = time;
    });

  const frames: Frame[] = [];
  const dt = 1 / fps;
  let t = 0;

  while (t <= total) {
    const target = Math.min(t, total - 0.0001);
    try {
      await seekTo(target);
    } catch (e) {
      console.warn('[expert] seek failed at', target, e);
      // Try to skip ahead a bit; if still failing, break to avoid infinite loop
      t += dt;
      continue;
    }

    const ts = vid.currentTime * 1000;
    const res = (landmarker as any).detectForVideo(vid, performance.now());
    const wl = res?.worldLandmarks?.[0];

    if (!wl || !wl.length) {
      // Log sparsely to avoid spam; useful to know if detectForVideo never yields
      if ((Math.round(t * fps) % Math.max(1, fps)) === 0) {
        console.log('[expert] no landmarks at t=', target.toFixed(2));
      }
    } else {
      frames.push({
        timestamp_ms: Math.round(ts),
        world: wl.map((p: any) => ({ x:p.x, y:p.y, z:p.z })),
        norm:  res.landmarks?.[0]?.map((p: any) => ({ x:p.x, y:p.y, z:p.z })),
      });
    }

    t += dt;
  }

  console.log('[expert] raw frames detected:', frames.length);

  if (frames.length === 0) {
    throw new Error('No landmarks detected in expert video. Verify the clip shows a full person and is bright enough.');
  }

  // yaw-aligned retarget (your function from before)
  const transformed = retargetFramesYawAligned(userSW, userZ, frames);

  const key = `expert_transformed.${sequenceKey}.v1`;
  sessionStorage.setItem(key, JSON.stringify({ frames: transformed }));
  sessionStorage.setItem('expert_transformed.v1', JSON.stringify({ frames: transformed }));
  window.dispatchEvent(new CustomEvent('expert:updated', { detail: { key, count: transformed.length } }));

  console.log('[expert] transformed frames saved:', transformed.length, 'key=', key);
  return transformed.length;
}
