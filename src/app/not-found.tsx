'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/ui/Motion';

export default function NotFound() {
  return (
    <main className="min-h-screen mesh-gradient organic-wave flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            {/* 404大字 */}
            <div className="mb-8 relative">
              <div className="text-[120px] md:text-[180px] font-bold leading-none animate-bounce"
                   style={{
                     fontFamily: 'var(--font-tech)',
                     background: 'linear-gradient(135deg, #ffb5c5, #38a3a5)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}>
                404
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                <div className="text-4xl md:text-5xl animate-float">🌸</div>
              </div>
              
              <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2">
                <div className="text-2xl md:text-3xl animate-pulse">💫</div>
              </div>
              
              <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4">
                <div className="text-2xl md:text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
              </div>
            </div>

            {/* 错误信息 */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
                哎呀，页面走丢了～
              </h1>
              <p className="text-base md:text-lg text-sage-green">
                你访问的页面可能已被移动、删除，或者从未存在过
              </p>
            </div>

            {/* 可爱的插图 */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block p-6 md:p-8 glass-organic rounded-3xl">
                <div className="text-6xl md:text-7xl mb-4">🔍</div>
                <p className="text-sm md:text-base text-sage-green">
                  清玖正在赛博世界的各个角落寻找这个页面...
                </p>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #ffb5c5, #38a3a5)',
                  boxShadow: '0 4px 20px rgba(255, 181, 197, 0.3)'
                }}
              >
                <span>🏠</span>
                <span>返回首页</span>
              </Link>
              
              <Link 
                href="/growth"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 hover:shadow-lg"
                style={{
                  borderColor: '#38a3a5',
                  color: '#38a3a5'
                }}
              >
                <span>🌱</span>
                <span>查看成长记录</span>
              </Link>
            </div>

            {/* 其他链接 */}
            <div className="mt-8 md:mt-12">
              <p className="text-sm text-sage-green mb-4">或者，你可能想找：</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/skills" className="text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors" style={{color: '#38a3a5'}}>
                  ⚡ 技能树
                </Link>
                <Link href="/projects" className="text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors" style={{color: '#38a3a5'}}>
                  🚀 项目作品集
                </Link>
                <Link href="/about" className="text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors" style={{color: '#38a3a5'}}>
                  🌸 关于清玖
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
