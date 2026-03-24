import { notFound } from 'next/navigation';

import PracticeClient from '@/components/PracticeClient';
import PracticeGuard from '@/components/PracticeGuard';
import { sequences } from '@/lib/sequences';

type PracticePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PracticePage({ params }: PracticePageProps) {
  const { id } = await params;
  const sequence = sequences.find((item) => item.id === id);
  if (!sequence) {
    notFound();
  }

  return (
    <PracticeGuard>
      <PracticeClient sequence={sequence} />
    </PracticeGuard>
  );
}
