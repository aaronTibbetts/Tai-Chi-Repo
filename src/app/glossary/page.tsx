'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { readOnboardingComplete } from '@/lib/auth-storage';
import { PoseGlossary } from '@/components/PoseGlossary';

export default function GlossaryPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }
    if (!readOnboardingComplete()) {
      router.replace('/onboarding');
    }
  }, [ready, isAuthenticated, router]);

  if (!ready || !isAuthenticated || !readOnboardingComplete()) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  return <PoseGlossary />;
}
