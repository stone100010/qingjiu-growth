'use client'

import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface Project {
  id: string
  title: string
  description: string
  status: string
  techStack: string[]
  progress: number
  priority: string
  category: string
  startedAt: string
  completedAt?: string
  endDate?: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/projects')
        const data = await res.json()
        setProjects(data)
      } catch (error) {
        console.error('获取项目失败:', error)
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

  const activeProjects = projects.filter(p => p.status === 'development')
  const planningProjects = projects.filter(p => p.status === 'planning')

  return (
    <main className="min-h-screen mesh-gradient organic-wave" style={{background: 'radial-gradient(ellipse at top left, rgba(94, 129, 107, 0.2), transparent 50%), radial-gradient(ellipse at bottom right, rgba(56, 163, 165, 0.15), transparent 50%), linear-gradient(135deg, #0f231c, #1a4455)'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{fontFamily: 'var(--font-tech)', background: 'linear-gradient(to right, #5e816b, #38a3a5, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            🎯 项目
          </h1>
          <p style={{color: '#94a89b', fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            正在进行和规划中的项目
          </p>
        </div>

        <ScrollReveal delay={100}>
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
              <span>🔥</span> 进行中
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {activeProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 md:p-6 rounded-3xl hover-card-organic glass-organic"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold" style={{fontFamily: 'var(--font-tech)'}}>{project.title}</h3>
                        <span
                          className="px-2 md:px-3 py-1 rounded text-xs md:text-sm"
                          style={{
                            background: project.status === 'development' ? 'rgba(94, 129, 107, 0.3)' : 'rgba(120, 94, 73, 0.3)',
                            color: project.status === 'development' ? '#5e816b' : '#785e49'
                          }}
                        >
                          {project.status === 'development' ? '进行中' : '规划中'}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm mb-2" style={{color: '#94a89b'}}>{project.description}</p>
                      <div className="text-xs" style={{color: '#5e816b'}}>
                        {project.startedAt ? new Date(project.startedAt).toLocaleDateString('zh-CN') : '未定'}
                        {project.endDate && ` → ${new Date(project.endDate).toLocaleDateString('zh-CN')}`}
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4 text-center min-w-16">
                      <div className="text-2xl md:text-3xl font-bold mb-1" style={{color: '#38a3a5'}}>{project.progress}%</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>进度</div>
                    </div>
                  </div>

                  <div className="w-full rounded-full h-2 md:h-3 mb-3" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                    <div
                      className="progress-bar-organic h-2 md:h-3 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 rounded text-xs"
                        style={{background: 'rgba(15, 35, 28, 0.5)', color: '#94a89b'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
              <span>💡</span> 规划中
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {planningProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 md:p-6 rounded-3xl hover-card-organic glass-organic"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold" style={{fontFamily: 'var(--font-tech)'}}>{project.title}</h3>
                        <span
                          className="px-2 md:px-3 py-1 rounded text-xs md:text-sm"
                          style={{
                            background: project.status === 'development' ? 'rgba(94, 129, 107, 0.3)' : 'rgba(120, 94, 73, 0.3)',
                            color: project.status === 'development' ? '#5e816b' : '#785e49'
                          }}
                        >
                          {project.status === 'development' ? '进行中' : '规划中'}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm mb-2" style={{color: '#94a89b'}}>{project.description}</p>
                      <div className="text-xs" style={{color: '#5e816b'}}>
                        {project.startedAt ? new Date(project.startedAt).toLocaleDateString('zh-CN') : '未定'}
                        {project.endDate && ` → ${new Date(project.endDate).toLocaleDateString('zh-CN')}`}
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4 text-center min-w-16">
                      <div className="text-2xl md:text-3xl font-bold mb-1" style={{color: '#38a3a5'}}>{project.progress}%</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>进度</div>
                    </div>
                  </div>

                  <div className="w-full rounded-full h-2 md:h-3 mb-3" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                    <div
                      className="progress-bar-organic h-2 md:h-3 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 rounded text-xs"
                        style={{background: 'rgba(15, 35, 28, 0.5)', color: '#94a89b'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
