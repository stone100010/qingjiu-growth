import { getProjects } from '@/mock';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  const projects = getProjects();

  const statusLabels = {
    active: { label: '进行中', color: 'yellow' },
    planning: { label: '规划中', color: 'gray' },
    'on-hold': { label: '暂停', color: 'orange' },
  };

  const categoryLabels = {
    web: { label: 'Web 应用', icon: '🌐' },
    ai: { label: 'AI/ML', icon: '🤖' },
    tool: { label: '工具', icon: '🔧' },
  };

  const activeProjects = projects.filter(p => p.status === 'active');
  const planningProjects = projects.filter(p => p.status === 'planning');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            🎯 项目
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            正在进行和规划中的项目
          </p>
        </div>

        {/* Active Projects */}
        <ScrollReveal delay={100}>
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span>🔥</span> 进行中
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {activeProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30 backdrop-blur-sm hover-glow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
                        <span className={`px-2 md:px-3 py-1 bg-${statusLabels[project.status as keyof typeof statusLabels].color}-500/30 rounded text-xs md:text-sm`}>
                          {statusLabels[project.status as keyof typeof statusLabels].label}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-purple-300 mb-2">{project.description}</p>
                      <div className="text-xs text-purple-400">
                        {project.startDate}
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4 text-center min-w-16">
                      <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">{project.progress}%</div>
                      <div className="text-xs text-purple-400">进度</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-700/50 rounded-full h-2 md:h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 md:h-3 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-slate-900/50 text-purple-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Planning Projects */}
        <ScrollReveal delay={200}>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span>📋</span> 规划中
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {planningProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{categoryLabels[project.category as keyof typeof categoryLabels].icon}</span>
                    <h3 className="text-base md:text-lg font-bold">{project.name}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-purple-300 mb-2">{project.description}</p>
                  <div className="text-xs text-purple-400 mb-3">开始: {project.startDate}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-900/50 text-purple-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-purple-400 text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
