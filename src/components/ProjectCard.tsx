'use client'

import ScrollReveal from './ScrollReveal'

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

interface ProjectCardProps {
  project: Project
  delay?: number
}

const statusConfig = {
  planning: { label: '计划中', emoji: '📋', color: 'bg-gray-500/20 text-gray-300' },
  development: { label: '开发中', emoji: '🔨', color: 'bg-blue-500/20 text-blue-300' },
  completed: { label: '已完成', emoji: '✅', color: 'bg-green-500/20 text-green-300' },
  archived: { label: '已归档', emoji: '📦', color: 'bg-orange-500/20 text-orange-300' },
}

const priorityConfig = {
  high: { label: '高', color: 'text-red-400' },
  medium: { label: '中', color: 'text-yellow-400' },
  low: { label: '低', color: 'text-green-400' },
}

const categoryConfig = {
  web: { label: 'Web应用', emoji: '🌐' },
  ai: { label: 'AI项目', emoji: '🤖' },
  tool: { label: '工具', emoji: '🔧' },
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status as keyof typeof statusConfig] || statusConfig.planning
  const priority = priorityConfig[project.priority as keyof typeof priorityConfig] || priorityConfig.medium
  const category = categoryConfig[project.category as keyof typeof categoryConfig] || { label: '其他', emoji: '📁' }

  return (
    <ScrollReveal delay={delay}>
      <div className="p-4 md:p-6 glass-organic rounded-2xl hover-card-organic transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.emoji}</span>
            <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-tech)' }}>
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${status.color}`}>
              {status.emoji} {status.label}
            </span>
          </div>
        </div>

        <p className="text-sm text-sky-blue mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* 进度条 */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs" style={{ color: '#94a89b' }}>进度</span>
            <span className="text-xs font-bold" style={{ color: '#38a3a5' }}>{project.progress}%</span>
          </div>
          <div className="w-full rounded-full h-2" style={{ background: 'rgba(120, 94, 73, 0.2)' }}>
            <div
              className="progress-bar-organic h-2 rounded-full transition-all duration-700"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(56, 163, 165, 0.2)',
                color: '#38a3a5'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 底部信息 */}
        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'rgba(120, 94, 73, 0.2)' }}>
          <span className={`text-xs ${priority.color}`}>
            优先级: {priority.label}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 rounded transition-colors"
                style={{
                  background: 'rgba(94, 129, 107, 0.3)',
                  color: '#5e816b'
                }}
              >
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 rounded transition-colors"
                style={{
                  background: 'rgba(56, 163, 165, 0.3)',
                  color: '#38a3a5'
                }}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
