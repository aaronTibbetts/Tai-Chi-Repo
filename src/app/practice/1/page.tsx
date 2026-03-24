import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sequences } from '@/lib/sequences';

export default function PracticePage() {
  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Practice Hub</h1>
        <h2 className="text-2xl font-semibold">{sequences[0]?.poses[0]?.name || 'Pose'}</h2>
      <div className="space-y-4">
        <Card>
            <CardHeader>
                 <CardTitle>Beginner - First Steps</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sequences.map(seq =>(
              <Card>
                <CardHeader>
                  <CardTitle>{seq.poses[0]?.name}</CardTitle>
                </CardHeader>
                <Image src="/images/wave.jpeg" alt="Wave" width={400} height={300} className="mx-auto" />
                <Button asChild variant = "outline" className = "w-full">
                    <Link href = "/pose-test">Start</Link>
                </Button>
              </Card>     
            ) )}
            <Button asChild variant = "outline" className= "w-full">
              <Link href= "/pose-test"> Start Full Sequence</Link>
            </Button>
        </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full">
              <Link href="/calibrate">Recalibrate</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}