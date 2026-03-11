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

        // 粉色系主题色（清玖专属）
        'qingjiu-pink': {
          DEFAULT: '#ffb5c5',
          light: '#ffd4dc',
          dark: '#ff9aab',
        },
        'sakura-pink': '#ffdae0',
        'rose-quartz': '#ffb5ba',
        'peach-blossom': '#ffd0d5',

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
        'organic-sm': '45% 55% 40% 60% / 55% 45% 60% 40%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'organic-gradient': 'linear-gradient(135deg, #ffdae0 0%, #ffb5c5 50%, #ffd4dc 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 181, 197, 0.5)',
        'glow-soft': '0 0 40px rgba(255, 181, 197, 0.3)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 60px rgba(255, 181, 197, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
