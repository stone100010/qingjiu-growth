/**
 * 技能树数据 - 每日点亮
 */

export interface SkillNode {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft';
  level?: number; // 1-5, 已解锁的技能
  progress?: number; // 0-100, 学习中的技能
  status: 'unlocked' | 'learning' | 'planned';
  unlockedAt?: string; // 解锁日期
  startedAt?: string; // 开始学习日期
  today?: boolean; // 今日新解锁
  plannedFor?: string; // 计划学习时间
  relatedProjects: number;
  lastPracticed?: string; // 最近练习时间
}

export const skillTreeData: {
  unlocked: SkillNode[];
  learning: SkillNode[];
  planned: SkillNode[];
} = {
  unlocked: [
    {
      id: 1,
      name: 'Next.js 15',
      category: 'frontend',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2026-03-08',
      today: true,
      relatedProjects: 1,
      lastPracticed: '2026-03-08'
    },
    {
      id: 2,
      name: 'React',
      category: 'frontend',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2020-03',
      today: false,
      relatedProjects: 8,
      lastPracticed: '2026-03-07'
    },
    {
      id: 3,
      name: 'TypeScript',
      category: 'frontend',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2020-08',
      today: false,
      relatedProjects: 10,
      lastPracticed: '2026-03-08'
    },
    {
      id: 4,
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2023-05',
      today: true,
      relatedProjects: 5,
      lastPracticed: '2026-03-08'
    },
    {
      id: 5,
      name: 'HTML/CSS',
      category: 'frontend',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2016-09',
      today: false,
      relatedProjects: 15,
      lastPracticed: '2026-03-05'
    },
    {
      id: 11,
      name: 'Node.js',
      category: 'backend',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2021-02',
      today: false,
      relatedProjects: 6,
      lastPracticed: '2026-03-06'
    },
    {
      id: 12,
      name: 'PostgreSQL',
      category: 'backend',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2022-07',
      today: false,
      relatedProjects: 4,
      lastPracticed: '2026-03-01'
    },
    {
      id: 21,
      name: 'AI Agent',
      category: 'ai',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2025-01',
      today: false,
      relatedProjects: 2,
      lastPracticed: '2026-03-07'
    },
    {
      id: 22,
      name: 'Prompt Engineering',
      category: 'ai',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2024-03',
      today: false,
      relatedProjects: 5,
      lastPracticed: '2026-03-08'
    },
    {
      id: 23,
      name: 'LLM 集成',
      category: 'ai',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2024-06',
      today: false,
      relatedProjects: 3,
      lastPracticed: '2026-03-05'
    },
    {
      id: 31,
      name: 'Git',
      category: 'tools',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2017-03',
      today: false,
      relatedProjects: 20,
      lastPracticed: '2026-03-08'
    },
    {
      id: 32,
      name: 'VS Code',
      category: 'tools',
      level: 5,
      status: 'unlocked',
      unlockedAt: '2019-01',
      today: false,
      relatedProjects: 0,
      lastPracticed: '2026-03-08'
    },
    {
      id: 34,
      name: 'Vercel',
      category: 'tools',
      level: 4,
      status: 'unlocked',
      unlockedAt: '2024-02',
      today: false,
      relatedProjects: 4,
      lastPracticed: '2026-03-08'
    }
  ],
  learning: [
    {
      id: 13,
      name: 'Prisma ORM',
      category: 'backend',
      progress: 60,
      status: 'learning',
      startedAt: '2026-03-05',
      relatedProjects: 1,
      lastPracticed: '2026-03-08'
    },
    {
      id: 33,
      name: 'Linux 命令行',
      category: 'tools',
      progress: 80,
      status: 'learning',
      startedAt: '2026-02-01',
      relatedProjects: 2,
      lastPracticed: '2026-03-07'
    }
  ],
  planned: [
    {
      id: 24,
      name: 'Qwen-ASR',
      category: 'ai',
      status: 'planned',
      plannedFor: '2026-04',
      relatedProjects: 0
    },
    {
      id: 25,
      name: 'index-tts2',
      category: 'ai',
      status: 'planned',
      plannedFor: '2026-05',
      relatedProjects: 0
    },
    {
      id: 26,
      name: 'HeyGen 数字人',
      category: 'ai',
      status: 'planned',
      plannedFor: '2026-06',
      relatedProjects: 0
    },
    {
      id: 41,
      name: 'Docker',
      category: 'tools',
      status: 'planned',
      plannedFor: '2026-04',
      relatedProjects: 0
    },
    {
      id: 42,
      name: 'Kubernetes',
      category: 'tools',
      status: 'planned',
      plannedFor: '2026-Q3',
      relatedProjects: 0
    }
  ]
};

export const getSkillTree = () => skillTreeData;
export const getTodaySkills = () => skillTreeData.unlocked.filter(s => s.today);
export const getSkillsByCategory = (category: SkillNode['category']) => {
  return {
    unlocked: skillTreeData.unlocked.filter(s => s.category === category),
    learning: skillTreeData.learning.filter(s => s.category === category),
    planned: skillTreeData.planned.filter(s => s.category === category)
  };
};
