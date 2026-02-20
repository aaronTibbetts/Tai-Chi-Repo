'use client';

import { PoseLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';

export type CalibrationData = {
  proportions: Record<string, number>;
  camera: { fx:number; fy:number; cx:number; cy:number; estimatedZ_m:number };
};

export type CalibrationOptions = {
  durationSec?: number;           // how long the T-pose must be held (stable capture window)
  tposeToleranceDeg?: number;     // arm horizontal tolerance
  modelUrlBase?: string;          // mediapipe wasm base
  modelAssetPath?: string;        // pose task file
  onTick?: (sRemaining: number) => void; // optional UI callback
};

const KEY = 'calibration.v1';

export function getCalibration(): CalibrationData | null {
  try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch { return null; }
}
export function isCalibrated(): boolean { return !!getCalibration(); }

export function onCalibrationUpdated(cb: (c: CalibrationData | null) => void) {
  const handler = (e: Event) => {
    // @ts-ignore
    const data = e.detail ?? getCalibration();
    cb(data || null);
  };
  window.addEventListener('calibration:updated', handler);
  return () => window.removeEventListener('calibration:updated', handler);
}

function saveCalibration(c: CalibrationData) {
  sessionStorage.setItem(KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('calibration:updated', { detail: c }));
}

// --- Mediapipe bootstrap (lazy singletons) ---
let landmarkerPromise: Promise<PoseLandmarker> | null = null;

async function ensureLandmarker(opts?: Partial<CalibrationOptions>) {
  if (!landmarkerPromise) {
    const base = opts?.modelUrlBase ?? 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm';
    const model = opts?.modelAssetPath ??
      'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
    landmarkerPromise = (async () => {
      const vision = await FilesetResolver.forVisionTasks(base);
      return await PoseLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: model, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numPoses: 1,
      });
    })();
  }
  return landmarkerPromise;
}

// --- math helpers ---
type V3 = { x:number; y:number; z:number };
const idx = { NOSE:0, L_SH:11, R_SH:12, L_EL:13, R_EL:14, L_WR:15, R_WR:16, L_HIP:23, R_HIP:24, L_KNEE:25, R_KNEE:26, L_ANK:27, R_ANK:28 };

function sub(a:V3,b:V3):V3{ return {x:a.x-b.x,y:a.y-b.y,z:a.z-b.z}; }
function len(v:V3){ return Math.hypot(v.x,v.y,v.z); }
function dot(a:V3,b:V3){ return a.x*b.x + a.y*b.y + a.z*b.z; }
function deg(x:number){ return x*180/Math.PI; }

function angleDegToHorizontal(v:V3){
  // angle between v and pure-X plane projection; 0° means horizontal
  const horiz = { x:v.x, y:0, z:v.z };
  const lh = len(horiz) || 1;
  return deg(Math.acos(Math.min(1, Math.max(-1, dot(v, horiz)/(len(v)*lh)))));
}

function tPoseJointStatus(world: V3[], tolDeg: number) {
  const LSH = world[idx.L_SH], RSH = world[idx.R_SH];
  const LEL = world[idx.L_EL], REL = world[idx.R_EL];
  const LWR = world[idx.L_WR], RWR = world[idx.R_WR];

  if (!LSH || !RSH || !LEL || !REL || !LWR || !RWR) {
    return { L_EL:false, L_WR:false, R_EL:false, R_WR:false };
  }

  const lUpper = sub(LEL, LSH);
  const lFore  = sub(LWR, LEL);
  const rUpper = sub(REL, RSH);
  const rFore  = sub(RWR, REL);

  const aLU = angleDegToHorizontal(lUpper);
  const aLF = angleDegToHorizontal(lFore);
  const aRU = angleDegToHorizontal(rUpper);
  const aRF = angleDegToHorizontal(rFore);

  // “good” if (approximately) horizontal
  return {
    L_EL: aLU <= tolDeg,   // elbow inherits “upper arm ok”
    L_WR: aLF <= tolDeg,   // wrist inherits “forearm ok”
    R_EL: aRU <= tolDeg,
    R_WR: aRF <= tolDeg,
  };
}

function mid(a:V3,b:V3):V3{ return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,z:(a.z+b.z)/2}; }

// --- proportions from world landmarks (already in meters) ---
function computeProportions(world: V3[]) {
  const LSH = world[idx.L_SH], RSH = world[idx.R_SH];
  const LEL = world[idx.L_EL], REL = world[idx.R_EL];
  const LWR = world[idx.L_WR], RWR = world[idx.R_WR];
  const LHP = world[idx.L_HIP], RHP = world[idx.R_HIP];
  const LKN = world[idx.L_KNEE], RKN = world[idx.R_KNEE];
  const LAN = world[idx.L_ANK],  RAN = world[idx.R_ANK];

  const SHOULDER_WIDTH = len(sub(RSH, LSH));
  const HIP_WIDTH      = len(sub(RHP, LHP));
  const LEFT_UPPER_ARM  = len(sub(LEL, LSH));
  const LEFT_FOREARM    = len(sub(LWR, LEL));
  const RIGHT_UPPER_ARM = len(sub(REL, RSH));
  const RIGHT_FOREARM   = len(sub(RWR, REL));
  const LEFT_THIGH      = len(sub(LKN, LHP));
  const LEFT_SHANK      = len(sub(LAN, LKN));
  const RIGHT_THIGH     = len(sub(RKN, RHP));
  const RIGHT_SHANK     = len(sub(RAN, RKN));

  return {
    SHOULDER_WIDTH, HIP_WIDTH,
    LEFT_UPPER_ARM, LEFT_FOREARM, RIGHT_UPPER_ARM, RIGHT_FOREARM,
    LEFT_THIGH, LEFT_SHANK, RIGHT_THIGH, RIGHT_SHANK
  };
}

