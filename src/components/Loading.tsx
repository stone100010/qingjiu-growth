import { ReactNode } from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ size = 'md', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className={`${sizeClasses[size]} relative`}>
        {/* 外圈 */}
        <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
        {/* 内圈 */}
        <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
        {/* 中心 */}
        <div className="absolute inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
      </div>
      {text && (
        <p className="text-purple-300 text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Loading size="lg" text="加载中..." />
    </div>
  );
}
