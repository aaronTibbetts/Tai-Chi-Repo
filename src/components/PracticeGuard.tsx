'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PracticeGuard({ children }: { children: React.ReactNode }) {
  const r = useRouter();
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const has = !!sessionStorage.getItem('calibration.v1');
      if (!has) r.replace('/calibrate');
      setOk(has);
    } catch {
      r.replace('/calibrate');
    }
  }, [r]);

  if (ok === null) return null; // or a small spinner
  if (!ok) return null;
  return <>{children}</>;
}
