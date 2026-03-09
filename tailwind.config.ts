import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 有机科技配色系统 - 自然色彩
        'forest-green': {
          DEFAULT: '#22573c',
          light: '#5e816b',
        },
        'sage-green': '#5e816b',
        'sky-blue': '#38a3a5',
        'azure': '#4facfe',
        'earth-brown': '#785e49',
        'sand-beige': '#d9d0c3',
        // 科技荧光点缀
        'tech-cyan': '#22d3ee',
        'tech-purple': '#a855f7',
      },
      fontFamily: {
        organic: ['var(--font-organic)', 'sans-serif'],
        tech: ['var(--font-tech)', 'sans-serif'],
      },
      borderRadius: {
        'organic': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
}
export default config
