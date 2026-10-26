import { format, startOfDay, subDays } from 'date-fns';
import { poseGlossary, type PoseGlossaryEntry } from '@/lib/pose-glossary';

export const PRACTICE_LOG_STORAGE_KEY = 'taiChiPracticeLog.v1';
export const PRACTICE_UPDATED_EVENT = 'tai-chi-practice-updated';

/** Repeats of one pose that fill its bar. */
export const POSE_MASTERY_TARGET = 8;

const MAX_ENTRIES = 1000;
const RECENT_WINDOW_DAYS = 28;

export const PRACTICE_LEVELS = [
  { level: 1, name: 'First Breath', minPoses: 0 },
  { level: 2, name: 'Finding Balance', minPoses: 5 },
  { level: 3, name: 'Steady Roots', minPoses: 15 },
  { level: 4, name: 'Flowing Form', minPoses: 30 },
  { level: 5, name: 'Quiet Strength', minPoses: 60 },
  { level: 6, name: 'Mountain Stillness', minPoses: 100 },
] as const;

export type PracticeLogEntry = {
  id: string;
  poseName: string;
  sequenceId: string;
  sequenceName: string;
  practicedAt: string;
  durationSec: number;
};

export type PracticePoseProgress = {
  name: string;
  count: number;
  percent: number;
  mastered: boolean;
};

export type PracticeLevelSegment = {
  threshold: number;
  percent: number;
};

export type PracticeProgressSummary = {
  totalPoses: number;
  totalSeconds: number;
  uniquePoses: number;
  catalogPoseCount: number;
  level: number;
  levelName: string;
  levelDetail: string;
  segments: PracticeLevelSegment[];
  recentPoses: number;
  previousPoses: number;
  growthText: string;
  startedOnLabel: string | null;
  poses: PracticePoseProgress[];
};

function normalizePoseName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function poseWord(count: number): string {
  return count === 1 ? 'pose' : 'poses';
}

function isPracticeLogEntry(value: unknown): value is PracticeLogEntry {
  if (!value || typeof value !== 'object') return false;
  const entry = value as PracticeLogEntry;
  return (
    typeof entry.id === 'string' &&
    typeof entry.poseName === 'string' &&
    typeof entry.sequenceId === 'string' &&
    typeof entry.sequenceName === 'string' &&
    typeof entry.practicedAt === 'string' &&
    typeof entry.durationSec === 'number' &&
    Number.isFinite(entry.durationSec)
  );
}

function practicedDate(entry: PracticeLogEntry): Date | null {
  const date = new Date(entry.practicedAt);
  return Number.isNaN(date.getTime()) ? null : date;
}

function glossaryPoses(): PoseGlossaryEntry[] {
  return poseGlossary.filter((entry) => entry.kind === 'Pose');
}

export function poseMatchesGlossary(poseName: string, glossary: PoseGlossaryEntry): boolean {
  const practiced = normalizePoseName(poseName);
  const candidates = [glossary.name, glossary.alsoKnownAs].filter(
    (value): value is string => Boolean(value),
  );
  return candidates.some((candidate) => {
    const known = normalizePoseName(candidate);
    if (practiced === known) return true;
    if (known.length >= 8 && practiced.includes(known)) return true;
    if (practiced.length >= 8 && known.includes(practiced)) return true;
    return false;
  });
}

function describeGrowth(recent: number, previous: number): string {
  if (recent === 0 && previous === 0) {
    return 'Hold each pose through its countdown. Finished poses fill this progression and stay in your history.';
  }
  if (recent === 0) {
    return `You finished ${previous} ${poseWord(previous)} in the 4 weeks before this stretch. A finished pose this week moves the bars forward again.`;
  }
  if (previous === 0) {
    return `${recent} ${poseWord(recent)} finished in the last 4 weeks. This is the start of your practice history.`;
  }
  const delta = recent - previous;
  if (delta > 0) {
    return `${recent} ${poseWord(recent)} in the last 4 weeks, up ${delta} from the 4 weeks before.`;
  }
  if (delta === 0) {
    return `${recent} ${poseWord(recent)} in the last 4 weeks, the same pace as the 4 weeks before.`;
  }
  return `${recent} ${poseWord(recent)} in the last 4 weeks, after ${previous} in the 4 weeks before.`;
}

