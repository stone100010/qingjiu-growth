import type { Metadata } from 'next';
import { Quicksand, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import PageTransition from '@/components/PageTransition';

// 有机圆润的字体选择
const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-organic',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '清玖状态面板 🌸',
  description: '赛博状态查看器 - 实时监控技能树、任务进度、成长规划',
  keywords: ['AI', '状态面板', '技能树', '任务管理', '清玖'],
  authors: [{ name: '清玖' }],
  openGraph: {
    title: '清玖状态面板',
    description: '赛博世界实时状态监控面板',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${quicksand.variable} ${spaceGrotesk.variable} font-sans`}>
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
