import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pose Glossary | Virtual Exercise Coach',
  description: 'Browse Tai Chi poses and sequences.',
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
