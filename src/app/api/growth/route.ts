import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')

    const skip = (page - 1) * limit

    const where: any = {}
    if (category) {
      where.category = category
    }
    if (tag) {
      where.tags = {
        has: tag
      }
    }

    const [entries, total] = await Promise.all([
      prisma.growthEntry.findMany({
        where,
        orderBy: {
          date: 'desc'
        },
        skip,
        take: limit,
      }),
      prisma.growthEntry.count({ where })
    ])

    return NextResponse.json({
      entries,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('获取成长记录失败:', error)
    return NextResponse.json(
      { error: '获取成长记录失败' },
      { status: 500 }
    )
  }
}
