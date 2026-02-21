'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { startCalibration, getCalibration } from '@/lib/calibration';

export default function CalibratePage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement|null>(null);
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  const wrapRef   = useRef<HTMLDivElement|null>(null);

  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(!!getCalibration());
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [countdown, setCountdown] = useState<number>(0);

  // NEW: redirect banner state
  const [justCalibrated, setJustCalibrated] = useState(false);
  const [redirLeft, setRedirLeft] = useState(3);

  // Auto-redirect after fresh calibration
  useEffect(() => {
    if (!justCalibrated) return;
    setRedirLeft(3);
    const iv = setInterval(() => setRedirLeft(s => s - 1), 1000);
    const to = setTimeout(() => router.push('/'), 3000);
    return () => { clearInterval(iv); clearTimeout(to); };
  }, [justCalibrated, router]);

  // camera setup (unchanged)
  useEffect(() => {
    let stream: MediaStream | null = null;
    let cancelled = false;
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
        if (cancelled || !videoRef.current) return;
        const v = videoRef.current;
        v.srcObject = stream;
        await new Promise<void>((resolve) => {
          if (v.readyState >= 1) return resolve();
          v.onloadedmetadata = () => resolve();
        });
        await v.play();
      } catch (e) {
        console.error(e);
      }
    })();
    return () => { cancelled = true; stream?.getTracks().forEach(t => t.stop()); };
  }, []);

  // lock aspect to stream (unchanged)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      if (wrapRef.current && v.videoWidth && v.videoHeight) {
        wrapRef.current.style.aspectRatio = `${v.videoWidth}/${v.videoHeight}`;
      }
    };
    v.addEventListener('loadedmetadata', onMeta);
    return () => v.removeEventListener('loadedmetadata', onMeta);
  }, []);

  const run = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    setBusy(true);
    try {
      await startCalibration(
        videoRef.current!,
        canvasRef.current!,
        wrapRef.current,
        { durationSec: 3, tposeToleranceDeg: 15, onTick: (s) => setCountdown(s) }
      );
      setDone(true);
      setJustCalibrated(true);        // NEW: trigger redirect banner & countdown
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex justify-center p-4">
      <div className="w-[85%] max-w-4xl">
        <Card className="border-2 border-dashed bg-muted/30 p-0">
          <div ref={wrapRef} className="relative w-full" style={{ aspectRatio: '4/3' }}>
            <video
              ref={videoRef}
              playsInline
              muted
              className="absolute inset-0 h-full w-full object-contain -scale-x-100"
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full object-contain -scale-x-100"
            />

            {/* Instruction overlay (hide once calibration starts) */}
            {overlayVisible && !busy && !justCalibrated && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
                <div className="mx-auto w-full max-w-2xl space-y-5 text-white">
                  <h3 className="text-2xl font-semibold">T-pose Instructions</h3>
                  <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-white/90">
                    <li>Stand ~2–2.5 meters (6–8 ft) from the camera so your whole body fits on screen.</li>
                    <li>Face the camera, stand tall, feet under hips.</li>
                    <li>Raise both arms straight out to the sides level with your shoulders (like a “T”).</li>
                    <li>Hold the pose steady for ~2 seconds when the countdown appears.</li>
                  </ol>
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="text-sm text-white/80">
                      <span className="font-medium">Tip:</span> Good, even lighting makes calibration faster.
                    </div>
                    <Button
                      onClick={() => { setOverlayVisible(false); run(); }}
                      disabled={busy}
                      className="text-base"
                    >
                      {busy ? 'Calibrating…' : (done ? 'Recalibrate' : 'Start Calibration')}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* NEW: Returning overlay after fresh calibration */}
            {justCalibrated && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40">
                <div className="rounded-xl bg-black/70 px-5 py-3 text-white shadow-lg">
                  Returning to main page… <span className="font-semibold">{redirLeft}</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 p-4">
            <div className="text-sm text-muted-foreground">
              {busy
                ? 'Calibrating… hold your T-pose steady'
                : (done ? 'Calibration complete' : 'Ready to calibrate')}
            </div>
            {done && !justCalibrated && (
              <Button variant="secondary" asChild>
                <a href="/">Return to Home</a>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
