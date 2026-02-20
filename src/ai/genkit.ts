// @ts-nocheck
if (typeof fetch !== 'function') {
  // @ts-ignore
  global.fetch = require('node-fetch');
}

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({apiKey: process.env.GEMINI_API_KEY || ""}),
  ],
  enableTracingAndMetrics: true,
});
