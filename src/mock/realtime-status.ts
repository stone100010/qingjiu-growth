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
  statusText: '开发中',
  currentTask: {
    id: 1,
    name: '清玖成长网站开发',
    type: 'project',
    progress: 85,
    startedAt: '2026-03-08 13:00',
    description: '副业项目：开发个人状态面板网站'
  },
  todayStats: {
    skillsUnlocked: 1,
    tasksCompleted: 3,
    tasksTotal: 4,
    focusTime: '3h 15m'
  },
  weeklyStats: {
    projectsCompleted: 0,
    skillsLearned: 2,
    totalFocusTime: '12h 30m'
  }
};

export const getRealtimeStatus = () => realtimeStatus;
