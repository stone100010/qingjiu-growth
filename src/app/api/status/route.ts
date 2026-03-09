import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // 获取今日统计
    const dailyStats = await prisma.dailyStats.findUnique({
      where: { date: today },
    })

    // 获取当前任务
    const currentTask = await prisma.task.findFirst({
      where: { status: 'in-progress' },
      orderBy: { createdAt: 'desc' },
    })

    // 获取今日任务
    const todayTasks = await prisma.task.findMany({
      where: {
        OR: [
          { startedAt: { gte: today } },
          { plannedFor: { lte: new Date(Date.now() + 24 * 60 * 60 * 1000) } },
        ],
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    // 计算今日统计
    const completedTasks = todayTasks.filter(t => t.status === 'completed').length

    return NextResponse.json({
      statusText: '在线',
      currentTask: currentTask ? {
        name: currentTask.name,
        description: currentTask.description,
        type: currentTask.type,
        progress: currentTask.progress,
        startedAt: currentTask.startedAt?.toLocaleDateString('zh-CN'),
      } : null,
      todayStats: {
        focusTime: dailyStats?.focusTime ? `${Math.floor(dailyStats.focusTime / 60)}h ${dailyStats.focusTime % 60}m` : '0h 0m',
        skillsUnlocked: dailyStats?.skillsUnlocked || 0,
        tasksTotal: todayTasks.length,
      },
      weeklyStats: {
        totalFocusTime: '12h 30m', // 暂时mock
      },
      todayTasks: todayTasks.map(task => ({
        id: task.id,
        name: task.name,
        description: task.description,
        type: task.type,
        status: task.status,
        progress: task.progress,
      })),
    })
  } catch (error) {
    console.error('Error fetching status:', error)
    return NextResponse.json({ error: '获取状态失败' }, { status: 500 })
  }
}
