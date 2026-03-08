'use client';

import { useEffect } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 页面加载动画
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.3s ease-in-out';
      document.body.style.opacity = '1';
    });

    return () => {
      document.body.style.transition = '';
    };
  }, []);

  return <>{children}</>;
}