export function readPracticeLog(): PracticeLogEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(PRACTICE_LOG_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isPracticeLogEntry);
  } catch {
    return [];
  }
}

export function recordPosePractice(input: {
  poseName: string;
  sequenceId: string;
  sequenceName: string;
  durationSec: number;
  practicedAt?: string;
}): PracticeLogEntry | null {
  if (typeof window === 'undefined') return null;
  const entry: PracticeLogEntry = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    poseName: input.poseName,
    sequenceId: input.sequenceId,
    sequenceName: input.sequenceName,
    durationSec: Math.max(0, Math.round(input.durationSec)),
    practicedAt: input.practicedAt ?? new Date().toISOString(),
  };
  try {
    const next = [...readPracticeLog(), entry].slice(-MAX_ENTRIES);
    localStorage.setItem(PRACTICE_LOG_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(PRACTICE_UPDATED_EVENT));
    return entry;
  } catch {
    return null;
  }
}

export function summarizePracticeProgress(
  entries: PracticeLogEntry[],
  now = new Date(),
): PracticeProgressSummary {
  const dated = entries
    .map((entry) => ({ entry, date: practicedDate(entry) }))
    .filter((item): item is { entry: PracticeLogEntry; date: Date } => item.date !== null);

  const totalPoses = dated.length;
  const totalSeconds = dated.reduce((sum, item) => sum + item.entry.durationSec, 0);
  const uniquePoses = new Set(dated.map((item) => normalizePoseName(item.entry.poseName))).size;

  const currentIndex = PRACTICE_LEVELS.reduce(
    (best, level, index) => (totalPoses >= level.minPoses ? index : best),
    0,
  );
  const current = PRACTICE_LEVELS[currentIndex];
  const next = PRACTICE_LEVELS[currentIndex + 1];
  const levelDetail = next
    ? `${totalPoses - current.minPoses} of ${next.minPoses - current.minPoses} poses toward ${next.name}`
    : `${totalPoses} poses practiced. This is the furthest stage on the path.`;

  const segments: PracticeLevelSegment[] = PRACTICE_LEVELS.slice(0, -1).map((level, index) => {
    const nextLevel = PRACTICE_LEVELS[index + 1];
    const span = nextLevel.minPoses - level.minPoses;
    const filled = Math.min(span, Math.max(0, totalPoses - level.minPoses));
    return {
      threshold: nextLevel.minPoses,
      percent: Math.round((filled / span) * 100),
    };
  });

  const recentStart = startOfDay(subDays(now, RECENT_WINDOW_DAYS - 1));
  const previousStart = startOfDay(subDays(now, RECENT_WINDOW_DAYS * 2 - 1));
  let recentPoses = 0;
  let previousPoses = 0;
  for (const item of dated) {
    if (item.date >= recentStart) recentPoses += 1;
    else if (item.date >= previousStart) previousPoses += 1;
  }

  const catalog = glossaryPoses();
  const poses: PracticePoseProgress[] = catalog.map((glossary) => {
    const count = dated.filter((item) => poseMatchesGlossary(item.entry.poseName, glossary)).length;
    return {
      name: glossary.name,
      count,
      percent: Math.min(100, Math.round((count / POSE_MASTERY_TARGET) * 100)),
      mastered: count >= POSE_MASTERY_TARGET,
    };
  });

  const earliest = dated.reduce<Date | null>(
    (best, item) => (best === null || item.date < best ? item.date : best),
    null,
  );

  return {
    totalPoses,
    totalSeconds,
    uniquePoses,
    catalogPoseCount: catalog.length,
    level: current.level,
    levelName: current.name,
    levelDetail,
    segments,
    recentPoses,
    previousPoses,
    growthText: describeGrowth(recentPoses, previousPoses),
    startedOnLabel: earliest ? format(earliest, 'MMM d, yyyy') : null,
    poses,
  };
}

export function formatPracticeTime(totalSeconds: number): string {
  const minutes = Math.round(totalSeconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (remainder === 0) return `${hours} hr`;
  return `${hours} hr ${remainder} min`;
}
