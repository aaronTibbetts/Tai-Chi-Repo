'use client';
import { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { isCalibrated, onCalibrationUpdated } from '@/lib/calibration';

export default function CalibrationStatus() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(isCalibrated());
    return onCalibrationUpdated(c => setOk(!!c));
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${
      ok ? 'bg-emerald-600 text-white' : 'bg-amber-200 text-amber-900'
    }`}>
      {ok ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
      <span>{ok ? 'Calibrated' : 'Calibration Needed'}</span>
    </div>
  );
}
