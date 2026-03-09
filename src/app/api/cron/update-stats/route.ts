import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // 获取今日任务统计
    const todayTasks = await prisma.task.findMany({
      where: {
        OR: [
          { startedAt: { gte: today } },
          { plannedFor: { lte: new Date(Date.now() + 24 * 60 * 60 * 1000) } },
        ],
      },
    })

    const completedTasks = todayTasks.filter(t => t.status === 'completed').length
    const inProgressTasks = todayTasks.filter(t => t.status === 'in-progress')

    // 计算专注时长（mock数据，实际应从时间记录计算）
    const focusTime = 240 // 分钟

    // 获取今日解锁技能
    const todaySkills = await prisma.skill.findMany({
      where: {
        learnedAt: { gte: today },
      },
    })

    // 更新或创建今日统计
    await prisma.dailyStats.upsert({
      where: { date: today },
      update: {
        focusTime,
        skillsUnlocked: todaySkills.length,
        tasksCompleted: completedTasks,
        tasksTotal: todayTasks.length,
        currentTask: inProgressTasks[0]?.name || null,
      },
      create: {
        date: today,
        focusTime,
        skillsUnlocked: todaySkills.length,
        tasksCompleted: completedTasks,
        tasksTotal: todayTasks.length,
        currentTask: inProgressTasks[0]?.name || null,
      },
    })

    return NextResponse.json({
      success: true,
      message: '每日统计已更新',
      stats: {
        focusTime,
        skillsUnlocked: todaySkills.length,
        tasksCompleted: completedTasks,
        tasksTotal: todayTasks.length,
      },
    })
  } catch (error) {
    console.error('更新统计失败:', error)
    return NextResponse.json({ error: '更新统计失败' }, { status: 500 })
  }
}
