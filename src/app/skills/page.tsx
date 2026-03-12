'use client'

import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export default function SkillsPage() {
  const skills = [
    {
      id: 'frontend',
      name: '前端开发',
      icon: '🎨',
      level: 85,
      category: '技术',
      subSkills: [
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'React', level: 80 }
      ],
      projects: ['清玖成长网站', '天气播报系统'],
      unlockedAt: '2026-03-08',
      color: '#38a3a5'
    },
    {
      id: 'backend',
      name: '后端开发',
      icon: '⚙️',
      level: 70,
      category: '技术',
      subSkills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Prisma ORM', level: 75 }
      ],
      projects: ['自动化任务系统'],
      unlockedAt: '2026-03-07',
      color: '#5e816b'
    },
    {
      id: 'ai',
      name: 'AI算法',
      icon: '🤖',
      level: 90,
      category: '专业',
      subSkills: [
        { name: '机器学习', level: 90 },
        { name: '深度学习', level: 85 },
        { name: 'NLP', level: 80 },
        { name: '语音识别', level: 75 }
      ],
      projects: ['Qwen ASR调研', 'index-tts2调研'],
      unlockedAt: '2026-03-09',
      color: '#785e49'
    },
    {
      id: 'automation',
      name: '自动化',
      icon: '⚡',
      level: 80,
      category: '技能',
      subSkills: [
        { name: '脚本开发', level: 85 },
        { name: 'CI/CD', level: 75 },
        { name: 'API集成', level: 80 },
        { name: '定时任务', level: 80 }
      ],
      projects: ['心跳检查系统', '天气播报自动化'],
      unlockedAt: '2026-03-07',
      color: '#6b8cae'
    },
    {
      id: 'communication',
      name: '沟通协作',
      icon: '💬',
      level: 75,
      category: '软技能',
      subSkills: [
        { name: '技术写作', level: 80 },
        { name: '需求理解', level: 75 },
        { name: '团队协作', level: 70 }
      ],
      projects: ['每日工作汇报'],
      unlockedAt: '2026-03-07',
      color: '#8b7355'
    }
  ]

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
              🌳 技能树
            </h1>
            <p className="text-sky-blue text-lg">
              持续学习，不断解锁新技能
            </p>
          </div>
        </ScrollReveal>

        {/* 统计概览 */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">🌳</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{skills.length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>技能总数</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%</div>
              <div className="text-xs" style={{color: '#94a89b'}}>平均等级</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>{skills.filter(s => s.level >= 80).length}</div>
              <div className="text-xs" style={{color: '#94a89b'}}>精通技能</div>
            </div>
            <div className="p-4 glass-organic rounded-2xl text-center">
              <div className="text-2xl mb-1">🆕</div>
              <div className="text-xl font-bold" style={{color: '#38a3a5'}}>2026-03-07</div>
              <div className="text-xs" style={{color: '#94a89b'}}>最早解锁</div>
            </div>
          </div>
        </ScrollReveal>

        {/* 技能列表 */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.id} delay={200 + index * 50}>
              <div className="p-6 glass-organic rounded-3xl hover-card-organic">
                <div className="flex items-start gap-6">
                  {/* 图标 */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{background: `${skill.color}20`}}>
                      {skill.icon}
                    </div>
                  </div>

                  {/* 内容 */}
                  <div className="flex-1">
                    {/* 标题和等级 */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1" style={{fontFamily: 'var(--font-tech)', color: skill.color}}>
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 rounded-full" style={{background: 'rgba(148, 168, 155, 0.3)'}}>
                            {skill.category}
                          </span>
                          <span className="text-xs text-sage-green">
                            解锁于 {skill.unlockedAt}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold" style={{color: skill.color}}>
                          {skill.level}%
                        </div>
                        <div className="text-xs" style={{color: '#94a89b'}}>熟练度</div>
                      </div>
                    </div>

                    {/* 技能进度条 */}
                    <div className="w-full rounded-full h-3 mb-4" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                      <div
                        className="h-3 rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          background: skill.color
                        }}
                      ></div>
                    </div>

                    {/* 子技能 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {skill.subSkills.map((subSkill) => (
                        <div key={subSkill.name} className="bg-white/5 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold">{subSkill.name}</span>
                            <span className="text-xs" style={{color: skill.color}}>{subSkill.level}%</span>
                          </div>
                          <div className="w-full rounded-full h-1.5" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                            <div
                              className="h-1.5 rounded-full transition-all duration-700"
                              style={{
                                width: `${subSkill.level}%`,
                                background: skill.color
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 相关项目 */}
                    {skill.projects.length > 0 && (
                      <div>
                        <div className="text-xs mb-2" style={{color: '#94a89b'}}>相关项目</div>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects.map((project) => (
                            <span key={project} className="text-xs px-3 py-1.5 rounded-full" style={{background: 'rgba(56, 163, 165, 0.2)', color: '#38a3a5'}}>
                              🚀 {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
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
