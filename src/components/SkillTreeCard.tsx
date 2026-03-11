'use client'

import { ScrollReveal } from './ScrollReveal'

interface Skill {
  id: string
  name: string
  category: string
  level: number
  description?: string
  tags: string[]
}

interface SkillTreeCardProps {
  skill: Skill
  delay?: number
}

const categoryConfig = {
  frontend: { label: '前端', emoji: '🎨', color: 'from-pink-500/30 to-purple-500/30' },
  backend: { label: '后端', emoji: '⚙️', color: 'from-blue-500/30 to-cyan-500/30' },
  ai: { label: 'AI', emoji: '🤖', color: 'from-green-500/30 to-emerald-500/30' },
  tools: { label: '工具', emoji: '🔧', color: 'from-orange-500/30 to-red-500/30' },
  devops: { label: 'DevOps', emoji: '🚀', color: 'from-violet-500/30 to-purple-500/30' },
}

const levelConfig = {
  1: { label: '入门', dots: 1, color: 'bg-gray-400' },
  2: { label: '初级', dots: 2, color: 'bg-green-400' },
  3: { label: '中级', dots: 3, color: 'bg-blue-400' },
  4: { label: '高级', dots: 4, color: 'bg-purple-400' },
  5: { label: '专家', dots: 5, color: 'bg-pink-400' },
}

export function SkillTreeCard({ skill, delay = 0 }: SkillTreeCardProps) {
  const category = categoryConfig[skill.category as keyof typeof categoryConfig] || {
    label: '其他',
    emoji: '📁',
    color: 'from-gray-500/30 to-gray-500/30'
  }
  const level = levelConfig[skill.level as keyof typeof levelConfig] || levelConfig[1]

  return (
    <ScrollReveal delay={delay}>
      <div className="p-4 md:p-6 glass-organic rounded-2xl hover-card-organic transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.emoji}</span>
            <div>
              <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-tech)' }}>
                {skill.name}
              </h3>
              <span className="text-xs" style={{ color: '#94a89b' }}>{category.label}</span>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category.color}`}>
            {level.label}
          </span>
        </div>

        {skill.description && (
          <p className="text-sm text-sky-blue mb-4 line-clamp-2">
            {skill.description}
          </p>
        )}

        {/* 技能等级指示器 */}
        <div className="mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i < level.dots ? level.color : 'bg-gray-700/30'
                }`}
              />
            ))}
          </div>
          <div className="text-right mt-1">
            <span className="text-xs" style={{ color: '#94a89b' }}>
              Level {skill.level}/5
            </span>
          </div>
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1">
          {skill.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(56, 163, 165, 0.2)',
                color: '#38a3a5'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
