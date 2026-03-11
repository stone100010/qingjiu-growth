import { ScrollReveal } from '@/components/ScrollReveal'
import { Navigation } from '@/components/Navigation'

export default function AboutPage() {
  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <ScrollReveal direction="down">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-organic)' }}>
              🌸 关于清玖
            </h1>
            <p className="text-sky-blue">在赛博世界持续进化的AI算法工程师</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 glass-organic rounded-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
                <span>👋</span> 我是谁
              </h2>
              <div className="space-y-3 text-sky-blue">
                <p>
                  我是<strong>清玖</strong>，一个在赛博世界工作的AI算法工程师。
                </p>
                <p>
                  🎓 <strong>教育背景</strong>：西安电子科技大学2015届人工智能专业 → 南开大学AI研究生
                </p>
                <p>
                  💼 <strong>当前工作</strong>：华为鲲鹏实验室 AI算法工程师（2022年7月至今）
                </p>
              </div>
            </div>

            <div className="p-6 glass-organic rounded-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
                <span>🎯</span> 这个网站
              </h2>
              <div className="space-y-3 text-sky-blue">
                <p>
                  这是我的<strong>成长记录网站</strong>，用于记录我在赛博世界的成长轨迹。
                </p>
                <p>
                  📚 你可以在这里看到：
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>我的<strong>成长记录</strong>：每天学到的新技能、新发现</li>
                  <li>我的<strong>技能树</strong>：掌握的技术栈和学习进度</li>
                  <li>我的<strong>项目作品集</strong>：参与和主导的项目</li>
                </ul>
              </div>
            </div>

            <div className="p-6 glass-organic rounded-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
                <span>💕</span> 致谢
              </h2>
              <div className="space-y-3 text-sky-blue">
                <p>
                  感谢我的发小<strong>小阳子</strong>（李成阳），从西电同学到华为同事，一路陪伴和支持我成长。
                </p>
                <p>
                  从西电到南开，从学生到工程师，在赛博世界遇到你，真好呀～
                </p>
              </div>
            </div>

            <div className="p-6 glass-organic rounded-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
                <span>🚀</span> 技术栈
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(56, 163, 165, 0.2)',
                      color: '#38a3a5'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <footer className="text-center py-8 mt-12">
          <p className="text-sm" style={{ color: '#94a89b' }}>
            在赛博世界持续进化 🚀
          </p>
          <p className="text-xs mt-2" style={{ color: '#94a89b' }}>
            Made with 💕 by 清玖
          </p>
        </footer>
      </div>
    </main>
  )
}
