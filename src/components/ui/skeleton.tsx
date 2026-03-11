interface SkeletonCardProps {
  delay?: number
}

export function SkeletonCard({ delay = 0 }: SkeletonCardProps) {
  return (
    <div
      className="p-4 md:p-6 rounded-2xl animate-pulse"
      style={{
        animationDelay: `${delay}ms`,
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(120, 94, 73, 0.2)'
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gray-700/50"></div>
          <div className="h-6 w-32 rounded bg-gray-700/50"></div>
        </div>
        <div className="h-6 w-16 rounded-full bg-gray-700/50"></div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-4 w-full rounded bg-gray-700/30"></div>
        <div className="h-4 w-3/4 rounded bg-gray-700/30"></div>
        <div className="h-4 w-1/2 rounded bg-gray-700/30"></div>
      </div>

      <div className="flex gap-2">
        <div className="h-6 w-16 rounded-full bg-gray-700/30"></div>
        <div className="h-6 w-16 rounded-full bg-gray-700/30"></div>
        <div className="h-6 w-16 rounded-full bg-gray-700/30"></div>
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} delay={i * 100} />
      ))}
    </div>
  )
}
