import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onboarding | Virtual Exercise Coach',
  description: 'Tell us about your practice goals and schedule.',
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
