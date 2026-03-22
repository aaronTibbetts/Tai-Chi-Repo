export type QuestionType =
  | 'image-select'
  | 'multi-select'
  | 'single-select'
  | 'text-input'
  | 'account-form';

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
  icon?: string;
  imageUrl?: string;
  description?: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options?: QuestionOption[];
  required?: boolean;
  placeholder?: string;
  validation?: {
    minSelections?: number;
    maxSelections?: number;
    pattern?: string;
  };
}

export interface OnboardingFormData {
  answers: Record<string, string | string[]>;
  currentStep: number;
  isComplete: boolean;
}
