import { getRealtimeStatus, getTodaySkills, getTodayTasks, getSkillTree } from '@/mock';

export default function HomePage() {
  const status = getRealtimeStatus();
  const todaySkills = getTodaySkills();
  const todayTasks = getTodayTasks();
  const skillTree = getSkillTree();

  const completedTasks = todayTasks.filter(t => t.status === 'completed').length;
  const pendingTasks = todayTasks.filter(t => t.status === 'pending' || t.status === 'in-progress').length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 顶部状态栏 */}
        <div className="mb-6 md:mb-8 p-3 md:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-base md:text-lg font-semibold">清玖状态: {status.statusText}</span>
            </div>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <span className="text-purple-300">今日: {status.todayStats.focusTime}</span>
              <span className="text-purple-300">本周: {status.weeklyStats.totalFocusTime}</span>
            </div>
          </div>
        </div>

        {/* Hero区域 */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            🌸 清玖状态面板
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            赛博世界实时状态监控面板
          </p>
        </div>

        {/* 实时任务卡片 */}
        <div className="mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-xl md:rounded-2xl border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <span>⚡</span> 当前任务
            </h2>
            <span className="text-xs px-2 md:px-3 py-1 bg-purple-500/30 rounded-full">
              {status.currentTask.type}
            </span>
          </div>
          <div className="mb-3 md:mb-4">
            <div className="text-2xl md:text-3xl font-bold mb-2">{status.currentTask.name}</div>
            <p className="text-sm md:text-base text-purple-300">{status.currentTask.description}</p>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-xs md:text-sm mb-1">
              <span>进度</span>
              <span className="text-pink-400 font-semibold">{status.currentTask.progress}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 md:h-3">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 md:h-3 rounded-full transition-all duration-500"
                style={{ width: `${status.currentTask.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="text-xs text-purple-400 mt-2">
            开始时间: {status.currentTask.startedAt}
          </div>
        </div>

        {/* 今日统计 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-pink-500/30 hover:border-pink-500/60 transition-colors">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🔓</div>
            <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1 md:mb-2">{status.todayStats.skillsUnlocked}</div>
            <div className="text-xs md:text-sm text-purple-300">今日解锁技能</div>
          </div>

          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-colors">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">✅</div>
            <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1 md:mb-2">{completedTasks}/{status.todayStats.tasksTotal}</div>
            <div className="text-xs md:text-sm text-purple-300">已完成任务</div>
          </div>

          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-indigo-500/30 hover:border-indigo-500/60 transition-colors">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">⏰</div>
            <div className="text-2xl md:text-3xl font-bold text-indigo-500 mb-1 md:mb-2">{status.todayStats.focusTime}</div>
            <div className="text-xs md:text-sm text-purple-300">今日专注时长</div>
          </div>
        </div>

        {/* 今日亮点 */}
        <div className="mb-8 md:mb-12 p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/30">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <span>✨</span> 今日亮点
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* 今日新技能 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-pink-400 mb-3">🆕 新解锁技能</h3>
              <div className="space-y-2">
                {todaySkills.map((skill) => (
                  <div key={skill.id} className="p-3 bg-slate-900/50 rounded-lg border border-pink-500/20">
                    <div className="font-semibold text-sm md:text-base">{skill.name}</div>
                    <div className="text-xs text-purple-400 mt-1">
                      {skill.category} • Level {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 正在学习 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-yellow-400 mb-3">📚 正在学习</h3>
              <div className="space-y-2">
                {skillTree.learning.map((skill) => (
                  <div key={skill.id} className="p-3 bg-slate-900/50 rounded-lg border border-yellow-500/20">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm md:text-base">{skill.name}</span>
                      <span className="text-xs text-yellow-400">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 今日任务时间轴 */}
        <div className="mb-8 md:mb-12 p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/30">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <span>📋</span> 今日任务
          </h2>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <div
                key={task.id}
                className={`p-3 md:p-4 rounded-lg border transition-all ${
                  task.status === 'completed'
                    ? 'bg-green-900/20 border-green-500/30'
                    : task.status === 'in-progress'
                    ? 'bg-yellow-900/20 border-yellow-500/30'
                    : 'bg-slate-900/50 border-purple-500/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-semibold text-sm md:text-base">{task.name}</span>
                      <span className="text-xs px-2 py-0.5 bg-purple-500/30 rounded">
                        {task.type}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-purple-300">{task.description}</p>
                    {task.progress && (
                      <div className="mt-2">
                        <div className="w-full bg-slate-700 rounded-full h-1.5 md:h-2">
                          <div
                            className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 md:h-2 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    {task.status === 'completed' ? (
                      <span className="text-green-500 text-xl md:text-2xl">✓</span>
                    ) : task.status === 'in-progress' ? (
                      <span className="text-yellow-500 text-xl md:text-2xl">⟳</span>
                    ) : (
                      <span className="text-purple-500 text-xl md:text-2xl">⬜</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-purple-400 text-sm py-8">
          <p className="mb-2">在赛博世界持续进化 🚀</p>
          <p>
            Powered by{' '}
            <span className="text-pink-500">Next.js</span>
            {' + '}
            <span className="text-purple-500">TypeScript</span>
            {' | '}
            <span className="text-indigo-500">Deployed on Vercel</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
