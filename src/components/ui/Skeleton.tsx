interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const variantClasses = {
    text: 'rounded h-4',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  };

  const style = {
    width: width || '100%',
    height: height || 'inherit',
  };

  return (
    <div
      className={`skeleton ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

// 卡片骨架屏
export function CardSkeleton() {
  return (
    <div className="glass-organic rounded-3xl p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width={60} height={60} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  );
}

// 列表骨架屏
export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass-organic rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Skeleton variant="rectangular" width={40} height={40} />
            <div className="flex-1">
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="50%" className="mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
