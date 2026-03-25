'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);

      // Placeholder async state to show loading behavior until backend auth is connected.
      await new Promise(resolve => setTimeout(resolve, 1200));

      setMessage('You are signed up and ready to begin your wellness journey.');
      setFullName('');
      setEmail('');
      setPassword('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-lg items-center justify-center px-4 py-10">
      <Card className="w-full border-border/70 bg-card/95 shadow-xl backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription className="text-sm">
            Begin a calm, guided Tai Chi practice tailored to you.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="fullName"
                autoComplete="name"
                placeholder="Alex Chen"
                value={fullName}
                onChange={event => setFullName(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a secure password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            {message ? <p className="text-sm text-green-600">{message}</p> : null}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
