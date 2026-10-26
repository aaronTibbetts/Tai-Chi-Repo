'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  formatPracticeTime,
  POSE_MASTERY_TARGET,
  PRACTICE_UPDATED_EVENT,
  readPracticeLog,
  summarizePracticeProgress,
  type PracticeProgressSummary,
} from '@/lib/practice-progress';

export function PracticeProgressCard() {
  const [summary, setSummary] = useState<PracticeProgressSummary | null>(null);

  useEffect(() => {
    const refresh = () => setSummary(summarizePracticeProgress(readPracticeLog()));
    refresh();
    window.addEventListener(PRACTICE_UPDATED_EVENT, refresh);
    window.addEventListener('storage', refresh);
    window.addEventListener('focus', refresh);
    return () => {
      window.removeEventListener(PRACTICE_UPDATED_EVENT, refresh);
      window.removeEventListener('storage', refresh);
      window.removeEventListener('focus', refresh);
    };
  }, []);

  if (!summary) {
    return (
      <Card className="rounded-2xl border shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Practice progression</CardTitle>
          <CardDescription>Loading your progress…</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border shadow-lg">
      <CardHeader className="gap-4 space-y-0 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1.5">
          <CardTitle className="text-2xl">Practice progression</CardTitle>
          <CardDescription className="text-base leading-relaxed">{summary.growthText}</CardDescription>
        </div>
        <Button asChild className="shrink-0">
          <Link href="/practice/1">Practice a pose</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Level {summary.level}
            </p>
            <p className="text-xl font-semibold tracking-tight">{summary.levelName}</p>
            <p className="mt-1 text-sm text-muted-foreground">{summary.levelDetail}</p>
          </div>
          <div
            className="flex gap-1.5"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.min(summary.totalPoses, 100)}
            aria-valuetext={`${summary.levelName}. ${summary.totalPoses} poses completed. ${summary.levelDetail}`}
          >
            {summary.segments.map((segment) => (
              <div
                key={segment.threshold}
                aria-hidden
                className="h-3 flex-1 overflow-hidden rounded-full bg-secondary"
              >
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${segment.percent}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 text-[11px] tabular-nums text-muted-foreground">
            {summary.segments.map((segment) => (
              <span key={segment.threshold} className="flex-1 text-center">
                {segment.threshold}
              </span>
            ))}
          </div>
          <dl className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-muted/60 px-3 py-3">
              <dt className="text-xs text-muted-foreground">Poses finished</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">{summary.totalPoses}</dd>
            </div>
            <div className="rounded-xl bg-muted/60 px-3 py-3">
              <dt className="text-xs text-muted-foreground">Time practiced</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">
                {formatPracticeTime(summary.totalSeconds)}
              </dd>
            </div>
            <div className="rounded-xl bg-muted/60 px-3 py-3">
              <dt className="text-xs text-muted-foreground">Poses tried</dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">
                {summary.uniquePoses} of {summary.catalogPoseCount}
              </dd>
            </div>
          </dl>
          {summary.startedOnLabel ? (
            <p className="text-xs text-muted-foreground">Practicing since {summary.startedOnLabel}</p>
          ) : null}
        </div>

        <div>
          <h3 className="text-sm font-medium">Each pose</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            A pose is mastered after {POSE_MASTERY_TARGET} finished holds. The bar stays full after that, and the count keeps growing.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {summary.poses.map((pose) => (
              <div key={pose.name} className="space-y-2">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{pose.name}</span>
                  <span className="shrink-0 tabular-nums text-muted-foreground">
                    {pose.mastered
                      ? `${pose.count} · Mastered`
                      : `${pose.count} of ${POSE_MASTERY_TARGET}`}
                  </span>
                </div>
                <Progress value={pose.percent} aria-label={`${pose.name} progression`} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
