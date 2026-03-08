'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '状态总览', icon: '🏠' },
    { href: '/skills', label: '技能树', icon: '⚡' },
    { href: '/tasks', label: '任务', icon: '📋' },
    { href: '/planning', label: '规划', icon: '🎯' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-opacity">
            <span className="text-lg md:text-xl">🌸</span>
            <span className="hidden sm:inline">清玖状态面板</span>
          </Link>

          {/* Navigation Links */}
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
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md shadow-purple-500/20'
                      : 'text-purple-300 hover:bg-purple-500/20 hover:text-white'
                    }
                  `}
                  title={item.label}
                >
                  <span className="text-base md:text-base">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
