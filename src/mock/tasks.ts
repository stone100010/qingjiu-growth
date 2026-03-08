/**
 * 任务数据 - 当前和计划
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
      name: '重构清玖状态面板',
      type: 'project',
      status: 'in-progress',
      progress: 35,
      startedAt: '2026-03-08 13:00',
      description: '将成长日记网站重构为赛博状态查看器',
      priority: 'high'
    }
  ] as Task[],

  today: [
    {
      id: 1,
      name: '完成前端页面开发',
      type: 'project',
      status: 'completed',
      completedAt: '2026-03-08 12:00',
      description: '使用Mock数据完成所有页面'
    },
    {
      id: 2,
      name: '重构数据结构',
      type: 'work',
      status: 'in-progress',
      progress: 40,
      startedAt: '2026-03-08 13:00',
      description: '重新设计Mock数据，聚焦当下和将来'
    },
    {
      id: 3,
      name: '更新UI样式',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-08 15:00',
      description: '改为赛博科技风'
    },
    {
      id: 4,
      name: '测试页面效果',
      type: 'work',
      status: 'pending',
      plannedFor: '2026-03-08 16:00',
      description: '浏览器中查看实际效果'
    },
    {
      id: 5,
      name: '代码提交',
      type: 'work',
      status: 'pending',
      plannedFor: '2026-03-08 17:00',
      description: 'Git提交并推送'
    }
  ] as Task[],

  upcoming: [
    {
      id: 6,
      name: '配置数据库',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-09',
      description: '对接PostgreSQL数据库'
    },
    {
      id: 7,
      name: '部署到Vercel',
      type: 'project',
      status: 'pending',
      plannedFor: '2026-03-09',
      description: '配置自动化部署'
    },
    {
      id: 8,
      name: '学习Prisma高级特性',
      type: 'learning',
      status: 'pending',
      plannedFor: '2026-03-10',
      description: '深入学习Prisma ORM'
    }
  ] as Task[]
};

export const getTasks = () => tasksData;
export const getCurrentTasks = () => tasksData.current;
export const getTodayTasks = () => tasksData.today;
export const getUpcomingTasks = () => tasksData.upcoming;
