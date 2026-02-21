
'use server';
/**
 * @fileOverview Provides personalized voice feedback during Tai Chi practice.
 *
 * - personalizedTaiChiFeedback - A function that generates personalized feedback based on user's pose and movements.
 * - PersonalizedTaiChiFeedbackInput - The input type for the personalizedTaiChiFeedback function.
 * - PersonalizedTaiChiFeedbackOutput - The return type for the personalizedTaiChiFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// The input now includes expected and actual pose names.
const PersonalizedTaiChiFeedbackInputSchema = z.object({
  expectedPoseName: z.string().describe('The name of the Tai Chi gesture the user was supposed to perform.'),
  actualPoseName: z.string().describe('The name of the Tai Chi gesture the user actually performed.'),
  errorDescriptions: z.array(z.string()).describe('A list of specific errors the user made. An empty list means the form was good. This is only relevant if the actual pose matched the expected one.'),
  previousExplanation: z.string().optional().describe('The previous detailed explanation given, to provide context and avoid repetition.'),
});

export type PersonalizedTaiChiFeedbackInput = z.infer<typeof PersonalizedTaiChiFeedbackInputSchema>;

// The output schema remains the same, providing both speech and text.
const PersonalizedTaiChiFeedbackOutputSchema = z.object({
  speech: z.string().describe('The concise spoken feedback for the user as a base64 encoded audio data URI, limited to 15-20 words.'),
  explanation: z.string().describe('A detailed textual explanation of the feedback, covering posture, balance, and movement.'),
});

export type PersonalizedTaiChiFeedbackOutput = z.infer<typeof PersonalizedTaiChiFeedbackOutputSchema>;

export async function personalizedTaiChiFeedback(input: PersonalizedTaiChiFeedbackInput): Promise<PersonalizedTaiChiFeedbackOutput> {
  return personalizedTaiChiFeedbackFlow(input);
}

// Define the schema for the data that will be passed into the prompt itself.
const PromptInputSchema = PersonalizedTaiChiFeedbackInputSchema.extend({
    poseIsCorrect: z.boolean().describe("A flag indicating whether the student performed the correct pose.")
});


// The prompt is updated to handle pose mismatches gracefully.
const personalizedTaiChiFeedbackPrompt = ai.definePrompt({
  name: 'personalizedTaiChiFeedbackPrompt',
  input: {schema: PromptInputSchema},
  output: {schema: z.object({
    speech: z.string().describe("The concise spoken feedback for the user, limited to 15-20 words."),
    explanation: z.string().describe('A detailed textual explanation of the feedback, covering posture, balance, and movement.'),
  })},
  model: 'googleai/gemini-2.0-flash',
  prompt: `You are an expert Tai Chi master providing in-depth, personalized feedback. Your tone should be wise, patient, and encouraging.

The student was supposed to perform '{{expectedPoseName}}'.
The analysis detected they actually performed '{{actualPoseName}}'.

{{#if poseIsCorrect}}
# The student performed the CORRECT pose.
# Provide feedback on their form based on the following analysis.
Detected Errors:
{{#if errorDescriptions.length}}
  {{#each errorDescriptions}}
- {{this}}
  {{/each}}
{{else}}
- No specific errors detected. The form was good.
{{/if}}

{{#if previousExplanation}}
Previously, I advised: "{{previousExplanation}}"
{{/if}}

Synthesize all detected errors into a single, flowing piece of advice.
- If there are errors, focus on the most critical ones. Don't just list them. Explain how they are connected.
- If form is good, give specific praise and suggest a subtle refinement for them to focus on next time.
- Generate a concise 'speech' version (15-20 words) and a more 'detailed' explanation.

{{else}}
# The student performed the WRONG pose.
# Gently correct them. Acknowledge the pose they did, but guide them back to the correct one for the sequence.
# Do NOT analyze the errors in the 'errorDescriptions' field. The priority is to get them back on track with the sequence.

Example Correction: "That was a good '{{actualPoseName}}'. For this sequence, let's focus on '{{expectedPoseName}}'. Let's try that one now."
Generate a concise 'speech' version (15-20 words) and a slightly more 'detailed' explanation of the correction.

{{/if}}

- Do not greet the user or use their name. Get straight to the feedback.
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


const personalizedTaiChiFeedbackFlow = ai.defineFlow(
  {
    name: 'personalizedTaiChiFeedbackFlow',
    inputSchema: PersonalizedTaiChiFeedbackInputSchema,
    outputSchema: PersonalizedTaiChiFeedbackOutputSchema,
  },
  async input => {
    // Determine if the pose was correct within the flow's logic
    const poseIsCorrect = input.expectedPoseName === input.actualPoseName;

    const promptResult = await personalizedTaiChiFeedbackPrompt({
        ...input,
        poseIsCorrect,
    });
    const output = promptResult.output;

    if (!output) {
      throw new Error('AI failed to generate feedback.');
    }
    
    const { explanation, speech: speechText } = output;

    if (!speechText) {
       return { speech: '', explanation };
    }
    
    // Convert the speech text to audio
    try {
      const speechDataUri = await ttsWithElevenLabs(speechText);
      return { speech: speechDataUri, explanation };
    } catch (error) {
      console.error("ElevenLabs TTS failed:", error);
      // Return text feedback even if TTS fails
      return { speech: '', explanation };
    }
  }
);
