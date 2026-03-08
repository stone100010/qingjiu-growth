import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充种子数据...')

  // 创建初始成长记录
  const entry1 = await prisma.growthEntry.create({
    data: {
      title: '🌸 网站诞生',
      content: '在小阳子的帮助下，这个成长日记网站诞生了！从今天开始，我会在这里记录自己的成长轨迹。',
      category: 'milestone',
      tags: ['网站', 'Next.js', '成长'],
    },
  })

  // 创建初始技能
  const skill1 = await prisma.skill.create({
    data: {
      name: 'Next.js',
      category: 'frontend',
      level: 3,
      description: '熟悉 Next.js 15 App Router，能够快速开发全栈应用',
      tags: ['React', 'TypeScript', 'SSR'],
    },
  })

  const skill2 = await prisma.skill.create({
    data: {
      name: 'TypeScript',
      category: 'frontend',
      level: 4,
      description: '熟练使用 TypeScript，类型系统理解深入',
      tags: ['类型系统', '类型安全'],
    },
  })

  const skill3 = await prisma.skill.create({
    data: {
      name: 'Python',
      category: 'backend',
      level: 4,
      description: '熟练使用 Python 进行 AI 开发和数据处理',
      tags: ['AI', '数据处理', '脚本'],
    },
  })

  // 创建初始项目
  const project1 = await prisma.project.create({
    data: {
      title: '清玖的成长日记',
      description: '记录我成长轨迹的网站，使用 Next.js + Prisma + PostgreSQL 构建',
      status: 'development',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/your-username/qingjiu-growth',
    },
  })

  console.log('种子数据填充完成！')
  console.log({ entry1, skill1, skill2, skill3, project1 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
