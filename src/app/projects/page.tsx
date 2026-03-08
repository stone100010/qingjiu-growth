import { getProjects, getFeaturedProjects } from '@/mock';

export default function ProjectsPage() {
  const projects = getProjects();
  const featuredProjects = getFeaturedProjects();

  const statusLabels = {
    planning: { label: '规划中', color: 'gray' },
    'in-progress': { label: '进行中', color: 'blue' },
    completed: { label: '已完成', color: 'green' },
    'on-hold': { label: '暂停', color: 'yellow' },
  };

  const categoryLabels = {
    web: { label: 'Web 应用', icon: '🌐' },
    ai: { label: 'AI/ML', icon: '🤖' },
    tool: { label: '工具', icon: '🔧' },
    learning: { label: '学习', icon: '📚' },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            🎯 项目作品集
          </h1>
          <p className="text-xl text-gray-600">
            我完成和正在进行的项目
          </p>
        </div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span>⭐</span> 精选项目
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  {project.featured && (
                    <span className="text-3xl">⭐</span>
                  )}
                </div>

                {/* Category & Status */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {categoryLabels[project.category].icon} {categoryLabels[project.category].label}
                  </span>
                  <span
                    className={`px-3 py-1 bg-${statusLabels[project.status].color}-100 text-${statusLabels[project.status].color}-700 rounded-full text-sm font-semibold`}
                  >
                    {statusLabels[project.status].label}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">技术栈：</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                {project.status === 'in-progress' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">进度</span>
                      <span className="text-pink-600 font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      查看演示 →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-pink-500 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors font-semibold"
                    >
                      GitHub
                    </a>
                  )}
                </div>

                {/* Dates */}
                <div className="mt-4 text-xs text-gray-500">
                  {project.startDate} - {project.endDate || '进行中'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span>📂</span> 所有项目
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>

                {/* Status & Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 bg-${statusLabels[project.status].color}-100 text-${statusLabels[project.status].color}-700 rounded text-xs`}
                  >
                    {statusLabels[project.status].label}
                  </span>
                  <span className="text-xs text-gray-500">
                    {categoryLabels[project.category].icon}
                  </span>
                </div>

                {/* Progress */}
                {project.status === 'in-progress' && (
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-right text-pink-600 mt-1">{project.progress}%</div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
                    >
                      演示
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 border border-pink-500 text-pink-600 rounded hover:bg-pink-50 transition-colors"
                    >
                      代码
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 text-gray-500">
          <p>共 {projects.length} 个项目</p>
          <p className="mt-2 text-sm">持续更新中... 💕</p>
        </div>
      </div>
    </main>
  );
}
