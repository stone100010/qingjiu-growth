'use client'

import { useEffect, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkillTreeCard } from '@/components/SkillTreeCard'
import { Navigation } from '@/components/Navigation'

interface Skill {
  id: string
  name: string
  category: string
  level: number
  description?: string
  tags: string[]
}

export default function SkillsPage() {
  const [skills, setSkills] = useState<Record<string, Skill[]>>({})
  const [loading, setLoading] = useState(true)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchSkills() {
      try {
        setLoading(true)
        const categoryParam = categoryFilter !== 'all' ? `?category=${categoryFilter}` : ''
        const res = await fetch(`/api/skills${categoryParam}`)
        const data = await res.json()
        setSkills(data.skills || {})
      } catch (error) {
        console.error('获取技能失败:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [categoryFilter])

  const categoryLabels: Record<string, { label: string; emoji: string }> = {
    frontend: { label: '前端开发', emoji: '🎨' },
    backend: { label: '后端开发', emoji: '⚙️' },
    ai: { label: '人工智能', emoji: '🤖' },
    tools: { label: '开发工具', emoji: '🔧' },
    devops: { label: 'DevOps', emoji: '🚀' },
  }

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <ScrollReveal direction="down">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-organic)' }}>
              🔓 技能树
            </h1>
            <p className="text-sky-blue">我掌握的技能和正在学习的领域</p>
          </div>
        </ScrollReveal>

        {/* 分类筛选 */}
        <ScrollReveal delay={100}>
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { value: 'all', label: '全部', emoji: '🌲' },
              { value: 'frontend', label: '前端', emoji: '🎨' },
              { value: 'backend', label: '后端', emoji: '⚙️' },
              { value: 'ai', label: 'AI', emoji: '🤖' },
              { value: 'tools', label: '工具', emoji: '🔧' },
              { value: 'devops', label: 'DevOps', emoji: '🚀' },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setCategoryFilter(filter.value)}
                className={`px-4 py-2 rounded-full transition-all ${
                  categoryFilter === filter.value
                    ? 'glass-organic border-2'
                    : 'bg-white/5'
                }`}
                style={{
                  borderColor: categoryFilter === filter.value ? 'rgba(94, 129, 107, 0.5)' : 'transparent'
                }}
              >
                <span className="mr-1">{filter.emoji}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 技能列表 */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p style={{ color: '#94a89b' }}>加载中...</p>
            </div>
          </div>
        ) : Object.keys(skills).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sky-blue">暂无技能数据</p>
          </div>
        ) : (
          Object.entries(skills).map(([category, categorySkills], groupIndex) => (
            <ScrollReveal key={category} delay={groupIndex * 100}>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
                  <span>{categoryLabels[category]?.emoji || '📁'}</span>
                  {categoryLabels[category]?.label || category}
                  <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: 'rgba(94, 129, 107, 0.3)', color: '#5e816b' }}>
                    {categorySkills.length}
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillTreeCard
                      key={skill.id}
                      skill={skill}
                      delay={index * 50}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))
        )}
      </div>
    </main>
  )
}