// --- intrinsics estimation (simple, pragmatic) ---
function estimateIntrinsics(videoW:number, videoH:number, assumedHFovDeg=60) {
  // Simple pinhole: fx = (W/2) / tan(HFOV/2). Use same for fy, center at image center.
  const hfov = assumedHFovDeg * Math.PI/180;
  const fx = (videoW/2) / Math.tan(hfov/2);
  const fy = fx; // assume square pixels for now
  const cx = videoW/2;
  const cy = videoH/2;
  return { fx, fy, cx, cy };
}

// --- T-pose check ---
function isTPose(world: V3[], tolDeg: number){
  const LSH = world[idx.L_SH], RSH = world[idx.R_SH];
  const LEL = world[idx.L_EL], REL = world[idx.R_EL];
  const LWR = world[idx.L_WR], RWR = world[idx.R_WR];
  if (!LSH||!RSH||!LEL||!REL||!LWR||!RWR) return false;

  const lUpper = sub(LEL, LSH);
  const lFore  = sub(LWR, LEL);
  const rUpper = sub(REL, RSH);
  const rFore  = sub(RWR, REL);

  const a1 = angleDegToHorizontal(lUpper);
  const a2 = angleDegToHorizontal(lFore);
  const a3 = angleDegToHorizontal(rUpper);
  const a4 = angleDegToHorizontal(rFore);

  return (a1<=tolDeg && a2<=tolDeg && a3<=tolDeg && a4<=tolDeg);
}

