import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 检查数据库...\n')

  // 检查表结构
  const projectCount = await prisma.project.count()
  console.log(`项目表记录数: ${projectCount}`)

  // 列出所有项目
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      status: true,
      category: true,
    },
    orderBy: { id: 'asc' }
  })

  console.log('\n项目列表:')
  for (const p of projects) {
    console.log(`  [${p.id}] ${p.title} - ${p.status} - ${p.category}`)
  }

  // 检查是否有重复的title
  const titles = projects.map(p => p.title)
  const uniqueTitles = new Set(titles)
  if (titles.length !== uniqueTitles.size) {
    console.log('\n⚠️ 发现重复标题！')
    const duplicates = titles.filter((item, index) => titles.indexOf(item) !== index)
    for (const dup of new Set(duplicates)) {
      console.log(`  重复: ${dup}`)
    }
  } else {
    console.log('\n✅ 没有重复标题')
  }
}

main()
  .catch((e) => {
    console.error('检查失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
