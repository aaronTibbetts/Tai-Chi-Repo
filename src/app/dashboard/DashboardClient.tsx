'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/components/auth/AuthProvider';
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';
import { useMemo, useState } from 'react';
import { sequences } from '@/lib/sequences';

type DashboardClientProps = {
  userEmail: string | null;
};

export default function DashboardClient({ userEmail }: DashboardClientProps) {
  const router = useRouter();
  const { logout } = useAuth();
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const week = useMemo(() => {
    const start = startOfWeek(new Date(), { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const dayPlan = (date: Date) => {
    const dow = date.getDay();
    const isRest = dow === 0 || dow === 6;
    const seq = sequences[(dow + sequences.length) % sequences.length];
    return {
      isRest,
      title: isRest ? 'Rest & reflection' : seq.name,
      detail: isRest ? 'Light walking or breathing optional.' : seq.description,
    };
  };

  const selectedPlan = dayPlan(selectedDate);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background pb-10 pt-6">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              {userEmail ? `Signed in as ${userEmail}` : 'Your Tai Chi practice overview'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/calibrate">Calibrate</Link>
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden rounded-2xl border shadow-lg">
          <div className="relative h-64 w-full bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-800 md:h-72">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-3xl font-extrabold text-white drop-shadow-md md:text-4xl">
                  Ready for today&apos;s practice?
                </CardTitle>
                <CardDescription className="text-base font-medium text-emerald-50">
                  Flow through your form, refine posture, and build calm strength — one session at a time.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <Button size="lg" className="font-semibold" asChild>
                  <Link href="/">Start from home</Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="week" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="week">Week view</TabsTrigger>
            <TabsTrigger value="day">Day view</TabsTrigger>
          </TabsList>
          <TabsContent value="week" className="mt-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {week.map((date) => {
                const plan = dayPlan(date);
                return (
                  <Card
                    key={date.toISOString()}
                    className={`cursor-pointer transition-colors hover:border-primary/50 ${
                      isSameDay(date, selectedDate) ? 'border-primary ring-1 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {format(date, 'EEE')}
                      </CardTitle>
                      <p className="text-lg font-semibold">{format(date, 'MMM d')}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm font-medium leading-snug">{plan.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{plan.detail}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="day" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{format(selectedDate, 'EEEE, MMMM d')}</CardTitle>
                <CardDescription>{selectedPlan.detail}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href="/">Open sequences</Link>
                </Button>
                {!selectedPlan.isRest ? (
                  <Button variant="secondary" asChild>
                    <Link href="/calibrate">Check calibration</Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
