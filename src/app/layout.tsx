import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
