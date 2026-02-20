
import Link from 'next/link';
import { Lock, Award, Zap } from 'lucide-react';
import { type Sequence } from '@/lib/sequences';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SequenceCardProps {
  sequence: Sequence;
}

export function SequenceCard({ sequence }: SequenceCardProps) {
  const { name, description, difficulty, xp, isLocked, thumbnailVideoUrl, id } = sequence;

  const cardContent = (
    <Card className={cn(
      "flex flex-col h-full transition-all duration-300 hover:shadow-lg",
      isLocked ? 'bg-muted/50' : 'bg-card hover:border-primary'
    )}>
      <CardHeader>
        {thumbnailVideoUrl && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
            <video 
              key={thumbnailVideoUrl}
              src={thumbnailVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
             {isLocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Lock className="h-12 w-12 text-white" />
              </div>
            )}
          </div>
        )}
        <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Award className="mr-1 h-4 w-4" />
            {difficulty}
          </div>
          <div className="flex items-center">
            <Zap className="mr-1 h-4 w-4 fill-accent stroke-accent" />
            {xp} XP
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled={isLocked} className="w-full" asChild={!isLocked}>
          {isLocked ? (
            <>
              <Lock className="mr-2 h-4 w-4" /> Locked
            </>
          ) : (
            <span>Start Practice</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
  
  if (isLocked) {
    return <div className="cursor-not-allowed">{cardContent}</div>;
  }
  
  return <Link href={`/practice/${id}`} aria-label={`Start practice for ${name}`}>{cardContent}</Link>;
}
