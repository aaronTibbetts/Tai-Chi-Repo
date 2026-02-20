
import {
  PoseLandmarker,
  FilesetResolver,
  DrawingUtils,
  PoseLandmarkerResult,
  NormalizedLandmark,
} from '@mediapipe/tasks-vision';

let poseLandmarker: PoseLandmarker | undefined = undefined;
let drawingUtils: DrawingUtils | undefined = undefined;

export async function initPoseLandmarker(): Promise<PoseLandmarker> {
  if (poseLandmarker) {
    console.log('Pose Landmarker already initialized.');
    return poseLandmarker;
  }
  
  try {
    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
    );

    poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numPoses: 1,
      minPoseDetectionConfidence: 0.5,
      minPosePresenceConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    
    console.log('Pose Landmarker initialized successfully.');
    return poseLandmarker;
  } catch (error) {
    console.error('Error initializing PoseLandmarker:', error);
    throw error;
  }
}

export function processVideo(
  video: HTMLVideoElement,
  landmarker: PoseLandmarker,
  callback: (result: PoseLandmarkerResult, timestamp: number) => void,
  lastVideoTimeRef: React.MutableRefObject<number>
) {
  if (video.currentTime !== lastVideoTimeRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
    const startTimeMs = performance.now();
    const result = landmarker.detectForVideo(video, startTimeMs);
    lastVideoTimeRef.current = video.currentTime;
    callback(result, startTimeMs);
  }
}

export function drawLandmarks(
  canvas: HTMLCanvasElement,
  landmarks: NormalizedLandmark[][]
) {
  const canvasCtx = canvas.getContext('2d');
  if (!canvasCtx) return;
  
  if (!drawingUtils) {
    drawingUtils = new DrawingUtils(canvasCtx);
  }

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  for (const landmark of landmarks) {
    drawingUtils.drawLandmarks(landmark, {
      radius: (data) => DrawingUtils.lerp(data.from!.z, -0.15, 0.1, 5, 1),
      color: 'hsl(var(--primary))',
      fillColor: 'hsl(var(--background))'
    });
    drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS, {
        color: 'hsl(var(--primary))'
    });
  }
  canvasCtx.restore();
}
