'use client'

import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface SkillNode {
  id: string
  name: string
  category: string
  level?: number
  progress?: number
  description?: string
  learnedAt?: string
  tags: string[]
}

interface SkillTree {
  unlocked: SkillNode[]
  learning: SkillNode[]
  planned: SkillNode[]
}

const categories = [
  { key: 'frontend' as const, label: '前端开发', icon: '🎨' },
  { key: 'backend' as const, label: '后端开发', icon: '⚙️' },
  { key: 'ai' as const, label: 'AI/ML', icon: '🤖' },
  { key: 'tools' as const, label: '开发工具', icon: '🔧' },
  { key: 'soft' as const, label: '软技能', icon: '💡' },
]

export default function SkillsPage() {
  const [skillTree, setSkillTree] = useState<SkillTree | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/skills')
        const data = await res.json()
        setSkillTree(data)
      } catch (error) {
        console.error('获取技能失败:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen mesh-gradient organic-wave">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p style={{color: '#94a89b'}}>加载中...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!skillTree) {
    return (
      <main className="min-h-screen mesh-gradient organic-wave">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-400">加载失败</div>
        </div>
      </main>
    )
  }

  const totalUnlocked = skillTree.unlocked.length
  const totalLearning = skillTree.learning.length
  const totalPlanned = skillTree.planned.length

  return (
    <main className="min-h-screen mesh-gradient organic-wave" style={{background: 'radial-gradient(ellipse at top left, rgba(94, 129, 107, 0.2), transparent 50%), radial-gradient(ellipse at bottom right, rgba(56, 163, 165, 0.15), transparent 50%), linear-gradient(135deg, #0f231c, #1a4455)'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{fontFamily: 'var(--font-tech)', background: 'linear-gradient(to right, #5e816b, #38a3a5, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            ⚡ 技能树
          </h1>
          <p style={{color: '#94a89b', fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            每日点亮的技能成长路径
          </p>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="p-4 md:p-6 rounded-3xl glass-organic" style={{border: '1px solid rgba(94, 129, 107, 0.3)'}}>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">✅</div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2" style={{color: '#38a3a5'}}>{totalUnlocked}</div>
              <div className="text-xs md:text-sm" style={{color: '#94a89b'}}>已解锁技能</div>
            </div>

            <div className="p-4 md:p-6 rounded-3xl glass-organic" style={{border: '1px solid rgba(79, 172, 254, 0.3)'}}>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">📚</div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2" style={{color: '#4facfe'}}>{totalLearning}</div>
              <div className="text-xs md:text-sm" style={{color: '#94a89b'}}>学习中</div>
            </div>

            <div className="p-4 md:p-6 rounded-3xl glass-organic" style={{border: '1px solid rgba(120, 94, 73, 0.3)'}}>
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">📋</div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2" style={{color: '#785e49'}}>{totalPlanned}</div>
              <div className="text-xs md:text-sm" style={{color: '#94a89b'}}>计划中</div>
            </div>
          </div>
        </ScrollReveal>

        {categories.map((category, idx) => {
          const categorySkills = {
            unlocked: skillTree.unlocked.filter(s => s.category === category.key),
            learning: skillTree.learning.filter(s => s.category === category.key),
            planned: skillTree.planned.filter(s => s.category === category.key),
          }
          const allSkills = [...categorySkills.unlocked, ...categorySkills.learning, ...categorySkills.planned]

          if (allSkills.length === 0) return null

          return (
            <ScrollReveal key={category.key} delay={100 + idx * 50}>
              <div className="mb-8 md:mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
                  <span>{category.icon}</span> {category.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allSkills.map((skill) => {
                    const isUnlocked = skillTree.unlocked.some(s => s.id === skill.id)
                    const isLearning = skillTree.learning.some(s => s.id === skill.id)

                    return (
                      <div
                        key={skill.id}
                        className={`p-3 md:p-4 rounded-2xl transition-all hover-card-organic ${
                          isUnlocked ? 'glass-organic' : 'bg-white/5'
                        }`}
                        style={{
                          border: isUnlocked ? '1px solid rgba(94, 129, 107, 0.3)' : '1px solid rgba(120, 94, 73, 0.2)'
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-base md:text-lg font-semibold" style={{fontFamily: 'var(--font-tech)', color: isUnlocked ? '#38a3a5' : '#94a89b'}}>
                            {skill.name}
                          </h3>
                          {isUnlocked && <span className="text-lg">✅</span>}
                        </div>
                        {skill.description && (
                          <p className="text-xs md:text-sm mb-2" style={{color: '#94a89b'}}>
                            {skill.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs" style={{color: '#5e816b'}}>
                          {isLearning && <span className="px-2 py-1 rounded" style={{background: 'rgba(79, 172, 254, 0.2)', color: '#4facfe'}}>学习中 {skill.progress}%</span>}
                          {!isUnlocked && !isLearning && <span>未解锁</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </main>
  )
}
