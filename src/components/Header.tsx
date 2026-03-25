"use client";

import Link from 'next/link';
import {
  Moon,
  Sun,
  TestTube2,
  Image as ImageIcon,
  ClipboardList,
  LogIn,
  LayoutDashboard,
  LogOut,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { useAuth } from '@/components/auth/AuthProvider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  return (
    <TooltipProvider delayDuration={300}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={isAuthenticated ? '/dashboard' : '/'}
                  className="flex items-center space-x-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="inline-block font-headline text-xl font-bold">
                    Virtual Exercise Coach
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {isAuthenticated ? 'Dashboard (home)' : 'Home'}
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Test AI" asChild>
                    <Link href="/test-ai">
                      <TestTube2 className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Test AI</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Test Image Generation" asChild>
                    <Link href="/image-test">
                      <ImageIcon className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Image generation test</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Test CSV Generation" asChild>
                    <Link href="/csv-test">
                      <ClipboardList className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">CSV test</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Dashboard" asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Dashboard</TooltipContent>
              </Tooltip>
              {isAuthenticated ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Log out"
                      onClick={() => void logout()}
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Log out</TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Log in" asChild>
                      <Link href="/login">
                        <LogIn className="h-5 w-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Log in</TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <Moon className="absolute inset-0 m-auto h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Sun className="absolute inset-0 m-auto h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">
                      {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Switch background</TooltipContent>
              </Tooltip>
            </nav>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
