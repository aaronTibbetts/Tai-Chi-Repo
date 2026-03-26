'use client'
import { useRef, useState } from 'react';
import { startCalibration, CalibrationData } from '@/lib/calibration';

type Status = 'idle' | 'calibrating' | 'success';

export default function WujiPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [countdown, setCountdown] = useState<number | null>(null);
  const [calibData, setCalibData] = useState<CalibrationData | null>(null);

  async function handleStart() {
    if (!videoRef.current || !canvasRef.current) return;

    // start camera stream
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    await videoRef.current.play();

    setStatus('calibrating');
    setCountdown(3);

    const data = await startCalibration(
      videoRef.current,
      canvasRef.current,
      containerRef.current,
      {
        durationSec: 3,
        tposeToleranceDeg: 15,
        onTick: (sRemaining) => setCountdown(sRemaining), // countdown updates
      },
      'wuji'
    );

    setCalibData(data);
    setStatus('success');
    setCountdown(null);
  }

  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">Wuji Pose Calibration</h1>

      {/* Instructions */}
      <p className="text-gray-600">
        Stand upright with arms hanging naturally at your sides and feet shoulder-width apart.
        Press Start, then hold the pose until the countdown reaches zero.
      </p>

      {/* Camera  */}
      <div
        ref={containerRef}
        style={{ position: 'relative', width: 640, height: 480 }}
        className="bg-black rounded overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />

        {/* Countdown */}
        {status === 'calibrating' && countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-6xl font-bold drop-shadow-lg">
              {countdown === 0 ? '✓' : countdown}
            </span>
          </div>
        )}

        {/* Success overlay */}
        {status === 'success' && (
          <div className="absolute inset-0 flex items-center justify-center bg-green-500/40">
            <span className="text-white text-4xl font-bold drop-shadow-lg">
                Pose Correct!
            </span>
          </div>
        )}
      </div>

      {/* Status message */}
      {status === 'calibrating' && (
        <p className="text-blue-600 font-medium">
          Hold your Wuji pose... {countdown}s remaining
        </p>
      )}
      {status === 'success' && (
        <p className="text-green-600 font-medium">
          Calibration complete! 
        </p>
      )}

      {/* Button */}
      {status === 'idle' && (
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Start
        </button>
      )}
      {status === 'success' && (
        <button
          onClick={() => { setStatus('idle'); setCalibData(null); }}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Try Again
        </button>
      )}
    </main>
  );
}