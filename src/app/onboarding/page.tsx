'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/onboarding/ProgressBar';
import { QuestionCard } from '@/components/onboarding/QuestionCard';
import { onboardingQuestions } from '@/config/onboardingQuestions';
import type { OnboardingFormData } from '@/types/onboarding';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';
import { readOnboardingComplete, setOnboardingComplete } from '@/lib/auth-storage';

function OnboardingInner() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [hydrated, setHydrated] = useState(false);
  const [formData, setFormData] = useState<OnboardingFormData>({
    answers: {},
    currentStep: 1,
    isComplete: false,
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }
    if (readOnboardingComplete()) {
      router.replace('/dashboard');
    }
  }, [hydrated, isAuthenticated, router]);

  const totalSteps = onboardingQuestions.length;
  const currentQuestion = onboardingQuestions[formData.currentStep - 1];
  const currentAnswer = formData.answers[currentQuestion.id] || '';

  const isStepValid = (): boolean => {
    if (!currentQuestion.required) return true;
    const answer = formData.answers[currentQuestion.id];
    if (!answer) return false;
    if (Array.isArray(answer)) {
      const min = currentQuestion.validation?.minSelections ?? 1;
      return answer.length >= min;
    }
    return typeof answer === 'string' && answer.length > 0;
  };

  const handleAnswerChange = (value: string | string[]) => {
    if (currentQuestion.id === 'injured-areas' && Array.isArray(value)) {
      const prev = formData.answers['injured-areas'];
      const prevArr = Array.isArray(prev) ? prev : [];
      const hadNa = prevArr.includes('na');
      const hasNa = value.includes('na');
      const bodyParts = value.filter((v) => v !== 'na');
      if (hasNa && bodyParts.length > 0) {
        const addedNa = hasNa && !hadNa;
        value = addedNa ? ['na'] : bodyParts;
      }
    }
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: value,
      },
    }));
  };

  const handleComplete = () => {
    try {
      localStorage.setItem('taiChiOnboardingAnswers', JSON.stringify(formData.answers));
    } catch {
      /* ignore */
    }
    setOnboardingComplete(true);
    setFormData((prev) => ({ ...prev, isComplete: true }));
    router.push('/dashboard');
  };

  const handleNext = () => {
    if (!isStepValid()) return;

    if (formData.currentStep < totalSteps) {
      setFormData((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (formData.currentStep <= 1) return;
    setFormData((prev) => ({
      ...prev,
      currentStep: prev.currentStep - 1,
    }));
  };

  if (!hydrated || !isAuthenticated || readOnboardingComplete()) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-8 text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-emerald-50 via-background to-sky-50 pb-12 pt-8 dark:from-emerald-950/30 dark:via-background dark:to-sky-950/20">
      <div className="px-4">
        <div className="mx-auto max-w-4xl">
          <ProgressBar currentStep={formData.currentStep} totalSteps={totalSteps} label="PRACTICE PROFILE" />

          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-2 pb-6 text-center">
              <h1 className="text-2xl font-bold md:text-3xl">{currentQuestion.title}</h1>
              {currentQuestion.subtitle ? (
                <p className="text-muted-foreground">{currentQuestion.subtitle}</p>
              ) : null}
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <div className="mb-8">
                <QuestionCard
                  question={currentQuestion}
                  value={currentAnswer}
                  onChange={handleAnswerChange}
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={formData.currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{formData.currentStep}</span>
                  <span>/</span>
                  <span>{totalSteps}</span>
                </div>

                <Button type="button" onClick={handleNext} disabled={!isStepValid()} className="gap-2">
                  {formData.currentStep === totalSteps ? 'Complete' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-8 text-muted-foreground">
          Loading…
        </div>
      }
    >
      <OnboardingInner />
    </Suspense>
  );
}
