'use client'

import ScrollReveal from './ScrollReveal'

interface GrowthEntry {
  id: string
  title: string
  content: string
  category: string
  date: string
  tags: string[]
}

interface GrowthEntryCardProps {
  entry: GrowthEntry
  delay?: number
}

const categoryConfig = {
  skill: { label: '技能', emoji: '🔓', color: 'bg-blue-500/20 text-blue-300' },
  discovery: { label: '发现', emoji: '💡', color: 'bg-yellow-500/20 text-yellow-300' },
  project: { label: '项目', emoji: '🚀', color: 'bg-purple-500/20 text-purple-300' },
  milestone: { label: '里程碑', emoji: '🎯', color: 'bg-green-500/20 text-green-300' },
}

export function GrowthEntryCard({ entry, delay = 0 }: GrowthEntryCardProps) {
  const config = categoryConfig[entry.category as keyof typeof categoryConfig] || {
    label: '记录',
    emoji: '📝',
    color: 'bg-gray-500/20 text-gray-300'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  return (
    <ScrollReveal delay={delay}>
      <div className="p-4 md:p-6 glass-organic rounded-2xl hover-card-organic transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{config.emoji}</span>
            <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-tech)' }}>
              {entry.title}
            </h3>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${config.color}`}>
            {config.label}
          </span>
        </div>

        <p className="text-sm text-sky-blue mb-4 line-clamp-3">
          {entry.content}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {entry.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(94, 129, 107, 0.2)',
                  color: '#5e816b'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs" style={{ color: '#94a89b' }}>
            {formatDate(entry.date)}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}
