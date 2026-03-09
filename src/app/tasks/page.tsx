import { getTasks, getCurrentTasks, getTodayTasks, getUpcomingTasks } from '@/mock';
import ScrollReveal from '@/components/ScrollReveal';

export default function TasksPage() {
  const { current, today, upcoming } = getTasks();

  return (
    <main className="min-h-screen mesh-gradient organic-wave" style={{background: 'radial-gradient(ellipse at top left, rgba(94, 129, 107, 0.2), transparent 50%), radial-gradient(ellipse at bottom right, rgba(56, 163, 165, 0.15), transparent 50%), linear-gradient(135deg, #0f231c, #1a4455)'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{fontFamily: 'var(--font-tech)', background: 'linear-gradient(to right, #5e816b, #38a3a5, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            📋 任务中心
          </h1>
          <p style={{color: '#94a89b', fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            当前任务、今日清单、未来规划
          </p>
        </div>

        <ScrollReveal>
          <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
            <span>⚡</span> 当前任务
          </h2>
          {current.map((task) => (
            <div
              key={task.id}
              className="p-4 md:p-8 rounded-3xl hover-card-organic glass-organic"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'var(--font-tech)'}}>{task.name}</h3>
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{background: 'rgba(94, 129, 107, 0.3)', color: '#5e816b'}}>
                      {task.type}
                    </span>
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{background: 'rgba(56, 163, 165, 0.3)', color: '#38a3a5'}}>
                      {task.priority} priority
                    </span>
                  </div>
                  <p className="text-base md:text-lg mb-3 md:mb-4" style={{color: '#94a89b'}}>{task.description}</p>
                  <div className="text-xs md:text-sm" style={{color: '#5e816b'}}>
                    开始时间: {task.startedAt}
                  </div>
                </div>
                <div className="ml-0 md:ml-6 text-right min-w-24">
                  <div className="text-4xl md:text-6xl font-bold mb-1 md:mb-2" style={{color: '#38a3a5'}}>{task.progress}%</div>
                  <div className="text-xs md:text-sm" style={{color: '#5e816b'}}>进度</div>
                </div>
              </div>

              <div className="w-full rounded-full h-3 md:h-4" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                <div
                  className="progress-bar-organic h-3 md:h-4 rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
              <span>📅</span> 今日清单
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {today.map((task) => (
                <div
                  key={task.id}
                  className="p-3 md:p-4 rounded-2xl hover-card-organic glass-organic"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base md:text-lg font-semibold mb-1" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>
                      {task.name}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      task.status === 'done'
                        ? 'bg-green-500/20 text-green-400'
                        : task.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`} style={task.status === 'done' ? {background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80'} : task.status === 'in-progress' ? {background: 'rgba(250, 204, 21, 0.2)', color: '#facc15'} : {background: 'rgba(120, 94, 73, 0.2)', color: '#785e49'}}>
                      {task.status === 'done' ? '已完成' : task.status === 'in-progress' ? '进行中' : '待办'}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm mb-2" style={{color: '#94a89b'}}>{task.description}</p>
                  <div className="text-xs" style={{color: '#5e816b'}}>预计: {task.estimatedTime}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2" style={{fontFamily: 'var(--font-organic)'}}>
              <span>🔜</span> 未来规划
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {upcoming.map((task) => (
                <div
                  key={task.id}
                  className="p-3 md:p-4 rounded-2xl hover-card-organic glass-organic"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base md:text-lg font-semibold mb-1" style={{fontFamily: 'var(--font-tech)', color: '#94a89b'}}>
                      {task.name}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded" style={{background: 'rgba(120, 94, 73, 0.2)', color: '#785e49'}}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm mb-2" style={{color: '#94a89b'}}>{task.description}</p>
                  <div className="text-xs" style={{color: '#5e816b'}}>计划: {task.plannedDate}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
