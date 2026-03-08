import { getTasks, getCurrentTasks, getTodayTasks, getUpcomingTasks } from '@/mock';
import ScrollReveal from '@/components/ScrollReveal';

export default function TasksPage() {
  const { current, today, upcoming } = getTasks();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            📋 任务中心
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            当前任务、今日清单、未来规划
          </p>
        </div>

        {/* 当前任务（大卡片） */}
        <ScrollReveal>
          <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <span>⚡</span> 当前任务
          </h2>
          {current.map((task) => (
            <div
              key={task.id}
              className="p-4 md:p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-xl md:rounded-2xl border-2 border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-bold">{task.name}</h3>
                    <span className="px-2 md:px-3 py-1 bg-purple-500/30 rounded-full text-xs md:text-sm">
                      {task.type}
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-pink-500/30 rounded-full text-xs md:text-sm">
                      {task.priority} priority
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-purple-300 mb-3 md:mb-4">{task.description}</p>
                  <div className="text-xs md:text-sm text-purple-400">
                    开始时间: {task.startedAt}
                  </div>
                </div>
                <div className="ml-0 md:ml-6 text-right min-w-24">
                  <div className="text-4xl md:text-6xl font-bold text-pink-500 mb-1 md:mb-2">{task.progress}%</div>
                  <div className="text-xs md:text-sm text-purple-400">进度</div>
                </div>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 md:h-4">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 md:h-4 rounded-full transition-all duration-500"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* 今日任务时间轴 */}
        <ScrollReveal delay={100}>
          <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <span>📅</span> 今日任务
          </h2>
          <div className="space-y-3 md:space-y-4">
            {today.map((task, index) => (
              <div
                key={task.id}
                className={`p-4 md:p-6 rounded-xl border-2 transition-all hover:scale-102 ${
                  task.status === 'completed'
                    ? 'bg-green-900/20 border-green-500/30'
                    : task.status === 'in-progress'
                    ? 'bg-yellow-900/20 border-yellow-500/30'
                    : 'bg-slate-800/50 border-purple-500/20'
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* 时间轴点 */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 ${
                        task.status === 'completed'
                          ? 'bg-green-500 border-green-400'
                          : task.status === 'in-progress'
                          ? 'bg-yellow-500 border-yellow-400 animate-pulse'
                          : 'bg-purple-500/30 border-purple-400'
                      }`}
                    ></div>
                    {index < today.length - 1 && (
                      <div className="w-0.5 h-full bg-purple-500/20 my-2"></div>
                    )}
                  </div>

                  {/* 任务内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-base md:text-xl font-bold">{task.name}</h3>
                      <span className="text-xs px-2 py-1 bg-purple-500/30 rounded">
                        {task.type}
                      </span>
                      {task.priority && (
                        <span className="text-xs px-2 py-1 bg-pink-500/30 rounded">
                          {task.priority}
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-purple-300 mb-2 md:mb-3">{task.description}</p>

                    {task.status === 'in-progress' && task.progress && (
                      <div className="mb-2">
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span>进度</span>
                          <span className="text-yellow-400">{task.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-1.5 md:h-2">
                          <div
                            className="bg-yellow-500 h-1.5 md:h-2 rounded-full"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 md:gap-4 text-xs text-purple-400 flex-wrap">
                      {task.completedAt && (
                        <span>✅ 完成于 {task.completedAt}</span>
                      )}
                      {task.startedAt && !task.completedAt && (
                        <span>🔄 开始于 {task.startedAt}</span>
                      )}
                      {task.plannedFor && task.status === 'pending' && (
                        <span>⬜ 计划于 {task.plannedFor}</span>
                      )}
                    </div>
                  </div>

                  {/* 状态图标 */}
                  <div className="ml-2 md:ml-4 flex-shrink-0">
                    {task.status === 'completed' ? (
                      <span className="text-green-500 text-2xl md:text-3xl">✓</span>
                    ) : task.status === 'in-progress' ? (
                      <span className="text-yellow-500 text-2xl md:text-3xl animate-spin">⟳</span>
                    ) : (
                      <span className="text-purple-500 text-2xl md:text-3xl">⬜</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* 即将到来 */}
        <ScrollReveal delay={200}>
          <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <span>🔜</span> 即将到来
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {upcoming.map((task) => (
              <div
                key={task.id}
                className="p-4 md:p-6 bg-slate-800/50 rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <h3 className="text-base md:text-lg font-bold">{task.name}</h3>
                  <span className="text-xs px-2 py-1 bg-purple-500/30 rounded">
                    {task.type}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-purple-300 mb-2 md:mb-3">{task.description}</p>
                <div className="text-xs text-purple-400">
                  📅 {task.plannedFor}
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="text-center text-purple-400 py-8">
          <p>持续更新任务进度... 🚀</p>
        </div>
      </div>
    </main>
  );
}
