import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const priority = searchParams.get('priority')
    const tech = searchParams.get('tech')

    const where: any = {}
    if (status) {
      where.status = status
    }
    if (category) {
      where.category = category
    }
    if (priority) {
      where.priority = priority
    }
    if (tech) {
      where.techStack = {
        has: tech
      }
    }

    const projects = await prisma.project.findMany({
      where,
      orderBy: [
        { progress: 'desc' },
        { startedAt: 'desc' }
      ]
    })

    return NextResponse.json({
      projects,
      total: projects.length
    })
  } catch (error) {
    console.error('获取项目失败:', error)
    return NextResponse.json(
      { error: '获取项目失败' },
      { status: 500 }
    )
  }
}
