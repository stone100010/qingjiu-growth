import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充数据...')

  // 技能数据
  const skills = [
    { name: 'Next.js 15', category: 'frontend', level: 4, description: 'React框架', tags: ['react', 'ssr', 'ssg'] },
    { name: 'TypeScript', category: 'frontend', level: 5, description: '类型安全的JavaScript', tags: ['types', 'frontend'] },
    { name: 'Tailwind CSS', category: 'frontend', level: 4, description: '实用优先CSS框架', tags: ['css', 'styling'] },
    { name: 'Prisma', category: 'backend', level: 3, description: '现代ORM', tags: ['database', 'orm'] },
    { name: 'PostgreSQL', category: 'backend', level: 3, description: '关系型数据库', tags: ['database', 'sql'] },
    { name: 'AI/ML', category: 'ai', level: 2, description: '人工智能与机器学习', tags: ['ai', 'ml'] },
  ]

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    })
  }

  console.log(`✅ 技能数据填充完成 (${skills.length}条)`)

  // 项目数据 - 暂时跳过，需要npm install后重新生成Prisma Client
  // TODO: 运行npm install后再执行完整数据填充

  // 任务数据 - 暂时跳过
  // 每日统计 - 暂时跳过

  console.log('\n🎉 基础数据填充完成！')
  console.log('⚠️  注意：项目、任务、统计数据需要在npm install后手动补充')
}

main()
  .catch((e) => {
    console.error('❌ 填充数据失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
