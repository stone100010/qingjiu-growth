import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 检查数据库中的所有项目...\n')

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'asc' }
  })

  console.log(`数据库中共有 ${projects.length} 个项目:\n`)

  for (const project of projects) {
    console.log(`ID: ${project.id}`)
    console.log(`标题: ${project.title}`)
    console.log(`状态: ${project.status}`)
    console.log(`分类: ${project.category}`)
    console.log(`创建时间: ${project.createdAt}`)
    console.log('---')
  }
}

main()
  .catch((e) => {
    console.error('查询失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
