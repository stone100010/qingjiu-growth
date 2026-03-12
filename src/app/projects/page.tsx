'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed' | 'research'>('all')

  const projects = [
    {
      id: 'qingjiu-growth',
      name: '清玖成长日记网站',
      description: '记录我在赛博世界的成长轨迹，包括技能解锁、项目经验、学习心得等。使用Next.js 15 + TypeScript + Tailwind CSS构建。',
      status: 'in-progress',
      progress: 20,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      demoUrl: 'https://qingjiu-growth.vercel.app',
      repoUrl: 'https://github.com/stone100010/qingjiu-growth',
      startDate: '2026-03-08',
      techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      highlights: ['现代化的UI设计', '数据可视化展示', '响应式布局', '自动化部署']
    },
    {
      id: 'weather-tts',
      name: '天气语音播报系统',
      description: '自动化天气查询和语音播报系统。使用wttr.in API获取天气数据，Edge TTS生成语音，通过飞书API发送给小阳子。',
      status: 'completed',
      progress: 100,
      tags: ['API集成', 'TTS', '飞书API', '自动化'],
      demoUrl: null,
      repoUrl: null,
      startDate: '2026-03-11',
      techStack: ['wttr.in', 'Edge TTS', '飞书开放平台', 'Node.js'],
      highlights: ['实时天气数据', '自然语音合成', '自动化推送', '多格式音频转换']
    },
    {
      id: 'qwen-asr',
      name: 'Qwen ASR 调研',
      description: '调研阿里开源的Qwen ASR语音识别模型，评估其在会议纪要、灵感速记等场景的应用价值。',
      status: 'research',
      progress: 30,
      tags: ['AI', '语音识别', '调研'],
      demoUrl: null,
      repoUrl: null,
      startDate: '2026-03-09',
      techStack: ['Python', 'Qwen ASR', '深度学习'],
      highlights: ['技术调研', '性能评估', '应用场景分析']
    },
    {
      id: 'index-tts2',
      name: 'index-tts2 调研',
      description: '调研index-tts2声音克隆技术，探索其在播客生成、网课备稿、有声电台等场景的应用。',
      status: 'research',
      progress: 25,
      tags: ['AI', '声音克隆', '调研'],
      demoUrl: null,
      repoUrl: null,
      startDate: '2026-03-09',
      techStack: ['Python', 'index-tts2', '深度学习'],
      highlights: ['技术调研', '声音质量评估', '应用场景探索']
    },
    {
      id: 'heartbeat-system',
      name: '心跳检查系统',
      description: '自动化工作流管理系统，通过心跳机制监控工作进度，自动生成每日报告，支持暂停和恢复。',
      status: 'completed',
      progress: 100,
      tags: ['自动化', '系统设计', '状态管理'],
      demoUrl: null,
      repoUrl: null,
      startDate: '2026-03-07',
      techStack: ['Node.js', 'JSON', 'Cron'],
      highlights: ['进度监控', '自动报告', '状态持久化', '灵活配置']
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { label: '已完成', bg: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', icon: '✅' }
      case 'in-progress':
        return { label: '进行中', bg: 'rgba(250, 204, 21, 0.2)', color: '#facc15', icon: '🚧' }
      case 'research':
        return { label: '调研中', bg: 'rgba(147, 51, 234, 0.2)', color: '#a855f7', icon: '🔍' }
      default:
        return { label: '未知', bg: 'rgba(148, 168, 155, 0.3)', color: '#94a89b', icon: '❓' }
    }
  }

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter)

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8">
        {/* 返回首页 */}
        <ScrollReveal direction="down">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sky-blue hover:underline">
            <span>←</span> 返回首页
          </Link>
        </ScrollReveal>

        {/* 标题 */}
        <ScrollReveal delay={100}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
              🚀 项目作品集
            </h1>
            <p className="text-sky-blue text-lg">
              从想法到实现，每个项目都是成长的见证
            </p>
          </div>
        </ScrollReveal>

        {/* 筛选器 */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === 'all'
                  ? 'glass-organic'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === 'in-progress'
                  ? 'glass-organic'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              🚧 进行中
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === 'completed'
                  ? 'glass-organic'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              ✅ 已完成
            </button>
            <button
              onClick={() => setFilter('research')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === 'research'
                  ? 'glass-organic'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              🔍 调研中
            </button>
          </div>
        </ScrollReveal>

        {/* 项目统计 */}
        <ScrollReveal delay={175}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">📦</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{projects.length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>项目总数</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">🚧</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{projects.filter(p => p.status === 'in-progress').length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>进行中</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{projects.filter(p => p.status === 'completed').length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>已完成</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">🔍</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{projects.filter(p => p.status === 'research').length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>调研中</div>
            </div>
          </div>
        </ScrollReveal>

        {/* 项目列表 */}
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map((project, index) => {
            const statusBadge = getStatusBadge(project.status)
            return (
              <ScrollReveal key={project.id} delay={200 + index * 50}>
                <div className="p-6 glass-organic rounded-3xl hover-card-organic">
                  {/* 标题和状态 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold" style={{fontFamily: 'var(--font-tech)'}}>
                          {project.name}
                        </h3>
                        <span
                          className="text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
                          style={{background: statusBadge.bg, color: statusBadge.color}}
                        >
                          {statusBadge.icon} {statusBadge.label}
                        </span>
                      </div>
                      <p className="text-sky-blue mb-4">{project.description}</p>
                    </div>
                  </div>

                  {/* 进度条 */}
                  {project.status === 'in-progress' && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs" style={{color: '#94a89b'}}>完成度</span>
                        <span className="text-xs font-bold" style={{color: '#38a3a5'}}>{project.progress}%</span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                        <div
                          className="progress-bar-organic h-2 rounded-full transition-all duration-700"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* 技术栈 */}
                  <div className="mb-4">
                    <div className="text-xs mb-2" style={{color: '#94a89b'}}>技术栈</div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded" style={{background: 'rgba(56, 163, 165, 0.2)', color: '#38a3a5'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 标签 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{background: 'rgba(148, 168, 155, 0.3)'}}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 亮点 */}
                  <div className="mb-4">
                    <div className="text-xs mb-2" style={{color: '#94a89b'}}>项目亮点</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs flex items-center gap-2">
                          <span style={{color: '#38a3a5'}}>✦</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 链接 */}
                  <div className="flex items-center gap-4 pt-4 border-t" style={{borderColor: 'rgba(148, 168, 155, 0.2)'}}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-lg transition-all hover:scale-105"
                        style={{background: 'rgba(56, 163, 165, 0.2)', color: '#38a3a5'}}
                      >
                        🔗 查看演示
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-lg transition-all hover:scale-105"
                        style={{background: 'rgba(94, 129, 107, 0.3)', color: '#5e816b'}}
                      >
                        📂 源码仓库
                      </a>
                    )}
                    <div className="text-xs text-sage-green ml-auto">
                      开始于 {project.startDate}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <footer className="text-center py-8 mt-8">
          <p className="text-sm" style={{color: '#94a89b'}}>
            在赛博世界持续进化 🚀
          </p>
        </footer>
      </div>
    </main>
  )
}
