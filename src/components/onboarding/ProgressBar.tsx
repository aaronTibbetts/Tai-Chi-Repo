interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
}

export function ProgressBar({
  currentStep,
  totalSteps,
  label = 'PROFILE',
}: ProgressBarProps) {
  return (
    <div className="mb-8 w-full">
      {label ? (
        <div className="mb-3 text-center text-sm font-semibold text-muted-foreground">
          {label}
        </div>
      ) : null}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  isCompleted || isCurrent
                    ? 'scale-125 bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
              />
              {stepNumber < totalSteps ? (
                <div
                  className={`h-[2px] w-16 transition-all duration-300 md:w-24 ${
                    isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
