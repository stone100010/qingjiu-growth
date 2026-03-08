import { getSkillTree, getSkillsByCategory } from '@/mock';

export default function SkillsPage() {
  const skillTree = getSkillTree();
  const categories = [
    { key: 'frontend' as const, label: '前端开发', icon: '🎨' },
    { key: 'backend' as const, label: '后端开发', icon: '⚙️' },
    { key: 'ai' as const, label: 'AI/ML', icon: '🤖' },
    { key: 'tools' as const, label: '开发工具', icon: '🔧' },
    { key: 'soft' as const, label: '软技能', icon: '💡' },
  ];

  const totalUnlocked = skillTree.unlocked.length;
  const totalLearning = skillTree.learning.length;
  const totalPlanned = skillTree.planned.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            ⚡ 技能树
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            每日点亮的技能成长路径
          </p>
        </div>

        {/* 统计概览 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-pink-500/30">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">✅</div>
            <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1 md:mb-2">{totalUnlocked}</div>
            <div className="text-xs md:text-sm text-purple-300">已解锁技能</div>
          </div>

          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-yellow-500/30">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📚</div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2">{totalLearning}</div>
            <div className="text-xs md:text-sm text-purple-300">学习中</div>
          </div>

          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-purple-500/30">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📋</div>
            <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1 md:mb-2">{totalPlanned}</div>
            <div className="text-xs md:text-sm text-purple-300">计划中</div>
          </div>
        </div>

        {/* 今日新解锁 */}
        {skillTree.unlocked.filter(s => s.today).length > 0 && (
          <div className="mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl md:rounded-2xl border border-pink-500/30 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span>🆕</span> 今日新解锁
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {skillTree.unlocked.filter(s => s.today).map((skill) => (
                <div
                  key={skill.id}
                  className="p-3 md:p-4 bg-slate-900/50 rounded-xl border-2 border-pink-500 hover:border-pink-400 transition-all hover:scale-105"
                >
                  <div className="font-bold text-base md:text-lg mb-2">{skill.name}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: skill.level || 0 }).map((_, i) => (
                        <span key={i} className="text-pink-500 text-sm md:text-base">★</span>
                      ))}
                    </div>
                    <span className="text-xs text-purple-400">Lv.{skill.level}</span>
                  </div>
                  <div className="text-xs text-purple-400">
                    {skill.relatedProjects} 个项目
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 技能分类网格 */}
        {categories.map((category, categoryIndex) => {
          const categorySkills = getSkillsByCategory(category.key);

          return (
            <div key={category.key} className="mb-12">
              {/* 分类标题 */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl">{category.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold">{category.label}</h2>
                <span className="text-xs md:text-sm text-purple-400">
                  ({categorySkills.unlocked.length + categorySkills.learning.length} 项)
                </span>
              </div>

              {/* 技能网格 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {/* 已解锁 */}
                {categorySkills.unlocked.map((skill) => (
                  <div
                    key={skill.id}
                    className={`p-4 md:p-5 rounded-xl border-2 transition-all hover:scale-105 ${
                      skill.today
                        ? 'bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500 shadow-lg shadow-pink-500/20'
                        : 'bg-slate-800/50 border-green-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold">{skill.name}</h3>
                      {skill.today && (
                        <span className="text-xs px-2 py-1 bg-pink-500 text-white rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-purple-300 mb-2 md:mb-3">
                      Level {skill.level} • {skill.relatedProjects} 项目
                    </p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={i < (skill.level || 0) ? 'text-pink-500' : 'text-slate-600'}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    {skill.lastPracticed && (
                      <div className="text-xs text-purple-400 mt-2">
                        最近: {skill.lastPracticed}
                      </div>
                    )}
                  </div>
                ))}

                {/* 学习中 */}
                {categorySkills.learning.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 md:p-5 rounded-xl border-2 border-yellow-500/30 bg-yellow-900/10 hover:border-yellow-500/50 transition-all hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold">{skill.name}</h3>
                      <span className="text-xs px-2 py-1 bg-yellow-500 text-black rounded-full">
                        学习中
                      </span>
                    </div>
                    <div className="mb-2 md:mb-3">
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span>进度</span>
                        <span className="text-yellow-400 font-semibold">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5 md:h-2">
                        <div
                          className="bg-yellow-500 h-1.5 md:h-2 rounded-full transition-all"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    {skill.lastPracticed && (
                      <div className="text-xs text-purple-400">
                        最近: {skill.lastPracticed}
                      </div>
                    )}
                  </div>
                ))}

                {/* 计划中 */}
                {categorySkills.planned.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 md:p-5 rounded-xl border-2 border-purple-500/20 bg-slate-900/30 opacity-60"
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-purple-400">{skill.name}</h3>
                    <div className="text-xs md:text-sm text-purple-400">
                      计划: {skill.plannedFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* 图例 */}
        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-slate-800/30 rounded-xl md:rounded-2xl border border-purple-500/20">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">图例</h3>
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-green-500/30 bg-slate-800/50 rounded"></div>
              <span className="text-purple-300">已解锁</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-yellow-500/30 bg-yellow-900/10 rounded"></div>
              <span className="text-purple-300">学习中</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-pink-500 bg-pink-500/20 rounded"></div>
              <span className="text-purple-300">今日新解锁</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-purple-500/20 bg-slate-900/30 rounded opacity-60"></div>
              <span className="text-purple-300">计划中</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 md:mt-16 text-purple-400">
          <p className="text-sm md:text-base">持续解锁新技能... 🚀</p>
        </div>
      </div>
    </main>
  );
}
