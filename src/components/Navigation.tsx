'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '状态总览', icon: '🏠' },
    { href: '/growth', label: '成长', icon: '🌱' },
    { href: '/skills', label: '技能树', icon: '⚡' },
    { href: '/projects', label: '项目', icon: '🚀' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b shadow-lg animate-slide-up" style={{background: 'rgba(15, 35, 28, 0.8)', borderColor: 'rgba(255, 181, 197, 0.2)'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-base md:text-xl font-bold hover:scale-105 transition-transform" style={{background: 'linear-gradient(to right, #ffb5c5, #38a3a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            <span className="text-lg md:text-xl animate-float">🌸</span>
            <span className="hidden sm:inline">清玖状态面板</span>
          </Link>

          <div className="flex items-center gap-1 md:gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 rounded-lg transition-all duration-200 text-sm md:text-base relative overflow-hidden group
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
                  {/* 悬停时的光效 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <span className="text-base relative z-10">{item.icon}</span>
                  <span className="hidden sm:inline relative z-10">{item.label}</span>

                  {/* 激活指示器 */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full animate-shimmer" style={{background: 'linear-gradient(to right, transparent, #ffb5c5, transparent)'}} />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* 底部光晕 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
    </nav>
  );
}
