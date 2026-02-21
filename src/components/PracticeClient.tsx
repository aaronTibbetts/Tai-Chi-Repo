// To do: 
// 1. Extract landmarks for API analysis only from one pose repetition, not all reps! ML model sees landmarks as one pose.
// 2. On restart press, don't empty the cache and re-extract landmarks. Save landmarks to chache on first run. 
// 3. API works seemingly randomly.
// 4. Make the play/pause gesture work without having to press play first.

"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import {
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  VideoOff,
  X,
  Loader,
  MessageSquare,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';
import { type Sequence } from '@/lib/sequences';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getPoseAnalysisFromCsv, getAiFeedbackForAnalysis, getFinalSummaryAction, type AiFeedbackResult } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  PoseLandmarker,
  PoseLandmarkerResult,
  NormalizedLandmark,
} from '@mediapipe/tasks-vision';
import {
  initPoseLandmarker,
  processVideo,
  drawLandmarks,
} from '@/lib/pose-estimation';
import { extractAndRetargetFromVideo } from '@/lib/expert-retarget';
import { getCalibration } from '@/lib/calibration';

type LandmarkFrame = {
  landmarks: NormalizedLandmark[];
  timestamp: number;
};

type Conn = { start: number; end: number };

// --- Mediapipe landmark indices for drawing ---
const MP = {
  L_SH: 11, R_SH: 12, L_EL: 13, R_EL: 14, L_WR: 15, R_WR: 16,
  L_HP: 23, R_HP: 24, L_KN: 25, R_KN: 26, L_AN: 27, R_AN: 28,
} as const;

const CONNS: Conn[] = [
  { start: MP.L_SH, end: MP.L_EL }, { start: MP.L_EL, end: MP.L_WR },
  { start: MP.R_SH, end: MP.R_EL }, { start: MP.R_EL, end: MP.R_WR },
  { start: MP.L_SH, end: MP.L_HP }, { start: MP.R_SH, end: MP.R_HP },
  { start: MP.L_HP, end: MP.L_KN }, { start: MP.L_KN, end: MP.L_AN },
  { start: MP.R_HP, end: MP.R_KN }, { start: MP.R_KN, end: MP.R_AN },
  { start: MP.L_SH, end: MP.R_SH }, { start: MP.L_HP, end: MP.R_HP },
];

const JOINTS = [MP.L_WR, MP.L_EL, MP.L_SH, MP.L_HP, MP.L_KN, MP.L_AN, MP.R_WR, MP.R_EL, MP.R_SH, MP.R_HP, MP.R_KN, MP.R_AN];

// Mediapipe Pose indices (subset used here)
const MIRROR_IDX: Record<number, number> = {
  11: 12, 12: 11, // shoulders L<->R
  13: 14, 14: 13, // elbows   L<->R
  15: 16, 16: 15, // wrists   L<->R
  23: 24, 24: 23, // hips     L<->R
  25: 26, 26: 25, // knees    L<->R
  27: 28, 28: 27, // ankles   L<->R
};

// Gesture control config
const GESTURE_ENABLED = true;
const GESTURE_JOINT = MP.R_WR;          // right wrist by default
const GESTURE_CORNER: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
const GESTURE_MARGIN_PCT = 0.12;         // area size as % of width/height
const GESTURE_HOLD_FRAMES = 6;           // require ~6 consecutive frames ~ 0.2s
const GESTURE_COOLDOWN_MS = 2000;        // min time between toggles

