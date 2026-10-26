'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Play, Search, Zap } from 'lucide-react';
import {
  poseGlossary,
  type PoseGlossaryDifficulty,
  type PoseGlossaryKind,
} from '@/lib/pose-glossary';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

type KindFilter = 'All' | PoseGlossaryKind;

function difficultyBadgeVariant(difficulty: PoseGlossaryDifficulty) {
  if (difficulty === 'Beginner') return 'secondary' as const;
  if (difficulty === 'Intermediate') return 'default' as const;
  return 'outline' as const;
}

export function PoseGlossary() {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<KindFilter>('All');

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return poseGlossary.filter((entry) => {
      if (kind !== 'All' && entry.kind !== kind) return false;
      if (!needle) return true;
      const haystack = [
        entry.name,
        entry.alsoKnownAs ?? '',
        entry.description,
        entry.slug,
        entry.href,
        entry.difficulty,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, kind]);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background pb-10 pt-6">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <p className="text-sm font-semibold uppercase tracking-wide">Practice catalog</p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Pose Glossary</h1>
          <p className="max-w-2xl text-muted-foreground">
            Browse every available exercise and open the sequence that includes it.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Back to dashboard</Link>
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search poses, sequences, or routes…"
            className="pl-9"
            aria-label="Search pose glossary"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(['All', 'Pose', 'Sequence'] as const).map((option) => (
            <Button
              key={option}
              type="button"
              size="sm"
              variant={kind === option ? 'default' : 'outline'}
              onClick={() => setKind(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {filtered.length} of {poseGlossary.length} available
      </p>

      {filtered.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">No matching exercises</CardTitle>
            <CardDescription>
              Try a different search, or clear the filter to see every exercise.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <Card
              key={entry.slug}
              className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <div className="h-40 w-full bg-primary" aria-hidden="true" />
              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge variant="outline">{entry.kind}</Badge>
                  <Badge variant={difficultyBadgeVariant(entry.difficulty)}>
                    {entry.difficulty}
                  </Badge>
                </div>
                <CardTitle className="font-headline text-2xl leading-tight">{entry.name}</CardTitle>
                {entry.alsoKnownAs ? (
                  <p className="text-sm text-muted-foreground">{entry.alsoKnownAs}</p>
                ) : null}
                <CardDescription>{entry.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="text-sm leading-relaxed text-foreground/80">{entry.instructions}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {entry.durationSec}s
                  </span>
                  <span className="inline-flex items-center">
                    <Zap className="mr-1 h-4 w-4 fill-accent stroke-accent" />
                    {entry.xp} XP
                  </span>
                  <code className="truncate rounded bg-muted px-1.5 py-0.5 text-xs">{entry.href}</code>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={entry.href} aria-label={`Practice ${entry.name}`}>
                    <Play className="h-4 w-4" />
                    Practice this
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
