'use client';

import { useState } from 'react';
import Image from 'next/image';
import { generateImageAction, type GenerateImageResult } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader, Images } from 'lucide-react';

export default function ImageTestPage() {
  const [prompt, setPrompt] = useState<string>('A cat sitting on a giant turtle in a serene garden, photorealistic.');
  const [result, setResult] = useState<GenerateImageResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    const generationResult = await generateImageAction(prompt);

    if (generationResult && 'error' in generationResult) {
      toast({
        variant: 'destructive',
        title: 'Image Generation Failed',
        description: generationResult.error,
      });
    } else {
      setResult(generationResult);
    }

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>AI Image Generation Test</CardTitle>
          <CardDescription>
            Use this page to test the text-to-image generation functionality. Enter a prompt and click
            generate to create a new image.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">Image Prompt</Label>
            <Input
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A majestic dragon soaring over a mystical forest"
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Generating...' : 'Generate Image'}
          </Button>
        </CardFooter>
      </Card>

      {isLoading && (
        <Card className="mt-6">
          <CardContent className="flex flex-col items-center justify-center p-12">
            <Loader className="h-16 w-16 animate-spin text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Generating your image, this may take a moment...</p>
          </CardContent>
        </Card>
      )}

      {result && 'imageUrl' in result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
              <Image
                src={result.imageUrl}
                alt={prompt}
                fill
                className="object-contain"
                unoptimized // Use with caution, as it bypasses Next.js image optimization
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
             <Label htmlFor="imageUrl" className="text-xs">Image URL (for debugging)</Label>
             <Input 
                id="imageUrl"
                readOnly 
                value={result.imageUrl} 
                className="w-full text-xs h-8 bg-muted"
             />
          </CardFooter>
        </Card>
      )}
      
      {!isLoading && !result && (
        <Card className="mt-6 border-dashed">
            <CardContent className="flex flex-col items-center justify-center p-12">
                <Images className="h-16 w-16 text-muted-foreground" />
                <p className="mt-4 text-center text-muted-foreground">Your generated image will appear here.</p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
