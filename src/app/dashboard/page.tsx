'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { AUTH_STORAGE_KEYS, readOnboardingComplete } from '@/lib/auth-storage';
import DashboardClient from './DashboardClient';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setReady(true);
    try {
      setEmail(localStorage.getItem(AUTH_STORAGE_KEYS.userEmail));
    } catch {
      setEmail(null);
    }
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

  return <DashboardClient userEmail={email} />;
}
