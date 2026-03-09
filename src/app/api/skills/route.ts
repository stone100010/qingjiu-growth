import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // 获取所有技能
    const allSkills = await prisma.skill.findMany({
      orderBy: { learnedAt: 'desc' },
    })

    // 分类
    const unlocked = allSkills.filter(s => s.level && s.level >= 1)
    const learning = allSkills.filter(s => s.progress && s.progress < 100)
    const planned = allSkills.filter(s => !s.level && !s.progress)

    return NextResponse.json({
      unlocked,
      learning,
      planned,
    })
  } catch (error) {
    console.error('Error fetching skills:', error)
    return NextResponse.json({ error: '获取技能失败' }, { status: 500 })
  }
}