// Draw normalized landmarks to a DPR-sized canvas (context must be identity)
function drawSimpleSkeleton(
  canvas: HTMLCanvasElement,
  lms: NormalizedLandmark[] | undefined,
  expert2D: {u:number; v:number}[] | null,
  thresholdPx: number | undefined,
  mirrorCompare: boolean,
  videoW: number,
  videoH: number 
) {
  const ctx = canvas.getContext('2d');
  if (!ctx || !lms || lms.length === 0) return;
  const W = canvas.width;
  const H = canvas.height;

  // Limb highlight threshold . Adaptive: ~1.5% of canvas width (min 20 px).
  const thr = thresholdPx ?? Math.max(32, Math.round(W * 0.015)); 
  const { s, offX, offY } = coverTransform(videoW, videoH, W, H);

  // Per-joint alignment
  const jointOK = new Map<number, boolean>();
  for (const i of JOINTS) {
    const p = lms[i];
    if (!p) continue;

    // map normalized -> video px -> display
    const uUser = p.x * videoW * s - offX;
    const vUser = p.y * videoH * s - offY;

    let ok = true; // default-green when no expert provided
    if (expert2D && expert2D.length) {
      const exIdx = mirrorCompare ? (MIRROR_IDX[i] ?? i) : i; // swap L/R for expert
      const ex = expert2D[exIdx];
      if (ex && Number.isFinite(ex.u)) {
        const dx = uUser - ex.u;
        const dy = vUser - ex.v;
        ok = Math.hypot(dx, dy) <= thr;
      }
    }
    jointOK.set(i, ok);
  }

  // Connections: red if BOTH ends are red, else light gray
  ctx.lineWidth = Math.max(8, Math.round(W / 640) * 2);
  for (const c of CONNS) {
    const a = lms[c.start], b = lms[c.end];
    if (!a || !b) continue;
    const Au = a.x * videoW * s - offX, Av = a.y * videoH * s - offY;
    const Bu = b.x * videoW * s - offX, Bv = b.y * videoH * s - offY;
    const aOK = jointOK.get(c.start) ?? false;
    const bOK = jointOK.get(c.end) ?? false;
    ctx.strokeStyle = (!aOK && !bOK) ? '#ef4444' : 'rgba(200,200,200,0.85)'; // red if both bad
    ctx.beginPath();
    ctx.moveTo(Au, Av);
    ctx.lineTo(Bu, Bv);
    ctx.stroke();
  }

  // Joints: green if aligned, red if not (default green when no expert)
  for (const i of JOINTS) {
    const p = lms[i];
    if (!p) continue;
    const u = p.x * videoW * s - offX;
    const v = p.y * videoH * s - offY;
    const r = Math.max(12, Math.round(W / 640) * 3);
    const ok = expert2D ? (jointOK.get(i) ?? false) : true;
    ctx.beginPath();
    ctx.arc(u, v, r, 0, Math.PI * 2);
    ctx.fillStyle = ok ? '#22c55e' : '#ef4444'; // green / red
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

// Custom hook for reliable intervals in React
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// Find closest frame index for a given timestamp (ms)
function findClosestIndex(timestamps: number[], tMs: number): number {
  // binary search
  let lo = 0, hi = timestamps.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (timestamps[mid] < tMs) lo = mid + 1; else hi = mid;
  }
  if (lo === 0) return 0;
  const prev = lo - 1;
  return (tMs - timestamps[prev] <= timestamps[lo] - tMs) ? prev : lo;
}

// Helper to project world to canvas 2D
function projectWorldTo2D(
  canvas: HTMLCanvasElement,
  videoW: number,
  videoH: number,
  world: {x:number;y:number;z:number}[]
): {u:number; v:number}[] | null {
  const calibRaw = getCalibration();
  if (!calibRaw) return null;
  const { fx, fy, cx, cy } = calibRaw.camera || {};
  if (fx == null || fy == null || cx == null || cy == null) return null;

  const { s, offX, offY } = coverTransform(videoW, videoH, canvas.width, canvas.height);

  const out: {u:number; v:number}[] = new Array(world.length);
  for (let i = 0; i < world.length; i++) {
    const p = world[i];
    if (!p) { out[i] = { u: NaN, v: NaN }; continue; }
    const Z = Math.max(0.05, p.z);

    // project to original video pixel coords
    const u0 = fx * (p.x / Z) + cx;
    const v0 = fy * (p.y / Z) + cy;

    // map to display coords under object-cover
    const u = u0 * s - offX;
    const v = v0 * s - offY;

    out[i] = { u, v };
  }
  return out;
}

// Pure projector
function projectExpert2DForTime(
  canvas: HTMLCanvasElement,
  videoW: number,
  videoH: number,
  frames: { timestamp_ms: number; world: {x:number;y:number;z:number}[] }[],
  timestamps: number[],
  currentTimeMs: number
): {u:number; v:number}[] | null {
  if (!frames || !timestamps || frames.length === 0) return null;
  const idx = findClosestIndex(timestamps, currentTimeMs);
  return projectWorldTo2D(canvas, videoW, videoH, frames[idx].world);
}

// drawer for 2D points
function drawExpert2D(
  ctx: CanvasRenderingContext2D,
  pts2D: {u:number; v:number}[],
  conns: {start:number; end:number}[],
  joints: number[]
) {
  // lines
  ctx.lineWidth = Math.max(2, Math.round((ctx.canvas.width) / 640) * 2);
  ctx.strokeStyle = 'rgba(180,180,180,0.9)';
  ctx.beginPath();
  for (const c of conns) {
    const A = pts2D[c.start], B = pts2D[c.end];
    if (!A || !B || !Number.isFinite(A.u) || !Number.isFinite(B.u)) continue;
    ctx.moveTo(A.u, A.v);
    ctx.lineTo(B.u, B.v);
  }
  ctx.stroke();

  // joints
  for (const i of joints) {
    const P = pts2D[i];
    if (!P || !Number.isFinite(P.u)) continue;
    const r = Math.max(3, Math.round(ctx.canvas.width / 640) * 2);
    ctx.beginPath();
    ctx.arc(P.u, P.v, r, 0, Math.PI * 2);
    ctx.fillStyle = '#9ca3af';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}

// Cover mapping helper function
function coverTransform(videoW: number, videoH: number, canvasW: number, canvasH: number) {
  const s = Math.max(canvasW / videoW, canvasH / videoH);       // scale to cover
  const offX = (s * videoW - canvasW) / 2;                      // crop left
  const offY = (s * videoH - canvasH) / 2;                      // crop top
  return { s, offX, offY };
}

// Clears expert cache. Used when resetting via button.
function clearExpertCache() {
  const keys = Object.keys(sessionStorage);
  for (const k of keys) {
    if (k.startsWith('expert_transformed.')) {
      sessionStorage.removeItem(k);
    }
  }
}

// Gets display coordinates for the live joint
function inCorner(
  u: number, v: number, W: number, H: number,
  corner: 'top-right'|'top-left'|'bottom-right'|'bottom-left',
  marginPct: number,
  mirror: boolean
) {
  // mirror == true => the UI is mirrored; users' “top-right” should be treated as mirrored in data
  // We'll map to a "viewer-space" coordinate by mirroring u when needed.
  const uView = mirror ? (W - u) : u;

  const mx = W * marginPct;
  const my = H * marginPct;

  if (corner === 'top-right')       return (uView >= W - mx) && (v <= my);
  if (corner === 'top-left')        return (uView <= mx)     && (v <= my);
  if (corner === 'bottom-right')    return (uView >= W - mx) && (v >= H - my);
  if (corner === 'bottom-left')                return (uView <= mx)     && (v >= H - my);
}

export default function PracticeClient({ sequence }: { sequence: Sequence | undefined }) {
  if (!sequence) {
    notFound();
  }

  const router = useRouter();
  const { toast } = useToast();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [timeRemainingInPose, setTimeRemainingInPose] = useState(sequence.poses[0].duration);
  const [poseFeedbackLog, setPoseFeedbackLog] = useState<AiFeedbackResult[]>([]);
  const [isFetchingFeedback, setIsFetchingFeedback] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [landmarkDataLog, setLandmarkDataLog] = useState<LandmarkFrame[]>([]);
  const [analysisTrigger, setAnalysisTrigger] = useState<{ data: LandmarkFrame[], poseName: string } | null>(null);
  const [isSequenceComplete, setIsSequenceComplete] = useState(false);
  const [finalSummary, setFinalSummary] = useState<{ text: string; speech: string } | null>(null);
  const [isFetchingSummary, setIsFetchingSummary] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const poseLandmarkerRef = useRef<PoseLandmarker | null>(null);
  const lastVideoTimeRef = useRef(-1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentPose = sequence.poses[currentPoseIndex];
  const totalDuration = sequence.poses.reduce((sum, p) => sum + p.duration, 0);
  const completedDuration = sequence.poses.slice(0, currentPoseIndex).reduce((sum, p) => sum + p.duration, 0) + (currentPose.duration - timeRemainingInPose);
  const progressPercentage = (completedDuration / totalDuration) * 100;
  const coachImage = currentPose.image ? PlaceHolderImages.find(img => img.id === currentPose.image) : null;

  const wrapRef = useRef<HTMLDivElement>(null);

  // Expert extraction state
  const [expertBusy, setExpertBusy] = useState(false);
  const [expertCount, setExpertCount] = useState<number | null>(null);
  const seqKey = `S${currentPoseIndex + 1}`;

  // Right-panel expert video ref (for sync)
  const expertVideoRef = useRef<HTMLVideoElement | null>(null);

  // Expert frames + timestamps for fast lookup
  const expertFramesRef = useRef<{ timestamp_ms: number; world: {x:number;y:number;z:number}[] }[] | null>(null);
  const expertTimestampsRef = useRef<number[] | null>(null);

  // Expert overlay ready 
  const [poseReady, setPoseReady] = useState(false); // overlay ready for this pose
  const queuedPlayRef = useRef(false);               // user pressed play while preparing
  const [showExpert, setShowExpert] = useState(true);
  // ref + sync effect
  const showExpertRef = useRef(showExpert);
  useEffect(() => { showExpertRef.current = showExpert; }, [showExpert]);

  // Holds the current expert 2D points
  const expert2DRef = useRef<{u:number; v:number}[] | null>(null)

  // Restart nonce
  const [restartNonce, setRestartNonce] = useState(0);

  // Gesture play/pause State
  const holdCounterRef = useRef(0);
  const lastGestureAtRef = useRef(0);

  // track first manual play press
  const [hasManuallyPlayedOnce, setHasManuallyPlayedOnce] = useState(false);
  const lastToggleViaGestureRef = useRef(false); // to distinguish button vs gesture

  // Hotspot color
  const hotspotReady = !isInitializing && !expertBusy && poseReady && hasManuallyPlayedOnce;
  const hotspotColor = hotspotReady ? 'bg-green-500/50' : 'bg-yellow-500/50';
  const hotspotBorder = hotspotReady ? 'border-green-500' : 'border-yellow-500';

  const predictWebcam = useCallback(() => {
    if (!videoRef.current || !poseLandmarkerRef.current) {
      animationFrameId.current = requestAnimationFrame(predictWebcam);
      return;
    }
  
    const landmarker = poseLandmarkerRef.current;
    const video = videoRef.current;
  
    processVideo(video, landmarker, (result: PoseLandmarkerResult, timestamp) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
    
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
    
      // 0) Clear once
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // 1) EXPERT overlay (only when playing, synced to right-panel video time)
      const ex = expertFramesRef.current;
      const exTs = expertTimestampsRef.current;
      if (ex && ex.length > 0 && exTs && video.videoWidth && video.videoHeight) {
        const vRight = expertVideoRef.current;
        const tMs = vRight ? (vRight.currentTime * 1000) : 0; // works paused or playing
        expert2DRef.current = projectExpert2DForTime(
          canvas, video.videoWidth, video.videoHeight, ex, exTs, tMs
        );
      
        // 1b) Draw expert overlay only if toggle is on AND playing
        if (showExpertRef.current && isPlaying && expert2DRef.current) {
          drawExpert2D(ctx, expert2DRef.current, CONNS, JOINTS);
        }
      } else {
        expert2DRef.current = null; // no comparison when frames not ready
      }
      // (else: do not draw expert overlay when paused)

      // Detect play/pause gesture inside render loop
      if (GESTURE_ENABLED && result.landmarks && result.landmarks.length > 0) {
        const lms2d = result.landmarks[0];
      
        // Map the chosen joint to DISPLAY coords (same math you use for drawing under object-cover)
        const W = canvas.width, H = canvas.height;
        const videoW = video.videoWidth, videoH = video.videoHeight;
        const { s, offX, offY } = coverTransform(videoW, videoH, W, H);
      
        const jp = lms2d[GESTURE_JOINT];
        if (jp) {
          const u = jp.x * videoW * s - offX;
          const v = jp.y * videoH * s - offY;
      
          const now = performance.now();
          const inHotspot = inCorner(
            u, v, W, H,
            GESTURE_CORNER,
            GESTURE_MARGIN_PCT,
            /* mirror */ true  // your UI is mirrored with -scale-x-100
          );
      
          // Require sustained presence to reduce false positives
          if (inHotspot) {
            holdCounterRef.current += 1;
          } else {
            holdCounterRef.current = 0;
          }
      
          const cooledDown = (now - lastGestureAtRef.current) >= GESTURE_COOLDOWN_MS;
      
          if (holdCounterRef.current >= GESTURE_HOLD_FRAMES && cooledDown) {
            lastGestureAtRef.current = now;
            holdCounterRef.current = 0;
      
            // Fire the control!
            lastToggleViaGestureRef.current = true;
            togglePlayPause();
            toast({ title: 'Gesture detected', description: 'Play/Pause toggled' });
          }
        }
      }
    
      // 2) USER overlay (live) — pass expert2D for coloring
      if (result.landmarks && result.landmarks.length > 0) {
        drawSimpleSkeleton(canvas, result.landmarks[0], expert2DRef.current, /* thresholdPx */ undefined, /* mirrorCompare */ true, video.videoWidth, video.videoHeight);
      }
    
      // 3) Logging while playing
      if (isPlaying && result.landmarks && result.landmarks.length > 0) {
        setLandmarkDataLog(prev => [...prev, { landmarks: result.landmarks[0], timestamp }]);
      }
    }, lastVideoTimeRef);
  
    animationFrameId.current = requestAnimationFrame(predictWebcam);
  }, [isPlaying]);
  
  const generateCsv = (data: LandmarkFrame[]) => {
    if (data.length === 0) {
      return '';
    }
    
    const landmarkNames = [
        "NOSE", "LEFT_EYE_INNER", "LEFT_EYE", "LEFT_EYE_OUTER", "RIGHT_EYE_INNER", "RIGHT_EYE", "RIGHT_EYE_OUTER",
        "LEFT_EAR", "RIGHT_EAR", "MOUTH_LEFT", "MOUTH_RIGHT", "LEFT_SHOULDER", "RIGHT_SHOULDER", "LEFT_ELBOW",
        "RIGHT_ELBOW", "LEFT_WRIST", "RIGHT_WRIST", "LEFT_PINKY", "RIGHT_PINKY", "LEFT_INDEX", "RIGHT_INDEX",
        "LEFT_THUMB", "RIGHT_THUMB", "LEFT_HIP", "RIGHT_HIP", "LEFT_KNEE", "RIGHT_KNEE", "LEFT_ANKLE", "RIGHT_ANKLE",
        "LEFT_HEEL", "RIGHT_HEEL", "LEFT_FOOT_INDEX", "RIGHT_FOOT_INDEX"
    ];

    const header = ['timestamp_ms', ...landmarkNames.flatMap(name => [`${name}_x`, `${name}_y`, `${name}_z`])].join(',');
    
    const csvRows = data.map((frame) => 
        [frame.timestamp, ...frame.landmarks.flatMap(lm => [lm.x, lm.y, lm.z])].join(',')
    );
    
    return [header, ...csvRows].join('\n');
  };
  
  const analyzePoseSegment = useCallback(async (analysisData: { data: LandmarkFrame[], poseName: string }) => {
    if (analysisData.data.length === 0) {
      console.log("No landmark data to process for this segment.");
      return;
    }

    setIsFetchingFeedback(true);
    toast({ title: "Analyzing Pose...", description: `Processing ${analysisData.data.length} frames for ${analysisData.poseName}.` });

    const csvContent = generateCsv(analysisData.data);
    
    try {
      const analysisResult = await getPoseAnalysisFromCsv(csvContent);
      if ('error' in analysisResult) {
        toast({ variant: "destructive", title: "Analysis Failed", description: analysisResult.error });
         setPoseFeedbackLog(prev => [...prev, { error: analysisResult.error }]);
      } else {
        toast({ title: "Pose Analyzed", description: "Getting feedback from your AI coach..." });
        
        // Pass both expected and actual pose names to the action
        const aiResult = await getAiFeedbackForAnalysis(
          analysisData.poseName, // Expected pose
          analysisResult.feedbacks[0] // Contains actual pose info from API
        );
        
        setPoseFeedbackLog(prev => [...prev, aiResult]);
      }
    } catch (e) {
      const error = e instanceof Error ? e : new Error("Unknown error during analysis");
      toast({ variant: "destructive", title: "Analysis Error", description: error.message });
      setPoseFeedbackLog(prev => [...prev, { error: error.message }]);
    } finally {
      setIsFetchingFeedback(false);
    }
  }, [toast]);

  const togglePlayPause = () => {
    if (
      isInitializing ||
      hasCameraPermission === false ||
      (isSequenceComplete && !isPlaying)
    ) {
      toast({
        variant: "destructive",
        title: "Not Ready",
        description: isSequenceComplete
          ? "Sequence is complete. Restart to go again."
          : "Please enable camera access and wait for initialization.",
      });
      return;
    }

    // Gate by poseReady
    if (!poseReady) {
      queuedPlayRef.current = true; // start automatically when extraction finishes
      toast({ title: "Preparing expert…", description: "We’ll start as soon as the overlay is ready." });
      return;
    }
  
    const newIsPlaying = !isPlaying;

    // Detect first manual press: only when going from paused->playing and not gesture-triggered
    if (newIsPlaying && !hasManuallyPlayedOnce && !lastToggleViaGestureRef.current) {
      setHasManuallyPlayedOnce(true);
    }
  
    // --- keep expert video & overlay in lockstep ---
    const vRight = expertVideoRef.current;
    if (vRight) {
      try {
        if (newIsPlaying) {
          // If the sequence was complete and we're restarting, reset to 0
          if (isSequenceComplete) vRight.currentTime = 0;

          // video to seek to the closest extracted timestamp before playing
          const ts = expertTimestampsRef.current;
          if (ts && ts.length > 0 && (!Number.isFinite(vRight.currentTime) || vRight.currentTime === 0)) {
            vRight.currentTime = ts[0] / 1000;
          }  
          // If user just hit play and video is paused/stalled, try to play
          const p = vRight.play();
          if (p && typeof p.then === "function") p.catch(() => {/* autoplay guard */});
        } else {
          vRight.pause();
        }
      } catch {
        // ignore play/pause errors (autoplay policies etc.)
      }
    }
    // --- end lockstep ---
  
    setIsPlaying(newIsPlaying);

    // Reset the gesture flag so future presses count as manual unless set by gesture again
    lastToggleViaGestureRef.current = false;
  
    if (newIsPlaying) {
      if (isSequenceComplete) {
        restartSequence();          // your existing reset
      } else {
        setLandmarkDataLog([]);     // your existing logging reset
      }
    }
  };

  const skipPose = () => {
    setAnalysisTrigger({ data: landmarkDataLog, poseName: currentPose.name });
    setLandmarkDataLog([]);

    if (currentPoseIndex < sequence.poses.length - 1) {
      const nextIndex = currentPoseIndex + 1;
      setCurrentPoseIndex(nextIndex);
      setTimeRemainingInPose(sequence.poses[nextIndex].duration);
    } else {
      setIsPlaying(false);
    }
  };

  const restartSequence = useCallback(() => {
    // 1) reset completion/playback
    setIsSequenceComplete(false);
    setIsPlaying(false);
    queuedPlayRef.current = false;
  
    // 2) reset pose index & timer
    setCurrentPoseIndex(0);
    const firstDur = sequence.poses[0]?.duration ?? 10;
    setTimeRemainingInPose(firstDur);
  
    // 3) clear expert readiness + cache
    setPoseReady(false);
    setExpertCount(null);
    expertFramesRef.current = null;
    expertTimestampsRef.current = null;
    clearExpertCache();               // <- nuke cached frames
  
    // 4) pause & reset right-panel video
    const v = expertVideoRef.current;
    if (v) {
      try { v.pause(); v.currentTime = 0; } catch {}
    }
  
    // 5) clear any feedback logs so completion effect won't immediately re-fire
    setPoseFeedbackLog?.([]);

    // 6) clear coach feedback
    setPoseFeedbackLog?.([]);      // list of per-pose feedback entries
    setFinalSummary?.(null);       // any end-of-sequence summary text/object
    setAnalysisTrigger?.(null);    // pending ML analysis trigger payload
  
    // 7) bump nonce to force extract effect to run again even on pose 0
    setRestartNonce(n => n + 1);
  }, [sequence.poses]);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
        videoRef.current.play();
    }
  }

  // This use effect initialize the mediapipe landmarker
  useEffect(() => {
    const initialize = async () => {
      setIsInitializing(true);
      try {
        const landmarker = await initPoseLandmarker();
        poseLandmarkerRef.current = landmarker;

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error initializing MediaPipe or camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Initialization Failed',
          description: 'Could not access camera or load pose model. Please check permissions and refresh.',
        });
      } finally {
        setIsInitializing(false);
      }
    };

    initialize();
    
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);
  
  // This effect sizes the canvas from the wrapper (not the video), and keep the 2D context identity
  useEffect(() => {
    const canvas = canvasRef.current;
  
    const updateCanvasDimensions = () => {
      if (!canvas || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null;
        if (ctx) {
          (ctx as any).resetTransform?.();
          if (!(ctx as any).resetTransform) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
          }
        }
      }
    };
  
    if (hasCameraPermission) {
      updateCanvasDimensions();
      window.addEventListener('resize', updateCanvasDimensions);
    }
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, [hasCameraPermission]);

  useEffect(() => {
    if (isInitializing) return;
    if (!poseLandmarkerRef.current || !videoRef.current) return;
    animationFrameId.current = requestAnimationFrame(predictWebcam);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isInitializing, predictWebcam]);

  // This effect triggers after camera/model are ready and when the currentPose changes. 
  // It will pick the video URL for the page (either currentPose.videoUrl or /videos/S{n}.mp4), 
  // then run extraction+retarget once.
  useEffect(() => {
    // wait until: model ready + calibration present
    const landmarker = poseLandmarkerRef.current;
    const calib = getCalibration();
    if (isInitializing || !landmarker || !calib) return;
  
    const seqKey = `S${currentPoseIndex + 1}`;
    // Prefer explicit URL, else fallback to /videos/S{n}.mp4 (public/videos/S1.mp4 -> /videos/S1.mp4)
    let url = currentPose.videoUrl || `/videos/${seqKey}.mp4`;
    if (url.startsWith('/public/')) url = url.replace('/public', '');
  
    // Already cached?
    const existing = sessionStorage.getItem(`expert_transformed.${seqKey}.v1`);
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        setExpertCount(parsed?.frames?.length ?? 0);
      } catch {}
      return;
    }
  
    let cancelled = false;
    (async () => {
      try {
        setExpertBusy(true);
        console.log('[expert] extracting from', url, 'seqKey=', seqKey);
        const count = await extractAndRetargetFromVideo(url, landmarker, seqKey, 15);
        if (!cancelled) {
          console.log('[expert] extracted frames:', count);
          setExpertCount(count);
          setPoseReady(count > 0);            
          // Auto-start if user hit Play earlier
          if (queuedPlayRef.current && count > 0) {
            queuedPlayRef.current = false;
            const v = expertVideoRef.current;
            if (v) { v.currentTime = 0; v.play().catch(()=>{}); }
            setIsPlaying(true);
          }
        }
      } catch (e) {
        console.error('[expert] extract failed', e);
        if (!cancelled) setExpertCount(null);
      } finally {
        if (!cancelled) setExpertBusy(false);
      }
    })();
  
    return () => { cancelled = true; };
  }, [isInitializing, currentPoseIndex, currentPose.videoUrl, restartNonce]);

  // This effect loads expert frames for the current sequence
  useEffect(() => {
    const seqKey = `S${currentPoseIndex + 1}`;
    const load = () => {
      try {
        const raw = sessionStorage.getItem(`expert_transformed.${seqKey}.v1`);
        if (!raw) { expertFramesRef.current = null; expertTimestampsRef.current = null; return; }
        const parsed = JSON.parse(raw);
        const frames = parsed?.frames || null;
        expertFramesRef.current = frames;
        expertTimestampsRef.current = frames ? frames.map((f: any) => f.timestamp_ms) : null;
      } catch {
        expertFramesRef.current = null;
        expertTimestampsRef.current = null;
      }
    };
  
    load();
  
    const onUpd = (ev: Event) => {
      const e = ev as CustomEvent<{ key: string; count?: number }>;
      if (e.detail?.key === `expert_transformed.${seqKey}.v1`) load();
    };
    window.addEventListener('expert:updated', onUpd);
    return () => window.removeEventListener('expert:updated', onUpd);
  }, [currentPoseIndex]);

  // Listener that refreshes when expert:updated fires
  useEffect(() => {
    const onUpd = (e: Event) => {
      const ev = e as CustomEvent<{ key: string; count?: number }>;
      if (ev.detail?.key === `expert_transformed.${seqKey}.v1`) {
        try {
          const raw = sessionStorage.getItem(ev.detail.key);
          const parsed = raw ? JSON.parse(raw) : null;
          setExpertCount(parsed?.frames?.length ?? 0);
        } catch {
          setExpertCount(null);
        }
      }
    };
    window.addEventListener('expert:updated', onUpd);
    return () => window.removeEventListener('expert:updated', onUpd);
  }, [seqKey]);

  // This effect runs the analysis when triggered
  useEffect(() => {
    if (!analysisTrigger) return;
    
    analyzePoseSegment(analysisTrigger);
    setAnalysisTrigger(null);
  }, [analysisTrigger, analyzePoseSegment]);
  
  // This effect handles sequence completion
  useEffect(() => {
    if (!isSequenceComplete && poseFeedbackLog.length > 0 && poseFeedbackLog.length === sequence.poses.length) {
        setIsSequenceComplete(true);
    }
  }, [poseFeedbackLog.length, sequence.poses.length, isSequenceComplete]);

  // This effect gets the final summary when the sequence is complete
  useEffect(() => {
      if (isSequenceComplete && !isFetchingSummary && !finalSummary) {
          const getSummary = async () => {
              setIsFetchingSummary(true);
              toast({ title: "Sequence Complete!", description: `You've earned ${sequence.xp} XP. Generating final summary...` });
              
              const feedbackItems = poseFeedbackLog
                .map(f => ('aiFeedback' in f ? f.aiFeedback.explanation : f.error))
                .filter((item): item is string => !!item);
              
              const summaryResult = await getFinalSummaryAction(feedbackItems);

              if ('error' in summaryResult) {
                  toast({ variant: 'destructive', title: 'Summary Failed', description: summaryResult.error });
              } else {
                  setFinalSummary({ text: summaryResult.summaryText, speech: summaryResult.summarySpeech });
              }
              setIsFetchingSummary(false);
          };
          getSummary();
      }
  }, [isSequenceComplete, isFetchingSummary, finalSummary, toast, sequence.xp, poseFeedbackLog]);

  // This effect plays the final summary audio when it's ready
  useEffect(() => {
      if (finalSummary?.speech && audioRef.current) {
          audioRef.current.src = finalSummary.speech;
          audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
  }, [finalSummary]);

  // This use effect resets and pauses the right video so the overlay won’t run ahead when the sequence changes
  useEffect(() => {
    const v = expertVideoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;

    setPoseReady(false);       // NEW: this pose not ready yet
    setExpertCount(null);      // optional: reset the chip
    setIsPlaying(false); 
    queuedPlayRef.current = false; 
  }, [currentPoseIndex]);

  useInterval(() => {
    if (timeRemainingInPose <= 1) {
      // Trigger analysis for the completed pose
      setAnalysisTrigger({ data: landmarkDataLog, poseName: currentPose.name });
      setLandmarkDataLog([]);

      // Move to the next pose or end the sequence
      if (currentPoseIndex < sequence.poses.length - 1) {
        const nextIndex = currentPoseIndex + 1;

        setIsPlaying(false);   // Pause betweeen poses
        setCurrentPoseIndex(nextIndex);
        setTimeRemainingInPose(sequence.poses[nextIndex].duration);
      } else {
        setIsPlaying(false);
      }
    } else {
      setTimeRemainingInPose(prevTime => prevTime - 1);
    }
  }, (isPlaying && hasCameraPermission && poseReady) ? 1000 : null );

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-muted/20">
       <audio ref={audioRef} />
      <div className="flex-grow container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="flex flex-col overflow-hidden shadow-lg" style={{border: '2px solid hsl(var(--primary))', borderRadius: '10px'}}>
          <CardHeader>
            {/* <div className="text-xs text-muted-foreground">
              {expertBusy ? 'Preparing expert…' :
              expertCount ? `Expert frames: ${expertCount}` :
              'Expert not ready'}
            </div> */}
            <CardTitle className="font-headline flex items-center justify-between">
              <span>Your Movement</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mx-2 gap-2"
                onClick={() => setShowExpert(v => !v)}
                title={showExpert ? 'Hide expert overlay' : 'Show expert overlay'}
              >
                {showExpert ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                {showExpert ? 'Overlay On' : 'Overlay Off'}
              </Button>
              <Badge variant={hasCameraPermission ? 'secondary' : 'destructive'}>
                {isInitializing ? 'INITIALIZING...' : expertBusy ? 'LOADING LANDMARKS...' : hasCameraPermission ? 'LIVE' : 'OFFLINE'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow bg-black relative">
            <div
              ref={wrapRef}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover -scale-x-100" // no mirror unless you want it
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoaded}
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none -scale-x-100"
              />
              {/* Hotspot overlay (visual guide for gesture trigger) */}
              {/* <div
                className={`
                  pointer-events-none absolute ${hotspotColor} ${hotspotBorder}
                  border-2 rounded-md flex items-center justify-center
                  text-white text-xs font-semibold select-none
                `}
                style={{
                  width: `${GESTURE_MARGIN_PCT * 100}%`,
                  height: `${GESTURE_MARGIN_PCT * 100}%`,
                  ...(GESTURE_CORNER === 'top-right'    ? { top: 0,   right: 0 } :
                    GESTURE_CORNER === 'top-left'     ? { top: 0,   left: 0 }  :
                    GESTURE_CORNER === 'bottom-right' ? { bottom: 0, right: 0 } :
                                                        { bottom: 0, left: 0 }),
                }}
              >
                {hotspotReady ? 'Righ Hand: Continue' : 'Loading Pose'}
              </div> */}
            </div>

              {(isInitializing || hasCameraPermission === false) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-4 text-center">
                  {isInitializing ? (
                    <>
                      <Loader className="w-16 h-16 mb-4 animate-spin" />
                      <p className="font-semibold">Initializing AI Coach...</p>
                      <p className="text-sm text-muted-foreground mt-2">This may take a moment. Please ensure you've granted camera access.</p>
                    </>
                  ) : (
                     <>
                      <VideoOff className="w-24 h-24 mb-4" />
                      <p className="font-semibold">Camera access denied</p>
                      <p className="text-sm text-muted-foreground">Please enable camera in your browser settings and refresh the page.</p>
                    </>
                  )}
                </div>
              )}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="flex-grow flex flex-col overflow-hidden shadow-lg" style={{border: '2px solid hsl(var(--primary))', borderRadius: '10px'}}>
            <CardHeader>
              <CardTitle className="font-headline flex items-center justify-between">
                <span>Coach Example</span>
                <Badge variant="outline">{currentPose.name}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow relative bg-secondary/30 rounded-md">
              {currentPose.videoUrl ? (
                  <video 
                    ref={expertVideoRef}
                    key={currentPose.videoUrl} 
                    src={currentPose.videoUrl} 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
              ) : coachImage ? (
                <Image
                  src={coachImage.imageUrl}
                  alt={currentPose.name}
                  fill
                  className="object-cover"
                  data-ai-hint={coachImage.imageHint}
                  priority
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  <p>Pose media not available.</p>
                </div>
              )}
              {!isSequenceComplete && (
                <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {timeRemainingInPose}s
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="shadow-lg" style={{border: '2px solid hsl(var(--primary))', borderRadius: '10px'}}>
             <CardHeader>
               <CardTitle className="font-headline text-lg flex items-center">
                 <MessageSquare className="w-5 h-5 mr-2" />
                 AI Coach Feedback
               </CardTitle>
             </CardHeader>
            <CardContent>
              {(isFetchingFeedback && poseFeedbackLog.length < sequence.poses.length) || isFetchingSummary ? (
                 <div className="flex items-center p-4">
                   <Loader className="mr-2 h-4 w-4 animate-spin" />
                   <p>{isFetchingSummary ? "Generating final summary..." : "Coach is analyzing your form..."}</p>
                 </div>
              ) : poseFeedbackLog.length > 0 ? (
                <ScrollArea className="h-24">
                  <div className="space-y-4 pr-4">
                    {finalSummary && (
                       <div className="p-2 rounded-md bg-accent/20">
                           <p className="font-semibold text-sm flex items-center"><Sparkles className="w-4 h-4 mr-2 text-accent-foreground" /> Final Summary</p>
                           <p className="text-sm text-accent-foreground/90">{finalSummary.text}</p>
                        </div>
                    )}
                    {poseFeedbackLog.map((feedback, index) => (
                      <div key={index}>
                         {'aiFeedback' in feedback ? (
                           <>
                             <p className="font-semibold text-sm">{feedback.translationDetails.gestureName}</p>
                             <p className="text-sm text-muted-foreground">{feedback.aiFeedback.explanation}</p>
                           </>
                         ) : (
                            <p className="text-sm text-destructive">{feedback.error}</p>
                         )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <Alert>
                  <AlertDescription>Pause or complete poses to get feedback from your AI coach.</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-background border-t shadow-inner">
        <div className="container mx-auto p-4 space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium w-36 truncate">{sequence.name}</span>
            <Progress value={isSequenceComplete ? 100 : progressPercentage} className="flex-grow" />
            <span className="text-sm font-medium w-16 text-right">{isSequenceComplete ? 100 : Math.round(progressPercentage)}%</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button variant="ghost" size="icon" onClick={restartSequence}>
              <RotateCcw className="w-5 h-5" />
              <span className="sr-only">Restart</span>
            </Button>
            <Button size="lg" className="rounded-full w-20 h-20" 
            onClick={togglePlayPause} 
            disabled={isInitializing || expertBusy || !poseReady}
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={skipPose} disabled={!isPlaying || currentPoseIndex >= sequence.poses.length - 1 || isInitializing}>
              <SkipForward className="w-5 h-5" />
              <span className="sr-only">Skip</span>
            </Button>
            <Button variant="outline" size="icon" className="absolute right-4" onClick={() => router.push('/')}>
               <X className="w-5 h-5" />
              <span className="sr-only">Exit</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
