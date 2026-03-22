import type { Metadata } from 'next';
import SignUpForm from '@/components/SignUpForm';
import { SignUpFooterLogin } from '@/components/SignUpFooterLogin';

export const metadata: Metadata = {
  title: 'Sign up | Virtual Exercise Coach',
  description: 'Create an account to start your Tai Chi practice.',
};

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6">
      <SignUpForm />
      <SignUpFooterLogin />
    </main>
  );
}
