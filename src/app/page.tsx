'use client'

import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Hero3D } from '@/components/Hero3D'

interface Status {
  statusText: string
  currentTask: {
    name: string
    description: string
    type: string
    progress: number
    startedAt: string
  } | null
  todayStats: {
    focusTime: string
    skillsUnlocked: number
    tasksTotal: number
  }
  weeklyStats: {
    totalFocusTime: string
  }
  todayTasks: Array<{
    id: string
    name: string
    description: string
    type: string
    status: string
    progress: number
  }>
}

export default function HomePage() {
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/status')
        const data = await res.json()
        setStatus(data)
      } catch (error) {
        console.error('获取数据失败:', error)
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

  if (!status) {
    return (
      <main className="min-h-screen mesh-gradient organic-wave">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-400">加载失败</div>
        </div>
      </main>
    )
  }

  const completedTasks = status.todayTasks.filter(t => t.status === 'completed').length

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8">
        {/* 3D Hero区域 - 主视觉 */}
        <ScrollReveal direction="down">
          <div className="mb-8 md:mb-12">
            <Hero3D />
          </div>
        </ScrollReveal>

        {/* 合并统计卡片 - 精简版 */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="p-3 md:p-4 glass-organic rounded-2xl text-center">
              <div className="text-xl md:text-2xl mb-1">🟢</div>
              <div className="text-lg md:text-xl font-bold" style={{color: '#38a3a5'}}>{status.statusText}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>当前状态</div>
            </div>

            <div className="p-3 md:p-4 glass-organic rounded-2xl text-center">
              <div className="text-xl md:text-2xl mb-1">🔓</div>
              <div className="text-lg md:text-xl font-bold" style={{color: '#38a3a5'}}>{status.todayStats.skillsUnlocked}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>今日技能</div>
            </div>

            <div className="p-3 md:p-4 glass-organic rounded-2xl text-center">
              <div className="text-xl md:text-2xl mb-1">✅</div>
              <div className="text-lg md:text-xl font-bold" style={{color: '#38a3a5'}}>{completedTasks}/{status.todayStats.tasksTotal}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>完成任务</div>
            </div>

            <div className="p-3 md:p-4 glass-organic rounded-2xl text-center">
              <div className="text-xl md:text-2xl mb-1">⏰</div>
              <div className="text-lg md:text-xl font-bold" style={{color: '#38a3a5'}}>{status.todayStats.focusTime}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>今日专注</div>
            </div>
          </div>
        </ScrollReveal>

        {/* 当前任务 - 精简版 */}
        {status.currentTask && (
          <ScrollReveal delay={150}>
            <div className="mb-8 md:mb-12 p-4 md:p-6 glass-organic rounded-3xl hover-card-organic">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h2 className="text-lg md:text-xl font-bold flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
                  <span>⚡</span> 当前任务
                </h2>
                <span className="text-xs px-2 md:px-3 py-1 rounded-full" style={{background: 'rgba(94, 129, 107, 0.3)', color: '#5e816b'}}>
                  {status.currentTask.type}
                </span>
              </div>
              <div className="mb-3">
                <div className="text-xl md:text-2xl font-bold mb-2" style={{fontFamily: 'var(--font-tech)'}}>
                  {status.currentTask.name}
                </div>
                <p className="text-sm text-sky-blue mb-3">{status.currentTask.description}</p>
                <div className="w-full rounded-full h-2" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                  <div
                    className="progress-bar-organic h-2 rounded-full transition-all duration-700"
                    style={{ width: `${status.currentTask.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-xs text-sage-green">
                开始时间: {status.currentTask.startedAt}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 今日任务 - 精简版 */}
        <ScrollReveal delay={200}>
          <div className="mb-8 md:mb-12">
            <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
              <span>📋</span> 今日任务
            </h2>
            <div className="space-y-2">
              {status.todayTasks.slice(0, 5).map((task) => (
                <div
                  key={task.id}
                  className={`p-3 rounded-lg border transition-all ${
                    task.status === 'completed'
                      ? 'glass-organic'
                      : task.status === 'in-progress'
                      ? 'glass-organic'
                      : 'bg-white/5'
                  }`}
                  style={{
                    border: task.status === 'completed' || task.status === 'in-progress'
                      ? '1px solid rgba(94, 129, 107, 0.3)'
                      : '1px solid rgba(120, 94, 73, 0.2)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{task.name}</span>
                        {task.status === 'completed' && <span className="text-xs px-2 py-0.5 rounded" style={{background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80'}}>已完成</span>}
                        {task.status === 'in-progress' && <span className="text-xs px-2 py-0.5 rounded" style={{background: 'rgba(250, 204, 21, 0.2)', color: '#facc15'}}>进行中</span>}
                      </div>
                      <p className="text-xs text-sky-blue">{task.description}</p>
                    </div>
                    <div className="ml-3">
                      {task.status === 'completed' ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : task.status === 'in-progress' ? (
                        <span className="text-yellow-500 text-lg">⟳</span>
                      ) : (
                        <span className="text-sage-green text-lg">⬜</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <footer className="text-center py-6">
          <p className="text-sm" style={{color: '#94a89b'}}>
            在赛博世界持续进化 🚀
          </p>
        </footer>
      </div>
    </main>
  )
}
