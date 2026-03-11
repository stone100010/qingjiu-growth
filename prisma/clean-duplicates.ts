import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 清理重复数据...')

  // 获取所有项目
  const projects = await prisma.project.findMany()
  console.log(`当前项目数量: ${projects.length}`)

  // 按名称分组，找出重复的
  const projectMap = new Map<string, any[]>()

  for (const project of projects) {
    const key = project.title
    if (!projectMap.has(key)) {
      projectMap.set(key, [])
    }
    projectMap.get(key)!.push(project)
  }

  // 找出重复的项目
  const duplicates: any[] = []
  for (const [title, items] of projectMap.entries()) {
    if (items.length > 1) {
      console.log(`发现重复: ${title} (${items.length}条)`)
      // 保留第一个，删除其余的
      const toKeep = items[0]
      const toDelete = items.slice(1)
      duplicates.push(...toDelete)
    }
  }

  // 删除重复项
  if (duplicates.length > 0) {
    console.log(`准备删除 ${duplicates.length} 条重复记录...`)

    for (const project of duplicates) {
      await prisma.project.delete({
        where: { id: project.id }
      })
      console.log(`✓ 删除: ${project.title}`)
    }
  }

  // 检查结果
  const finalCount = await prisma.project.count()
  console.log(`\n清理后项目数量: ${finalCount}`)

  // 列出剩余项目
  const remaining = await prisma.project.findMany()
  console.log('\n剩余项目:')
  for (const project of remaining) {
    console.log(`  - ${project.title}`)
  }

  console.log('\n✅ 清理完成！')
}

main()
  .catch((e) => {
    console.error('清理失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
