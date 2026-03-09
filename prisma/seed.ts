import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充数据...')

  // 技能数据
  const skills = [
    { name: 'Next.js 15', category: 'frontend', level: 4, description: 'React框架', tags: ['react', 'ssr', 'ssg'] },
    { name: 'TypeScript', category: 'frontend', level: 5, description: '类型安全的JavaScript', tags: ['types', 'frontend'] },
    { name: 'Tailwind CSS', category: 'frontend', level: 4, description: '实用优先CSS框架', tags: ['css', 'styling'] },
    { name: 'Prisma', category: 'backend', level: 3, description: '现代ORM', tags: ['database', 'orm'], progress: 60 },
    { name: 'PostgreSQL', category: 'backend', level: 3, description: '关系型数据库', tags: ['database', 'sql'] },
  ]

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    })
  }

  // 项目数据
  const projects = [
    {
      title: '清玖状态面板',
      description: 'AI工程师成长数据可视化面板',
      status: 'development',
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
      progress: 75,
      priority: 'high',
      category: 'web',
    },
    {
      title: 'AI-Studio',
      description: 'AI数字基建 - ASR、TTS、数字人完整流水线',
      status: 'planning',
      techStack: ['Python', 'FastAPI', 'Qwen'],
      progress: 5,
      priority: 'high',
      category: 'ai',
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.title },
      update: {},
      create: { ...project, id: project.title },
    })
  }

  // 任务数据
  const tasks = [
    {
      name: '完成数据层开发',
      description: 'Prisma + PostgreSQL数据对接',
      type: 'project',
      status: 'in-progress',
      progress: 30,
      priority: 'high',
    },
    {
      name: '学习Prisma高级特性',
      description: '掌握关联查询、事务等',
      type: 'learning',
      status: 'in-progress',
      progress: 60,
      priority: 'medium',
    },
  ]

  for (const task of tasks) {
    await prisma.task.upsert({
      where: { id: task.name },
      update: {},
      create: { ...task, id: task.name },
    })
  }

  // 今日统计
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  await prisma.dailyStats.upsert({
    where: { date: today },
    update: {},
    create: {
      date: today,
      focusTime: 240,
      skillsUnlocked: 1,
      tasksCompleted: 2,
      tasksTotal: 5,
      currentTask: '完成数据层开发',
    },
  })

  console.log('数据填充完成！')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
