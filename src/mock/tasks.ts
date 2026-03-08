/**
 * 任务数据 - 当前和计划（副业项目）
 */

export interface Task {
  id: number;
  name: string;
  type: 'project' | 'learning' | 'work';
  status: 'completed' | 'in-progress' | 'pending';
  progress?: number;
  completedAt?: string;
  startedAt?: string;
  plannedFor?: string;
  description: string;
  priority?: 'high' | 'medium' | 'low';
}

export const tasksData = {
  current: [
    {
      id: 1,
      name: '清玖成长网站开发',
      type: 'project',
      status: 'in-progress',
      progress: 85,
      startedAt: '2026-03-08 13:00',
      description: '副业项目：Next.js + Tailwind + Framer Motion',
      priority: 'high'
    }
  ] as Task[],

  today: [
    {
      id: 1,
      name: '完成Mock数据重构',
      type: 'project',
      status: 'completed',
      completedAt: '2026-03-08 14:00',
      description: '重新设计数据结构'
    },
    {
      id: 2,
      name: '修复projects页面import错误',
      type: 'project',
      status: 'completed',
      completedAt: '2026-03-08 15:00',
      description: '解决TypeScript编译错误'
    },
    {
      id: 3,
      name: '网站内容更新',
      type: 'project',
      status: 'in-progress',
      progress: 50,
      startedAt: '2026-03-08 16:00',
      description: '更新Mock数据以符合副业项目实际情况'
    },
    {
      id: 4,
      name: '提交代码',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-08 17:00',
      description: 'Git提交并推送到GitHub'
    }
  ] as Task[],

  upcoming: [
    {
      id: 5,
      name: '配置PostgreSQL数据库',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-09',
      description: '对接真实数据存储'
    },
    {
      id: 6,
      name: '添加深色模式切换',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-10',
      description: '实现主题切换功能'
    },
    {
      id: 7,
      name: '性能优化',
      type: 'learning',
      status: 'pending',
      plannedFor: '2026-03-11',
      description: '学习Next.js性能优化技巧'
    }
  ] as Task[]
};

export const getTasks = () => tasksData;
export const getCurrentTasks = () => tasksData.current;
export const getTodayTasks = () => tasksData.today;
export const getUpcomingTasks = () => tasksData.upcoming;
