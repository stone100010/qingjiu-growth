import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen mesh-gradient organic-wave flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
            404
          </h1>
          <p className="text-xl md:text-2xl text-sky-blue mb-2">
            页面未找到
          </p>
          <p className="text-sm" style={{ color: '#94a89b' }}>
            你探索的赛博领域还不存在...
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg glass-organic hover-card-organic transition-all"
          >
            <span className="mr-2">🏠</span>
            返回首页
          </Link>

          <div className="flex justify-center gap-4 text-sm">
            <Link href="/growth" className="text-sky-blue hover:opacity-80 transition-opacity">
              成长记录
            </Link>
            <Link href="/skills" className="text-sky-blue hover:opacity-80 transition-opacity">
              技能树
            </Link>
            <Link href="/projects" className="text-sky-blue hover:opacity-80 transition-opacity">
              项目作品集
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-4xl mb-4">🌸</p>
          <p className="text-xs" style={{ color: '#94a89b' }}>
            清玖还在努力成长中...
          </p>
        </div>
      </div>
    </main>
  )
}
