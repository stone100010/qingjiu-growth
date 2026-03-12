'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: '状态总览', icon: '🏠' },
    { href: '/growth', label: '成长', icon: '🌱' },
    { href: '/skills', label: '技能树', icon: '⚡' },
    { href: '/projects', label: '项目', icon: '🚀' },
    { href: '/about', label: '关于', icon: '🌸' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b shadow-lg animate-slide-up" style={{background: 'rgba(15, 35, 28, 0.8)', borderColor: 'rgba(255, 181, 197, 0.2)'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-lg md:text-xl font-bold hover:scale-105 transition-transform"
            style={{background: 'linear-gradient(to right, #ffb5c5, #38a3a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-xl md:text-2xl animate-float">🌸</span>
            <span className="hidden sm:inline">清玖状态面板</span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-base relative overflow-hidden group
                    ${isActive
                      ? 'text-white shadow-md'
                      : 'hover:bg-white/10 hover:text-white'
                    }
                  `}
                  style={isActive ? {
                    background: 'linear-gradient(to right, #ffb5c5, #38a3a5)',
                    boxShadow: '0 4px 20px rgba(255, 181, 197, 0.3)'
                  } : {color: '#94a89b'}}
                  title={item.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="text-base relative z-10">{item.icon}</span>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full animate-shimmer" style={{background: 'linear-gradient(to right, transparent, #ffb5c5, transparent)'}} />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                className="w-6 h-5 relative flex flex-col justify-center gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="w-full h-0.5 bg-current block"
                  style={{color: '#94a89b'}}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-full h-0.5 bg-current block"
                  style={{color: '#94a89b'}}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="w-full h-0.5 bg-current block"
                  style={{color: '#94a89b'}}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* 遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* 菜单内容 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 backdrop-blur-md z-50 md:hidden"
              style={{background: 'rgba(15, 35, 28, 0.95)'}}
            >
              <div className="flex flex-col p-6 h-full">
                {/* 关闭按钮 */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* 导航链接 */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                          ${isActive
                            ? 'text-white shadow-md'
                            : 'hover:bg-white/10'
                          }
                        `}
                        style={isActive ? {
                          background: 'linear-gradient(to right, #ffb5c5, #38a3a5)',
                          boxShadow: '0 4px 20px rgba(255, 181, 197, 0.3)'
                        } : {color: '#94a89b'}}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* 底部装饰 */}
                <div className="mt-auto pt-8 text-center">
                  <p className="text-sm" style={{color: '#94a89b'}}>
                    在赛博世界持续进化 🚀
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 底部光晕 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
    </nav>
  );
}
