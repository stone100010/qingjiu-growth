interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export function LoadingSpinner({ size = 'md', text = '加载中...' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 border-2',
    md: 'h-12 w-12 border-b-2',
    lg: 'h-16 w-16 border-b-3',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div
        className={`${sizeClasses[size]} rounded-full animate-spin border-qingjiu-pink border-t-transparent mx-auto mb-4`}
      ></div>
      {text && (
        <p className={`${textSizeClasses[size]} text-sage-green dark:text-gray-400`}>
          {text}
        </p>
      )}
    </div>
  );
}
