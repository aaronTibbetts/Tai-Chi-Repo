
'use server';
/**
 * @fileOverview Generates a final, spoken summary based on an array of feedback.
 *
 * - summarizeFeedback - A function that creates a holistic summary and converts it to speech.
 * - SummarizeFeedbackInput - The input type for the summarizeFeedback function.
 * - SummarizeFeedbackOutput - The return type for the summarizeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFeedbackInputSchema = z.object({
  feedbackItems: z.array(z.string()).describe('An array of textual feedback items from a completed session.'),
});
export type SummarizeFeedbackInput = z.infer<typeof SummarizeFeedbackInputSchema>;

const SummarizeFeedbackOutputSchema = z.object({
  summarySpeech: z.string().describe('The final summary converted to a base64 encoded audio data URI.'),
  summaryText: z.string().describe('The textual version of the final summary.'),
});
export type SummarizeFeedbackOutput = z.infer<typeof SummarizeFeedbackOutputSchema>;

export async function summarizeFeedback(input: SummarizeFeedbackInput): Promise<SummarizeFeedbackOutput> {
  return summarizeFeedbackFlow(input);
}

const summarizePrompt = ai.definePrompt({
  name: 'summarizeFeedbackPrompt',
  input: {schema: SummarizeFeedbackInputSchema},
  output: {schema: z.object({
    summary: z.string().describe("A final, holistic summary of the user's performance. Should be encouraging, identify one key area for improvement, and be around 30-40 words."),
  })},
  model: 'googleai/gemini-2.0-flash',
  prompt: `You are an expert Tai Chi master providing a final summary after a practice session. Your tone is wise, encouraging, and supportive.

The student has completed a sequence, and here is the feedback for each pose they performed:
{{#each feedbackItems}}
- "{{this}}"
{{/each}}

Based on all of this feedback, generate one short, final summary.
- Start with a word of encouragement (e.g., "Well done," or "A good practice session.").
- If there were recurring issues, gently point out the single most important pattern to focus on next time (e.g., "Your balance is improving, remember to keep your shoulders relaxed throughout.").
- If the feedback was mostly positive, offer a refined point to elevate their practice.
- Keep it concise and uplifting, between 30 and 40 words.
- Do not greet the user or use their name. Get straight to the summary.
`,
});

async function ttsWithElevenLabs(text: string): Promise<string> {
  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

  if (!ELEVENLABS_API_KEY || !VOICE_ID) {
    throw new Error("ElevenLabs API key or Voice ID is not configured.");
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`ElevenLabs API request failed with status ${response.status}: ${errorBody}`);
  }

  const audioArrayBuffer = await response.arrayBuffer();
  const audioBase64 = Buffer.from(audioArrayBuffer).toString('base64');
  return `data:audio/mpeg;base64,${audioBase64}`;
}


const summarizeFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeFeedbackFlow',
    inputSchema: SummarizeFeedbackInputSchema,
    outputSchema: SummarizeFeedbackOutputSchema,
  },
  async input => {
    if (input.feedbackItems.length === 0) {
      return { summarySpeech: '', summaryText: 'No feedback was provided to summarize.' };
    }
    
    const promptResult = await summarizePrompt(input);
    const output = promptResult.output;

    if (!output) {
      throw new Error('AI failed to generate a summary.');
    }
    
    const { summary: summaryText } = output;
    
    if (!summaryText) {
       return { summarySpeech: '', summaryText };
    }

    try {
      const speechDataUri = await ttsWithElevenLabs(summaryText);
      return { summarySpeech: speechDataUri, summaryText };
    } catch (error) {
      console.error("ElevenLabs TTS failed for summary:", error);
      // Return the text summary even if audio generation fails
      return { summarySpeech: '', summaryText };
    }
  }
);
