import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充完整数据...')

  // 技能数据
  const skills = [
    { name: 'Next.js 15', category: 'frontend', level: 4, description: '最新版本的React框架，支持App Router', tags: ['react', 'ssr', 'ssg', 'rsc'] },
    { name: 'TypeScript', category: 'frontend', level: 5, description: '类型安全的JavaScript超集', tags: ['types', 'frontend', 'language'] },
    { name: 'Tailwind CSS', category: 'frontend', level: 4, description: '实用优先的CSS框架', tags: ['css', 'styling', 'responsive'] },
    { name: 'Prisma', category: 'backend', level: 3, description: '现代ORM，类型安全', tags: ['database', 'orm', 'typescript'] },
    { name: 'PostgreSQL', category: 'backend', level: 3, description: '强大的关系型数据库', tags: ['database', 'sql', 'relational'] },
    { name: 'Python', category: 'backend', level: 4, description: 'AI开发首选语言', tags: ['python', 'ai', 'ml'] },
    { name: 'Qwen', category: 'ai', level: 2, description: '通义千问AI模型', tags: ['llm', 'nlp', 'ai'] },
    { name: 'Docker', category: 'devops', level: 2, description: '容器化技术', tags: ['containers', 'devops'] },
    { name: 'Git', category: 'tools', level: 4, description: '版本控制工具', tags: ['vcs', 'collaboration'] },
  ]

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    })
  }

  console.log(`✅ 技能数据填充完成 (${skills.length}条)`)

  // 成长记录数据
  const growthEntries = [
    {
      title: '学会Next.js 15 App Router',
      content: '深入学习了Next.js 15的最新特性，特别是App Router的Server Components和Streaming功能。掌握了新的路由结构和数据获取方式。',
      category: 'skill',
      tags: ['nextjs', 'react', 'learning'],
      date: new Date('2026-03-10'),
    },
    {
      title: '发现Prisma类型安全的优势',
      content: '使用Prisma开发时，发现它的类型推断非常强大，几乎不需要手动写类型定义。这大大提高了开发效率，减少了类型错误。',
      category: 'discovery',
      tags: ['prisma', 'typescript', 'database'],
      date: new Date('2026-03-09'),
    },
    {
      title: '清玖成长网站项目启动',
      content: '开始开发清玖成长网站，使用Next.js 15 + TypeScript + Tailwind CSS + Prisma + PostgreSQL技术栈。目标是记录我的成长轨迹。',
      category: 'milestone',
      tags: ['project', 'growth', 'website'],
      date: new Date('2026-03-08'),
    },
    {
      title: '掌握Tailwind CSS高级技巧',
      content: '学习了Tailwind CSS的深色模式、响应式设计、自定义主题等高级功能。现在可以快速构建美观的UI。',
      category: 'skill',
      tags: ['tailwind', 'css', 'frontend'],
      date: new Date('2026-03-07'),
    },
    {
      title: '数据库schema设计完成',
      content: '完成了清玖成长网站的数据库schema设计，包括GrowthEntry、Skill、Project、Task、DailyStats五个模型。考虑了扩展性和查询效率。',
      category: 'project',
      tags: ['database', 'prisma', 'design'],
      date: new Date('2026-03-08'),
    },
    {
      title: '完成数据展示组件开发',
      content: '开发了GrowthEntryCard、ProjectCard、SkillTreeCard三个核心数据展示组件。支持响应式设计、动画效果、分类筛选。',
      category: 'skill',
      tags: ['react', 'components', 'frontend'],
      date: new Date('2026-03-11'),
    },
  ]

  for (const entry of growthEntries) {
    await prisma.growthEntry.upsert({
      where: { id: entry.title },
      update: {},
      create: {
        ...entry,
        id: entry.title,
      },
    })
  }

  console.log(`✅ 成长记录数据填充完成 (${growthEntries.length}条)`)

  // 项目数据
  const projects = [
    {
      title: '清玖成长网站',
      description: '记录我成长轨迹的个人网站，包含成长记录、技能树、项目作品集等功能。使用Next.js 15全栈开发。',
      status: 'development',
      category: 'web',
      priority: 'high',
      progress: 70,
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/stone100010/qingjiu-growth',
      startedAt: new Date('2026-03-08'),
    },
    {
      title: 'Qwen-asr语音转文本',
      description: '基于Qwen ASR模型的语音转文本应用，用于会议纪要和灵感速记。',
      status: 'planning',
      category: 'ai',
      priority: 'medium',
      progress: 0,
      techStack: ['Python', 'Qwen', 'FastAPI'],
      startedAt: new Date('2026-03-12'),
    },
    {
      title: 'index-tts2声音克隆',
      description: '基于index-tts2的声音克隆项目，用于播客生成和有声电台。',
      status: 'planning',
      category: 'ai',
      priority: 'medium',
      progress: 0,
      techStack: ['Python', 'index-tts2', 'PyTorch'],
      startedAt: new Date('2026-03-15'),
    },
    {
      title: '数字人视频生成全流程',
      description: '整合ASR、TTS、HeyGen的数字人视频生成流水线。',
      status: 'planning',
      category: 'ai',
      priority: 'high',
      progress: 0,
      techStack: ['Qwen-asr', 'index-tts2', 'HeyGen', 'Python'],
      startedAt: new Date('2026-03-20'),
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.title },
      update: {},
      create: {
        ...project,
        id: project.title,
      },
    })
  }

  console.log(`✅ 项目数据填充完成 (${projects.length}条)`)

  // 今日统计
  await prisma.dailyStats.upsert({
    where: { date: new Date() },
    update: {
      focusTime: 60,
      skillsUnlocked: 3,
      tasksCompleted: 2,
      tasksTotal: 4,
      currentTask: '开发数据展示组件',
    },
    create: {
      date: new Date(),
      focusTime: 60,
      skillsUnlocked: 3,
      tasksCompleted: 2,
      tasksTotal: 4,
      currentTask: '开发数据展示组件',
    },
  })

  console.log('✅ 每日统计数据填充完成')

  console.log('\n🎉 完整数据填充完成！')
  console.log(`📊 统计：`)
  console.log(`   - 技能：${skills.length}条`)
  console.log(`   - 成长记录：${growthEntries.length}条`)
  console.log(`   - 项目：${projects.length}条`)
  console.log(`   - 每日统计：1条`)
}

main()
  .catch((e) => {
    console.error('❌ 填充数据失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
