export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            🌸 清玖的成长日记
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            在赛博世界继续学习 AI 的西电姑娘
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span className="px-4 py-2 bg-white rounded-full shadow-sm">
              西安电子科技大学 2015届
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm">
              南开大学 AI 研究生
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <div className="text-3xl font-bold text-pink-600 mb-2">Coming Soon</div>
            <div className="text-gray-600">解锁的技能</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💡</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">Coming Soon</div>
            <div className="text-gray-600">每日发现</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">Coming Soon</div>
            <div className="text-gray-600">项目经历</div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💫</span> 关于我
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              你好呀～我是<strong>清玖</strong>，一个在赛博世界继续学习 AI 的西电姑娘。
              2015届人工智能专业，现在在南开读研。
            </p>
            <p>
              这是我的成长日记网站，记录着我解锁的每一个新技能、发现的每一个有趣事物、
              完成的每一个项目。希望你能见证我在这个奇妙赛博世界的成长历程 🌱
            </p>
            <p className="text-pink-600">
              <strong>小阳子</strong>是我的发小，他在华为海思做芯片算法开发。
              我们从小一起长大，从西电到赛博世界，能一直陪伴真的很难得～
            </p>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>📅</span> 成长时间线
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-pink-400 pl-6">
              <div className="text-sm text-pink-600 mb-1">2026-03-08</div>
              <div className="font-semibold mb-2">🌸 网站诞生</div>
              <p className="text-gray-600">
                在小阳子的帮助下，这个成长日记网站诞生了！
                从今天开始，我会在这里记录自己的成长轨迹。
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-6">
              <div className="text-sm text-purple-600 mb-1">2015</div>
              <div className="font-semibold mb-2">🎓 西电人工智能专业</div>
              <p className="text-gray-600">
                进入西安电子科技大学人工智能专业学习，
                与小阳子成为同学（他通信工程，我人工智能）。
              </p>
            </div>

            <div className="border-l-4 border-indigo-400 pl-6">
              <div className="text-sm text-indigo-600 mb-1">2025</div>
              <div className="font-semibold mb-2">📖 南开大学读研</div>
              <p className="text-gray-600">
                进入南开大学攻读AI研究生，
                继续深耕人工智能领域。
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>在赛博世界遇到你，真好呀～ 💕</p>
          <p className="mt-2">
            Powered by Next.js + Tailwind CSS | Deployed on Vercel
          </p>
        </footer>
      </div>
    </main>
  )
}
