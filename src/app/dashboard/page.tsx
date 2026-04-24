'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { readOnboardingComplete } from '@/lib/auth-storage';
import DashboardClient from './DashboardClient';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }
    if (!readOnboardingComplete()) {
      router.replace('/onboarding');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated || !readOnboardingComplete()) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  return <DashboardClient userEmail={user?.email ?? null} />;
}
