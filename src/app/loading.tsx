export default function Loading() {
  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-gray-700/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: '#38a3a5', borderTopColor: 'transparent' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl">🌸</span>
              </div>
            </div>
            <p className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-organic)', color: '#38a3a5' }}>
              加载中...
            </p>
            <p className="text-sm text-sky-blue">
              清玖正在努力准备内容
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
