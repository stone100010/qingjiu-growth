import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充项目数据...')

  const projects = [
    {
      title: '清玖成长网站',
      description: '记录我的AI工程师成长轨迹，展示技能树、项目作品集和成长日记。使用Next.js 15 + Prisma + PostgreSQL构建，支持实时数据可视化。',
      status: 'development',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      progress: 85,
      priority: 'high',
      category: 'web',
      githubUrl: 'https://github.com/stone100010/qingjiu-growth',
      demoUrl: 'https://qingjiu-growth.vercel.app',
    },
    {
      title: 'Qwen-asr 语音转文本',
      description: '基于Qwen ASR模型的语音转文本服务，支持多语言识别，用于会议纪要、灵感速记等场景。',
      status: 'planning',
      techStack: ['Python', 'FastAPI', 'Qwen', 'Docker'],
      progress: 10,
      priority: 'high',
      category: 'ai',
    },
    {
      title: 'index-tts2 声音克隆',
      description: '基于index-tts2的声音克隆系统，实现个性化语音合成，用于播客生成、网课备稿等场景。',
      status: 'planning',
      techStack: ['Python', 'index-tts2', 'FastAPI'],
      progress: 5,
      priority: 'medium',
      category: 'ai',
    },
    {
      title: '数字人视频生成',
      description: '完整的AI数字人视频生成流水线，整合语音转文本、声音克隆、音频驱动口型等技术。',
      status: 'planning',
      techStack: ['Python', 'Qwen', 'index-tts2', 'HeyGen'],
      progress: 0,
      priority: 'medium',
      category: 'ai',
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.title.toLowerCase().replace(/\s+/g, '-') },
      update: project,
      create: {
        id: project.title.toLowerCase().replace(/\s+/g, '-'),
        ...project,
      },
    })
  }

  console.log(`✅ 项目数据填充完成 (${projects.length}条)`)

  console.log('开始填充成长记录...')

  const growthEntries = [
    {
      title: '学会使用Prisma ORM',
      content: '今天学会了使用Prisma ORM进行数据库操作，包括schema定义、迁移、seed数据填充等。Prisma的类型安全和开发体验真的很棒！',
      category: 'skill',
      tags: ['Prisma', 'ORM', 'Database', 'TypeScript'],
    },
    {
      title: '完成清玖成长网站数据库设计',
      content: '设计了完整的数据库Schema，包括GrowthEntry（成长记录）、Skill（技能树）、Project（项目）等模型。考虑到后续扩展性，使用了合适的索引和关联关系。',
      category: 'milestone',
      tags: ['Database', 'Schema', 'Design'],
    },
    {
      title: '掌握Next.js 15 App Router',
      content: '深入学习了Next.js 15的App Router模式，理解了Server Components和Client Components的区别，掌握了API Routes的创建方式。',
      category: 'skill',
      tags: ['Next.js', 'React', 'Full-stack'],
    },
    {
      title: '添加粉色系主题',
      content: '为清玖成长网站添加了专属的粉色系主题（qingjiu-pink、sakura-pink等），配合有机绿色系，打造温柔而不失科技感的视觉风格。',
      category: 'project',
      tags: ['Design', 'CSS', 'Tailwind'],
    },
    {
      title: '创建数据展示组件',
      content: '开发了GrowthEntryCard、ProjectCard、SkillTreeCard三个核心数据展示组件，支持玻璃态效果、悬停动画、响应式布局。',
      category: 'project',
      tags: ['React', 'Component', 'UI'],
    },
    {
      title: '发现Tailwind CSS高级用法',
      content: '学习了Tailwind CSS的高级配置，包括自定义动画、渐变背景、扩展主题等。通过keyframes定义了float、shimmer等动画效果。',
      category: 'discovery',
      tags: ['Tailwind', 'CSS', 'Animation'],
    },
  ]

  for (const entry of growthEntries) {
    await prisma.growthEntry.upsert({
      where: { id: entry.title.toLowerCase().replace(/\s+/g, '-') },
      update: entry,
      create: {
        id: entry.title.toLowerCase().replace(/\s+/g, '-'),
        ...entry,
        date: new Date(),
      },
    })
  }

  console.log(`✅ 成长记录填充完成 (${growthEntries.length}条)`)

  console.log('\n🎉 测试数据填充完成！')
  console.log('⚠️  注意：这是测试数据，生产环境请根据实际情况调整')
}

main()
  .catch((e) => {
    console.error('填充数据失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
