import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Virtual Exercise Coach',
  description: 'Your practice overview, progression, weekly plan, and pose glossary.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
