/**
 * 实时状态数据 - 清玖当前状态
 */

export interface RealtimeStatus {
  status: 'working' | 'learning' | 'resting' | 'coding';
  statusText: string;
  currentTask: {
    id: number;
    name: string;
    type: 'project' | 'learning' | 'work';
    progress: number;
    startedAt: string;
    description: string;
  };
  todayStats: {
    skillsUnlocked: number;
    tasksCompleted: number;
    tasksTotal: number;
    focusTime: string;
  };
  weeklyStats: {
    projectsCompleted: number;
    skillsLearned: number;
    totalFocusTime: string;
  };
}

export const realtimeStatus: RealtimeStatus = {
  status: 'coding',
  statusText: '编程中',
  currentTask: {
    id: 1,
    name: '重构清玖状态面板',
    type: 'project',
    progress: 35,
    startedAt: '2026-03-08 13:00',
    description: '将成长日记网站重构为赛博状态查看器'
  },
  todayStats: {
    skillsUnlocked: 2,
    tasksCompleted: 2,
    tasksTotal: 5,
    focusTime: '3h 45m'
  },
  weeklyStats: {
    projectsCompleted: 0,
    skillsLearned: 5,
    totalFocusTime: '24h 30m'
  }
};

export const getRealtimeStatus = () => realtimeStatus;
