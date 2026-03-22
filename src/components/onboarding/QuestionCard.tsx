'use client';

import type { Question } from '@/types/onboarding';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  const handleImageSelect = (optionValue: string) => {
    onChange(optionValue);
  };

  const handleMultiSelect = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, optionValue]);
    } else {
      onChange(currentValues.filter((v) => v !== optionValue));
    }
  };

  const handleSingleSelect = (optionValue: string) => {
    onChange(optionValue);
  };

  const isSelected = (optionValue: string): boolean => {
    if (Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  if (question.type === 'image-select') {
    return (
      <div className="space-y-6">
        {question.options?.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => handleImageSelect(option.value)}
            className={`relative w-full overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] ${
              isSelected(option.value)
                ? 'ring-4 ring-primary ring-offset-2'
                : 'hover:ring-2 hover:ring-primary/50'
            }`}
          >
            <div className="relative flex h-32 items-center justify-center bg-gradient-to-r from-muted to-muted/60">
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
            </div>
            <div
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-3 rounded-full px-6 py-2.5 font-semibold transition-all ${
                isSelected(option.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/90 text-primary-foreground'
              }`}
            >
              {option.label}
              <span className="text-2xl">{option.icon}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>
    );
  }

  if (question.type === 'multi-select') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {question.options?.map((option) => {
          const checked = isSelected(option.value);
          return (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:border-primary ${
                checked ? 'border-primary bg-primary/5' : ''
              }`}
              onClick={() => handleMultiSelect(option.value, !checked)}
            >
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </div>
                <Checkbox
                  checked={checked}
                  onCheckedChange={(c) => handleMultiSelect(option.value, c as boolean)}
                  onClick={(e) => e.stopPropagation()}
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

  if (question.type === 'single-select') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {question.options?.map((option) => {
          const selected = isSelected(option.value);
          return (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:border-primary hover:shadow-md ${
                selected ? 'border-primary bg-primary/5 ring-2 ring-primary' : ''
              }`}
              onClick={() => handleSingleSelect(option.value)}
            >
              <CardContent className="space-y-2 p-6 text-center">
                <div className="mb-2 text-4xl">{option.icon}</div>
                <div className="text-lg font-semibold">{option.label}</div>
                {option.description ? (
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

  if (question.type === 'text-input') {
    return (
      <input
        type="text"
        inputMode="decimal"
        value={typeof value === 'string' ? value : ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder || ''}
        className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }

  return null;
}
