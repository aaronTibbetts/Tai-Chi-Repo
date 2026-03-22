import type { Metadata } from 'next';
import SignUpForm from '@/components/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign up | Virtual Exercise Coach',
  description: 'Create an account to start your Tai Chi practice.',
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
      <SignUpForm />
    </main>
  );
}
