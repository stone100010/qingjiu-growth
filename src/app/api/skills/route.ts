import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const minLevel = searchParams.get('minLevel')
    const tag = searchParams.get('tag')

    const where: any = {}
    if (category) {
      where.category = category
    }
    if (minLevel) {
      where.level = {
        gte: parseInt(minLevel)
      }
    }
    if (tag) {
      where.tags = {
        has: tag
      }
    }

    const skills = await prisma.skill.findMany({
      where,
      orderBy: [
        { level: 'desc' },
        { learnedAt: 'desc' }
      ]
    })

    // 按分类分组
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, typeof skills>)

    return NextResponse.json({
      skills: grouped,
      total: skills.length
    })
  } catch (error) {
    console.error('获取技能失败:', error)
    return NextResponse.json(
      { error: '获取技能失败' },
      { status: 500 }
    )
  }
}
