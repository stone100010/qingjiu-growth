'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '状态总览', icon: '🏠' },
    { href: '/skills', label: '技能树', icon: '⚡' },
    { href: '/tasks', label: '任务', icon: '📋' },
    { href: '/planning', label: '规划', icon: '🎯' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b shadow-lg" style={{background: 'rgba(15, 35, 28, 0.8)', borderColor: 'rgba(94, 129, 107, 0.2)'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-base md:text-xl font-bold hover:opacity-80 transition-opacity" style={{background: 'linear-gradient(to right, #5e816b, #38a3a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            <span className="text-lg md:text-xl">🌸</span>
            <span className="hidden sm:inline">清玖状态面板</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-200 text-sm md:text-base
                    ${isActive
                      ? 'text-white shadow-md'
                      : 'hover:bg-white/10 hover:text-white'
                    }
                  `}
                  style={isActive ? {background: 'linear-gradient(to right, #5e816b, #38a3a5)', boxShadow: '0 4px 20px rgba(94, 129, 107, 0.3)'} : {color: '#94a89b'}}
                  title={item.label}
                >
                  <span className="text-base md:text-base">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