// --- main entry: run calibration on a live <video>/<canvas> ---
export async function startCalibration(
  videoEl: HTMLVideoElement,
  canvasEl: HTMLCanvasElement,
  containerEl?: HTMLElement | null,
  opts: CalibrationOptions = {}
): Promise<CalibrationData> {
  const lm = await ensureLandmarker(opts);
  const durationSec = opts.durationSec ?? 3;
  const tolDeg  = opts.tposeToleranceDeg ?? 15;

  const ctx = canvasEl.getContext('2d')!;
  const draw = new DrawingUtils(ctx);

  let stableMs = 0;
  let lastTickS = -1;

  const sizeCanvasToContainer = () => {
    const dpr = window.devicePixelRatio || 1;
    const rect = (containerEl ?? canvasEl).getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (canvasEl.width !== w || canvasEl.height !== h) {
      canvasEl.width = w;
      canvasEl.height = h;
      (ctx as any).resetTransform?.();
      if (!(ctx as any).resetTransform) ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  };

    // ----- helpers for joint status -----
    type V3 = { x:number; y:number; z:number };
    const I = { L_SH:11, R_SH:12, L_EL:13, R_EL:14, L_WR:15, R_WR:16, L_HIP:23, R_HIP:24, L_KNEE:25, R_KNEE:26 } as const;
    const vsub = (a:V3,b:V3):V3 => ({ x:a.x-b.x, y:a.y-b.y, z:a.z-b.z });
    const vlen = (v:V3) => Math.hypot(v.x, v.y, v.z);
  
    // “Horizontalness”: how small the vertical component is versus total length.
    // We mark segment OK if |dy|/len <= sin(tolDeg).
    const segIsHorizontal = (a:V3, b:V3, tol:number) => {
      const v = vsub(b, a);
      const L = vlen(v);
      if (L <= 1e-6) return false;
      const verticalRatio = Math.abs(v.y) / L;
      const limit = Math.sin((tol * Math.PI) / 180);
      return verticalRatio <= limit;
    };
  
    const jointStatus = (world: V3[]) => {
      const LSH = world[I.L_SH], RSH = world[I.R_SH], LEL = world[I.L_EL], REL = world[I.R_EL], LWR = world[I.L_WR], RWR = world[I.R_WR];
      if (!LSH || !RSH || !LEL || !REL || !LWR || !RWR) {
        return { L_EL:false, L_WR:false, R_EL:false, R_WR:false };
      }
      const okLU = segIsHorizontal(LSH, LEL, tolDeg); // left upper arm
      const okLF = segIsHorizontal(LEL, LWR, tolDeg); // left forearm
      const okRU = segIsHorizontal(RSH, REL, tolDeg); // right upper arm
      const okRF = segIsHorizontal(REL, RWR, tolDeg); // right forearm
      return { L_EL: okLU, L_WR: okLF, R_EL: okRU, R_WR: okRF };
    };

  const step = async (): Promise<CalibrationData> => {
    sizeCanvasToContainer();

    const res = (lm as any).detectForVideo(videoEl, performance.now());
    const lms2d = res?.landmarks?.[0] as any[] | undefined;        // normalized [0..1]
    const world = res?.worldLandmarks?.[0] as V3[] | undefined; // meters, pelvis-centered

    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // 1) Draw simple skeleton for guidance
    if (lms2d) {
      const CONNS = [
        { start: idx.L_SH, end: idx.L_EL }, { start: idx.L_EL, end: idx.L_WR },
        { start: idx.R_SH, end: idx.R_EL }, { start: idx.R_EL, end: idx.R_WR },
        { start: idx.L_HIP, end: idx.L_KNEE }, { start: idx.L_KNEE, end: idx.L_ANK },
        { start: idx.R_HIP, end: idx.R_KNEE }, { start: idx.R_KNEE, end: idx.R_ANK },
        { start: idx.L_SH, end: idx.R_SH }, { start: idx.L_HIP, end: idx.R_HIP },
        { start: idx.L_SH, end: idx.L_HIP }, { start: idx.R_SH, end: idx.R_HIP },
      ];
      draw.drawConnectors(lms2d as any, CONNS as any, { color: '#80ff80', lineWidth: 2 });
    }

    // 2) Colored elbow/wrist dots (GREEN when segment is horizontal, otherwise RED)
    if (lms2d && world) {
      const ok = jointStatus(world);
      const W = canvasEl.width, H = canvasEl.height;

      const drawDot = (idx:number, good:boolean) => {
        const p = lms2d[idx];
        if (!p) return;
        const u = p.x * W, v = p.y * H;
        ctx.beginPath();
        ctx.arc(u, v, Math.max(8, Math.round(W/640)*3), 0, Math.PI*2);
        ctx.fillStyle = good ? '#22c55e' : '#ef4444'; // green-500 / red-500
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'white';
        ctx.stroke();
      };

      // elbows + wrists
      drawDot(I.L_EL, ok.L_EL);
      drawDot(I.L_WR, ok.L_WR);
      drawDot(I.R_EL, ok.R_EL);
      drawDot(I.R_WR, ok.R_WR);
    }

    // 3) Countdown gate (keep your existing isTPose if you prefer)
    if (world && isTPose(world, tolDeg)) stableMs += 33; else stableMs = 0;

    const remainingS = Math.max(0, Math.ceil(durationSec - stableMs / 1000));
    if (remainingS !== lastTickS) { lastTickS = remainingS; opts.onTick?.(remainingS); }

    // 4) On completion: compute proportions + intrinsics + Z via shoulder pinhole (as in your fixed version)
    if (stableMs >= durationSec * 1000 && world && lms2d) {
      // --- proportions from RAW world (in meters) ---
      const proportions = computeProportions(world);

      // --- intrinsics (pixels) from video native size ---
      const vw = videoEl.videoWidth || 1280;
      const vh = videoEl.videoHeight || 720;
      const { fx, fy, cx, cy } = estimateIntrinsics(vw, vh, 60);

      // --- Estimate camera Z using pinhole and shoulder width ---
      // real shoulder width (meters) from world landmarks
      const SW_m = (() => {
        const L = world[idx.L_SH], R = world[idx.R_SH];
        if (!L || !R) return 0.35; // fallback
        const dx = R.x - L.x, dy = R.y - L.y, dz = R.z - L.z;
        return Math.hypot(dx, dy, dz);
      })();

      // shoulder pixel width from 2D normalized landmarks
      const SW_px = (() => {
        const L = lms2d[idx.L_SH], R = lms2d[idx.R_SH];
        if (!L || !R) return 0;
        const dx = (R.x - L.x) * vw; // normalized -> pixels
        const dy = (R.y - L.y) * vh;
        // Use horizontal span for Z estimate (less sensitive to T-pose slight vertical offsets):
        return Math.abs((R.x - L.x) * vw) || Math.hypot(dx, dy);
      })();

      let estimatedZ_m: number;
      if (SW_px > 1 && Number.isFinite(fx) && fx > 0) {
        estimatedZ_m = (fx * SW_m) / SW_px;
      } else {
        // sane fallback if detection/geometry failed
        estimatedZ_m = 2.4;
      }
      // clamp to reasonable range
      estimatedZ_m = Math.max(0.6, Math.min(5.0, estimatedZ_m));

      // Debug (optional):
      // console.log('[calib] SW_m:', SW_m.toFixed(3), 'SW_px:', SW_px.toFixed(1), 'fx:', fx.toFixed(1), 'Z(m):', estimatedZ_m.toFixed(2));

      const calib: CalibrationData = {
        proportions,
        camera: { fx, fy, cx, cy, estimatedZ_m }
      };

      saveCalibration(calib);
      return calib;
    }

    // continue loop
    return new Promise<CalibrationData>((resolve) => {
      requestAnimationFrame(() => { step().then(resolve); });
    });
  };

  return step();
}


