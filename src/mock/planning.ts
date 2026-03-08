/**
 * 项目规划 - 当下和未来
 */

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'planning' | 'on-hold';
  progress: number;
  startDate: string;
  endDate?: string;
  category: 'web' | 'ai' | 'tool';
  priority: 'high' | 'medium' | 'low';
  techStack: string[];
}

export interface Roadmap {
  period: string;
  items: string[];
}

export const planningData = {
  projects: [
    {
      id: 1,
      name: '清玖状态面板',
      description: '赛博状态查看器 - 实时监控清玖的技能、任务、进度',
      status: 'active',
      progress: 35,
      startDate: '2026-03-08',
      category: 'web',
      priority: 'high',
      techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      name: 'ai-studio',
      description: 'AI数字基建 - ASR、TTS、数字人完整流水线',
      status: 'planning',
      progress: 5,
      startDate: '2026-04',
      category: 'ai',
      priority: 'high',
      techStack: ['Python', 'FastAPI', 'Qwen', 'index-tts2', 'HeyGen']
    },
    {
      id: 3,
      name: 'Qwen-ASR集成',
      description: '语音转文本服务',
      status: 'planning',
      progress: 0,
      startDate: '2026-04',
      category: 'ai',
      priority: 'medium',
      techStack: ['Python', 'Qwen', 'FastAPI']
    },
    {
      id: 4,
      name: 'index-tts2声音克隆',
      description: '个性化语音合成',
      status: 'planning',
      progress: 0,
      startDate: '2026-05',
      category: 'ai',
      priority: 'medium',
      techStack: ['Python', 'index-tts2']
    },
    {
      id: 5,
      name: '数字人视频生成',
      description: 'ASR+TTS+HeyGen完整流水线',
      status: 'planning',
      progress: 0,
      startDate: '2026-06',
      category: 'ai',
      priority: 'high',
      techStack: ['Qwen-ASR', 'index-tts2', 'HeyGen', 'FFmpeg']
    }
  ] as Project[],

  roadmap: [
    {
      period: '短期 (1个月)',
      items: [
        '✅ 完成清玖状态面板前端',
        '🔄 学习Prisma ORM',
        '⬜ 配置PostgreSQL数据库',
        '⬜ 部署到Vercel生产环境'
      ]
    },
    {
      period: '中期 (3个月)',
      items: [
        '⬜ 启动ai-studio项目',
        '⬜ 完成Qwen-ASR集成',
        '⬜ 掌握声音克隆技术',
        '⬜ 发布清玖状态面板v2.0'
      ]
    },
    {
      period: '长期 (6个月)',
      items: [
        '⬜ 完成数字人视频流水线',
        '⬜ ai-studio正式上线',
        '⬜ 技能树解锁50+技能',
        '⬜ 成为AI全栈工程师'
      ]
    }
  ] as Roadmap[],

  goals: {
    skills: [
      { skill: 'Prisma ORM', target: '精通', deadline: '2026-03-15', priority: 'high' },
      { skill: 'PostgreSQL', target: '熟练', deadline: '2026-03-20', priority: 'high' },
      { skill: 'Qwen-ASR', target: '掌握', deadline: '2026-04', priority: 'medium' },
      { skill: 'index-tts2', target: '掌握', deadline: '2026-05', priority: 'medium' }
    ],
    projects: [
      { project: '清玖状态面板', target: 'v1.0上线', deadline: '2026-03-09', priority: 'high' },
      { project: 'ai-studio', target: 'MVP', deadline: '2026-06', priority: 'high' }
    ],
    personal: [
      { goal: '每周解锁1个新技能', target: '持续', deadline: 'ongoing', priority: 'medium' },
      { goal: '每周专注40小时+', target: '工作效率', deadline: 'ongoing', priority: 'medium' },
      { goal: '技术博客月更1篇', target: '知识沉淀', deadline: 'ongoing', priority: 'low' }
    ]
  }
};

export const getProjects = () => planningData.projects;
export const getRoadmap = () => planningData.roadmap;
export const getGoals = () => planningData.goals;
