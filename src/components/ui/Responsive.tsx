'use client';

import { useState, useEffect } from 'react';

interface ResponsiveValue<T> {
  mobile: T;
  tablet: T;
  desktop: T;
}

/**
 * 响应式Hook - 检测屏幕尺寸
 */
export function useResponsive() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop: screenSize === 'desktop',
    screenSize,
  };
}

/**
 * 响应式值Hook
 */
export function useResponsiveValue<T>({ mobile, tablet, desktop }: ResponsiveValue<T>): T {
  const { screenSize } = useResponsive();

  return screenSize === 'mobile' ? mobile : screenSize === 'tablet' ? tablet : desktop;
}

/**
 * 响应式容器组件
 */
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveContainer({ children, className = '' }: ResponsiveContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * 响应式网格组件
 */
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
}

export function ResponsiveGrid({ 
  children, 
  className = '',
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'gap-4 md:gap-6'
}: ResponsiveGridProps) {
  const gridClass = `
    grid
    grid-cols-${cols.mobile || 1}
    ${cols.tablet ? `md:grid-cols-${cols.tablet}` : ''}
    ${cols.desktop ? `lg:grid-cols-${cols.desktop}` : ''}
    ${gap}
    ${className}
  `;

  return <div className={gridClass}>{children}</div>;
}

/**
 * 隐藏在特定屏幕尺寸
 */
interface ShowAtProps {
  children: React.ReactNode;
  above?: 'sm' | 'md' | 'lg' | 'xl';
  below?: 'sm' | 'md' | 'lg' | 'xl';
}

export function ShowAt({ children, above, below }: ShowAtProps) {
  let className = '';

  if (above) {
    className += ` hidden ${above === 'sm' ? 'sm:block' : above === 'md' ? 'md:block' : above === 'lg' ? 'lg:block' : 'xl:block'}`;
  }

  if (below) {
    className += ` ${below === 'sm' ? 'sm:hidden' : below === 'md' ? 'md:hidden' : below === 'lg' ? 'lg:hidden' : 'xl:hidden'}`;
  }

  return <div className={className}>{children}</div>;
}

/**
 * 仅在移动端显示
 */
export function OnlyMobile({ children }: { children: React.ReactNode }) {
  return <ShowAt below="md">{children}</ShowAt>;
}

/**
 * 仅在桌面端显示
 */
export function OnlyDesktop({ children }: { children: React.ReactNode }) {
  return <ShowAt above="md">{children}</ShowAt>;
}
