
'use server';

import { personalizedTaiChiFeedback, type PersonalizedTaiChiFeedbackOutput, type PersonalizedTaiChiFeedbackInput } from '@/ai/flows/personalized-tai-chi-feedback';
import { generateImage, type GenerateImageOutput, type GenerateImageInput } from '@/ai/flows/generate-image';
import { summarizeFeedback, type SummarizeFeedbackInput, type SummarizeFeedbackOutput } from '@/ai/flows/summarize-feedback-flow';
import { sequences } from '@/lib/sequences';
import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { getFeedbackDetails, type FeedbackDetails } from '@/lib/gesture-errors';

// This is the new, more descriptive type for the final result.
export type AiFeedbackResult = {
  aiFeedback: PersonalizedTaiChiFeedbackOutput;
  translationDetails: {
    gestureName: string;
    errorDescriptions: string[];
  };
} | { error: string };


export type Feedback = {
  poseName: string;
  speechText: string;
  explanation: string;
};

export type AnalysisResult = { feedbacks: Feedback[] } | { error: string };


export async function getPoseAnalysisFromCsv(csvData: string): Promise<AnalysisResult> {
  try {
    if (!csvData) {
      return { error: 'CSV data is empty.' };
    }
    
    const formData = new FormData();
    const csvBlob = new Blob([csvData], { type: 'text/csv' });
    formData.append('file', csvBlob, 'pose_data.csv');

    const response = await fetch('https://vec-api-9cvw.onrender.com/predict-csv', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    
    if (result && result.feedbacks) {
      return { feedbacks: result.feedbacks };
    } else {
      return { error: "Analysis successful, but feedback data is missing from the response." };
    }

  } catch (error) {
    console.error("Error getting pose analysis:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { error: `Failed to get analysis. Details: ${errorMessage}` };
  }
}

export async function getFeedbackDetailsAction(poseName: string, speechText: string): Promise<FeedbackDetails> {
    return getFeedbackDetails(poseName, speechText);
}

// Updated action to handle pose mismatches and regular feedback
export async function getAiFeedbackForAnalysis(
  expectedPoseName: string,
  analysisFeedback: Feedback,
  previousFeedback?: string
): Promise<AiFeedbackResult> {
  try {
    if (!analysisFeedback) {
      return { error: 'No analysis feedback provided.' };
    }

    const { poseName: actualPoseName, speechText } = analysisFeedback;

    // Translate IDs to human-readable text for the detected pose
    const { gestureName, errorDescriptions } = getFeedbackDetails(actualPoseName, speechText);
    
    // The input for the AI flow now includes both expected and actual poses
    const input: PersonalizedTaiChiFeedbackInput = {
      expectedPoseName,
      actualPoseName: gestureName, // Use the human-readable name
      errorDescriptions,
      previousExplanation: previousFeedback
    };

    const aiResult = await personalizedTaiChiFeedback(input);
    
    return {
      aiFeedback: aiResult,
      translationDetails: {
        gestureName, // This is the *actual* gesture performed
        errorDescriptions,
      },
    };

  } catch (error) {
    console.error("Error getting AI feedback:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { error: `Failed to get feedback from AI coach. Details: ${errorMessage}` };
  }
}


export async function getFinalSummaryAction(feedbackItems: string[]): Promise<SummarizeFeedbackOutput | { error: string }> {
  try {
    const input: SummarizeFeedbackInput = { feedbackItems };
    const result = await summarizeFeedback(input);
    return result;
  } catch (error) {
    console.error("Error getting final summary:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { error: `Failed to get final summary from AI coach. Details: ${errorMessage}` };
  }
}


export async function testGemini(): Promise<string> {
  try {
    console.log("Attempting to call Gemini...");
    const result = await ai.generate({
      model: googleAI.model('gemini-2.0-flash'),
      prompt: "Hello Gemini, this is a test. If you see this, please respond with 'Connection successful.'",
    });
    console.log("Gemini response received:", result.text);
    return result.text;
  } catch (e) {
    const error = e as Error;
    console.error("Error calling Gemini:", error);
    return `Error: ${error.message || 'An unknown error occurred.'}`;
  }
}

export type GenerateImageResult = GenerateImageOutput | { error: string };

export async function generateImageAction(prompt: string): Promise<GenerateImageResult> {
    if (!prompt) {
        return { error: 'Prompt cannot be empty.' };
    }

    try {
        const input: GenerateImageInput = { prompt };
        const result = await generateImage(input);
        return result;
    } catch (error) {
        console.error("Error generating image:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return { error: `Failed to generate image. Details: ${errorMessage}` };
    }
}
