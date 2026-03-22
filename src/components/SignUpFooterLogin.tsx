'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SignUpFooterLogin() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-end p-4 pb-6 sm:p-6 sm:pb-8">
      <Button
        variant="secondary"
        size="sm"
        className="pointer-events-auto border border-border/80 bg-background/95 shadow-md backdrop-blur-sm"
        asChild
      >
        <Link href="/login">
          <span className="text-muted-foreground">Already have an account?</span>{' '}
          <span className="font-semibold text-primary">Log in</span>
        </Link>
      </Button>
    </div>
  );
}
