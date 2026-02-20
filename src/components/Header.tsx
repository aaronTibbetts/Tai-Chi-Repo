"use client";

import Link from 'next/link';
import { Moon, Sun, TestTube2, Image as ImageIcon, ClipboardList, Server } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="inline-block font-headline text-xl font-bold">
              Virtual Exercise Coach
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
             <Link href="/test-ai">
              <Button variant="ghost" size="icon" aria-label="Test AI">
                <TestTube2 className="h-5 w-5" />
              </Button>
            </Link>
             <Link href="/image-test">
              <Button variant="ghost" size="icon" aria-label="Test Image Generation">
                <ImageIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/csv-test">
              <Button variant="ghost" size="icon" aria-label="Test CSV Generation">
                <ClipboardList className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/api-test">
              <Button variant="ghost" size="icon" aria-label="Test API">
                <Server className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
