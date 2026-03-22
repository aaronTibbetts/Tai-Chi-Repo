import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log in | Virtual Exercise Coach',
  description: 'Sign in to your Tai Chi practice account.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
