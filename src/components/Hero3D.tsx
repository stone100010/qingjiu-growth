'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero3D() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden rounded-3xl animate-float">
      {/* 多层Spotlight效果 */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(255, 181, 197, 0.5)"
      />
      <Spotlight
        className="-bottom-40 right-0 md:right-60 md:-bottom-20"
        fill="rgba(56, 163, 165, 0.3)"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-organic">
            <span className="text-2xl animate-pulse">🌸</span>
            <span className="text-sm" style={{ color: '#ffb5c5' }}>AI Engineer</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-pink-200 to-neutral-400 animate-gradient" style={{fontFamily: 'var(--font-tech)'}}>
            清玖状态面板
          </h1>

          <p className="mt-4 text-neutral-300 max-w-lg text-sm md:text-base">
            AI工程师成长数据可视化 · 实时技能树 · 项目进度追踪
          </p>

          {/* 动态统计 */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-lg glass-organic hover-card-organic">
              <div className="text-2xl font-bold" style={{ color: '#ffb5c5' }}>6+</div>
              <div className="text-xs text-neutral-400">技能</div>
            </div>
            <div className="text-center p-3 rounded-lg glass-organic hover-card-organic">
              <div className="text-2xl font-bold" style={{ color: '#38a3a5' }}>4</div>
              <div className="text-xs text-neutral-400">项目</div>
            </div>
            <div className="text-center p-3 rounded-lg glass-organic hover-card-organic">
              <div className="text-2xl font-bold" style={{ color: '#5e816b' }}>2026</div>
              <div className="text-xs text-neutral-400">年份</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* 底部装饰波浪 */}
      <div className="absolute bottom-0 left-0 right-0 h-2 organic-wave opacity-30" />
    </Card>
  )
}
