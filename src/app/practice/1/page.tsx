import PracticeClient from '@/components/PracticeClient';
import PracticeGuard from '@/components/PracticeGuard';
import { sequences } from '@/lib/sequences';

export default function PracticeOnePage() {
  const sequence = sequences.find((item) => item.id === '1');

  return (
    <PracticeGuard>
      <PracticeClient sequence={sequence} />
    </PracticeGuard>
  );
}
