import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🧹 清理所有项目数据...')

  // 删除所有项目
  const deleteCount = await prisma.project.deleteMany({})
  console.log(`删除了 ${deleteCount.count} 条项目记录`)

  // 重新插入干净的4个项目
  const projects = [
    {
      id: 'qingjiu-growth',
      title: '清玖成长网站',
      description: '记录我的AI工程师成长轨迹，展示技能树、项目作品集和成长日记。使用Next.js 15 + Prisma + PostgreSQL构建，支持实时数据可视化。',
      status: 'development',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      progress: 85,
      priority: 'high',
      category: 'web',
      githubUrl: 'https://github.com/stone100010/qingjiu-growth',
      demoUrl: 'https://qingjiu-growth.vercel.app/',
    },
    {
      id: 'qwen-asr',
      title: 'Qwen-asr 语音转文本',
      description: '基于Qwen ASR模型的语音转文本服务，支持多语言识别，用于会议纪要、灵感速记等场景。',
      status: 'planning',
      techStack: ['Python', 'FastAPI', 'Qwen', 'Docker'],
      progress: 10,
      priority: 'high',
      category: 'ai',
    },
    {
      id: 'index-tts2',
      title: 'index-tts2 声音克隆',
      description: '基于index-tts2的声音克隆系统，实现个性化语音合成，用于播客生成、网课备稿等场景。',
      status: 'planning',
      techStack: ['Python', 'index-tts2', 'FastAPI'],
      progress: 5,
      priority: 'medium',
      category: 'ai',
    },
    {
      id: 'digital-human',
      title: '数字人视频生成全流程',
      description: '整合ASR、TTS、HeyGen的数字人视频生成流水线，支持文本到视频的完整流程。',
      status: 'planning',
      techStack: ['Qwen-asr', 'index-tts2', 'HeyGen', 'Python'],
      progress: 0,
      priority: 'high',
      category: 'ai',
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project
    })
    console.log(`✓ 创建: ${project.title}`)
  }

  const finalCount = await prisma.project.count()
  console.log(`\n✅ 清理完成！当前项目数量: ${finalCount}`)
}

main()
  .catch((e) => {
    console.error('清理失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
