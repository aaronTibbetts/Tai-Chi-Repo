'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import CalibrationStatus from '@/components/CalibrationStatus';
import { sequences } from '@/lib/sequences';
import { SequenceCard } from '@/components/SequenceCard';
import { isCalibrated, onCalibrationUpdated } from '@/lib/calibration';
import { Button } from '@/components/ui/button';
import SignUpForm from '@/components/SignUpForm';
import { SignUpFooterLogin } from '@/components/SignUpFooterLogin';
import { useAuth } from '@/components/auth/AuthProvider';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(isCalibrated());
    return onCalibrationUpdated(c => setOk(!!c));
  }, []);

  if (isLoading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center p-6 text-muted-foreground">
        Loading...
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="relative flex min-h-screen items-center justify-center p-6">
        <SignUpForm />
        <SignUpFooterLogin />
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Virtual Exercise Coach</h1>
        <CalibrationStatus />
      </div>

      {!ok ? (
        <div className="rounded-lg border p-8 text-center">
          <h2 className="mb-2 text-xl font-medium">Let’s calibrate first</h2>
          <p className="mb-4 text-muted-foreground">
            Please complete a quick T-pose calibration so we can adapt training to your body & camera.
          </p>
          <Button asChild>
            <Link href="/calibrate">Go to Calibration</Link>
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-medium">Training Sequences</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sequences.map(seq => (
              <SequenceCard key={seq.id} sequence={seq} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
