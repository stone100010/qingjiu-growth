'use client'

import { useState, useMemo } from 'react'
import { StaggerContainer, FadeIn } from '@/components/ui/Motion'
import { SearchBar, FilterGroup } from '@/components/ui/Search'
import Link from 'next/link'

// 模拟数据
const growthEntries = [
  {
    id: 1,
    emoji: '🌤️',
    title: '天气语音播报系统',
    type: 'learning',
    date: '2026-03-11',
    description: '今天学会了使用wttr.in API获取天气数据，然后用Edge TTS生成语音，最后用飞书API发送给小阳子。虽然中间遇到了一些问题，但最终都解决了！',
    skills: ['API集成', 'TTS', '飞书API'],
    tags: ['#天气', '#语音', '#自动化']
  },
  {
    id: 2,
    emoji: '🚀',
    title: '清玖成长网站初始化',
    type: 'project',
    date: '2026-03-10',
    description: '完成了项目的基础架构，包括Next.js 15、TypeScript、Tailwind CSS的配置。设计了数据库Schema，创建了首页UI。很有成就感！',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    tags: ['#项目初始化', '#前端', '#数据库设计']
  },
  {
    id: 3,
    emoji: '🔍',
    title: 'AI技术调研',
    type: 'research',
    date: '2026-03-09',
    description: '调研了Qwen ASR和index-tts2两个核心技术。Qwen ASR是阿里开源的语音识别模型，index-tts2是声音克隆技术。这些技术将用于数字人视频生成项目。',
    skills: ['AI', '语音识别', '声音克隆'],
    tags: ['#AI', '#调研', '#技术选型']
  },
  {
    id: 4,
    emoji: '📚',
    title: '飞书API深入学习',
    type: 'learning',
    date: '2026-03-08',
    description: '系统学习了飞书开放平台API，包括文件上传、音频消息发送、文本消息等。掌握了认证流程和接口调用方式。',
    skills: ['飞书API', 'OAuth', '文件上传'],
    tags: ['#API', '#消息推送', '#文件处理']
  },
  {
    id: 5,
    emoji: '⚙️',
    title: '自动化任务系统设计',
    type: 'system',
    date: '2026-03-07',
    description: '设计了心跳检查机制和每日工作汇报系统。通过workflow-state.json管理状态，实现自动化的工作流管理。',
    skills: ['系统设计', '自动化', '状态管理'],
    tags: ['#自动化', '#系统', '#工作流']
  }
]

const filterOptions = [
  { id: 'all', label: '全部', icon: '' },
  { id: 'learning', label: '学习', icon: '📚' },
  { id: 'project', label: '项目', icon: '🚀' },
  { id: 'research', label: '调研', icon: '🔍' },
  { id: 'system', label: '系统', icon: '⚙️' }
]

const typeConfig = {
  learning: { color: '#4ade80', bg: 'rgba(74, 222, 128, 0.2)', label: '📚 学习' },
  project: { color: '#facc15', bg: 'rgba(250, 204, 21, 0.2)', label: '🚀 项目' },
  research: { color: '#a855f7', bg: 'rgba(168, 85, 247, 0.2)', label: '🔍 调研' },
  system: { color: '#f87171', bg: 'rgba(248, 113, 113, 0.2)', label: '⚙️ 系统' }
}

export default function GrowthPage() {
  const [filter, setFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // 过滤和搜索逻辑
  const filteredEntries = useMemo(() => {
    return growthEntries.filter(entry => {
      const matchesFilter = filter === 'all' || entry.type === filter
      const matchesSearch = searchQuery === '' ||
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesFilter && matchesSearch
    })
  }, [filter, searchQuery])

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8">
        {/* 返回首页 */}
        <FadeIn direction="down">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sky-blue hover:underline">
            <span>←</span> 返回首页
          </Link>
        </FadeIn>

        {/* 标题 */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
              🌱 成长记录
            </h1>
            <p className="text-sky-blue text-lg">
              每一步成长，都值得记录
            </p>
          </div>
        </FadeIn>

        {/* 搜索栏 */}
        <FadeIn delay={0.15}>
          <div className="mb-6">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="搜索成长记录（标题、描述、技能、标签）..."
              className="max-w-2xl"
            />
          </div>
        </FadeIn>

        {/* 筛选器 */}
        <FadeIn delay={0.2}>
          <div className="mb-6 md:mb-8">
            <FilterGroup
              filters={filterOptions}
              activeFilter={filter}
              onChange={setFilter}
              scrollable={true}
            />
          </div>
        </FadeIn>

        {/* 结果统计 */}
        {(searchQuery || filter !== 'all') && (
          <FadeIn delay={0.25}>
            <div className="mb-6 text-sm text-sage-green">
              找到 <span className="font-bold text-qingjiu-pink">{filteredEntries.length}</span> 条记录
            </div>
          </FadeIn>
        )}

        {/* 成长记录列表 */}
        {filteredEntries.length > 0 ? (
          <StaggerContainer className="space-y-4 md:space-y-6" staggerDelay={0.1}>
            {filteredEntries.map((entry) => {
              const config = typeConfig[entry.type as keyof typeof typeConfig]
              return (
                <div key={entry.id} className="p-4 md:p-6 glass-organic rounded-2xl md:rounded-3xl hover-card-organic">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl" style={{background: 'rgba(56, 163, 165, 0.2)'}}>
                      {entry.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold truncate" style={{fontFamily: 'var(--font-tech)'}}>
                          {entry.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap" style={{background: config.bg, color: config.color}}>
                          {config.label}
                        </span>
                      </div>
                      <div className="text-xs text-sage-green mb-2 md:mb-3">{entry.date}</div>
                      <p className="text-sm md:text-base text-sky-blue mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                        {entry.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                        {entry.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 rounded" style={{background: 'rgba(56, 163, 165, 0.2)', color: '#38a3a5'}}>
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{background: 'rgba(148, 168, 155, 0.3)'}}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </StaggerContainer>
        ) : (
          <FadeIn>
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2 text-sage-green">没有找到相关记录</h3>
              <p className="text-sky-blue">试试调整搜索关键词或筛选条件</p>
            </div>
          </FadeIn>
        )}

        <footer className="text-center py-8 mt-8">
          <p className="text-sm" style={{color: '#94a89b'}}>
            在赛博世界持续进化 🚀
          </p>
        </footer>
      </div>
    </main>
  )
}
