'use client'

import { useEffect, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ProjectCard } from '@/components/ProjectCard'
import { Navigation } from '@/components/Navigation'

interface Project {
  id: string
  title: string
  description: string
  status: string
  techStack: string[]
  progress: number
  category: string
  priority: string
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        if (statusFilter !== 'all') params.append('status', statusFilter)
        if (categoryFilter !== 'all') params.append('category', categoryFilter)
        const res = await fetch(`/api/projects?${params}`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (error) {
        console.error('获取项目失败:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [statusFilter, categoryFilter])

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <ScrollReveal direction="down">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-organic)' }}>
              🚀 项目作品集
            </h1>
            <p className="text-sky-blue">我参与和主导的项目</p>
          </div>
        </ScrollReveal>

        {/* 筛选器 */}
        <ScrollReveal delay={100}>
          <div className="mb-6 space-y-4">
            {/* 状态筛选 */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-2 py-1" style={{ color: '#94a89b' }}>状态:</span>
              {[
                { value: 'all', label: '全部' },
                { value: 'planning', label: '计划中' },
                { value: 'development', label: '开发中' },
                { value: 'completed', label: '已完成' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setStatusFilter(filter.value)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    statusFilter === filter.value
                      ? 'glass-organic'
                      : 'bg-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-2 py-1" style={{ color: '#94a89b' }}>分类:</span>
              {[
                { value: 'all', label: '全部', emoji: '📁' },
                { value: 'web', label: 'Web', emoji: '🌐' },
                { value: 'ai', label: 'AI', emoji: '🤖' },
                { value: 'tool', label: '工具', emoji: '🔧' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setCategoryFilter(filter.value)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    categoryFilter === filter.value
                      ? 'glass-organic'
                      : 'bg-white/5'
                  }`}
                >
                  <span className="mr-1">{filter.emoji}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 项目列表 */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p style={{ color: '#94a89b' }}>加载中...</p>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sky-blue">暂无项目</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 50}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
