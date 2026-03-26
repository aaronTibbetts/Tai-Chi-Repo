'use client';

import { useState } from 'react';
import { Loader, TestTube2 } from 'lucide-react';

import { testGemini } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function TestAiPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const runTest = async () => {
    setLoading(true);
    try {
      const result = await testGemini();
      setResponse(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube2 className="h-5 w-5" />
            AI Connectivity Test
          </CardTitle>
          <CardDescription>Tests Flask backend connectivity to Gemini via `/api/v1/ai/ping`.</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            readOnly
            value={response}
            placeholder="Response will appear here after running the test."
            className="h-44 font-mono text-sm"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={runTest} disabled={loading}>
            {loading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? 'Testing...' : 'Run Test'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
