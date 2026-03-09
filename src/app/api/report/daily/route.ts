import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const stats = await prisma.dailyStats.findUnique({
      where: { date: today },
    })

    if (!stats) {
      return NextResponse.json({ error: '今日统计数据不存在' }, { status: 404 })
    }

    const currentTask = await prisma.task.findFirst({
      where: { status: 'in-progress' },
      orderBy: { createdAt: 'desc' },
    })

    const newSkills = await prisma.skill.findMany({
      where: {
        learnedAt: { gte: today },
      },
      take: 5,
    })

    const report = {
      date: today.toLocaleDateString('zh-CN'),
      summary: {
        focusTime: `${Math.floor(stats.focusTime / 60)}小时${stats.focusTime % 60}分钟`,
        skillsUnlocked: stats.skillsUnlocked,
        tasksCompleted: `${stats.tasksCompleted}/${stats.tasksTotal}`,
        currentTask: stats.currentTask || currentTask?.name || '无',
      },
      highlights: {
        newSkills: newSkills.map(s => s.name),
        achievements: [],
      },
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error('生成报告失败:', error)
    return NextResponse.json({ error: '生成报告失败' }, { status: 500 })
  }
}
