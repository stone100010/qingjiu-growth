'use client'

import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass-organic hover:scale-110 transition-transform"
      style={{
        border: '1px solid rgba(94, 129, 107, 0.3)',
        background: theme === 'dark' ? 'rgba(15, 35, 28, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }}
      title={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
