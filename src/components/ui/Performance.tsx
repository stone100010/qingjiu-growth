'use client';

import { useEffect, useState } from 'react';

/**
 * Web Vitals 监控 Hook
 */
export function useWebVitals() {
  const [vitals, setVitals] = useState({
    LCP: 0, // Largest Contentful Paint
    FID: 0, // First Input Delay
    CLS: 0, // Cumulative Layout Shift
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // 监控 LCP
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        setVitals(prev => ({ ...prev, LCP: lastEntry.renderTime || lastEntry.loadTime }));
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => observer.disconnect();
    } catch (e) {
      console.warn('LCP monitoring not supported:', e);
    }
  }, []);

  return vitals;
}

/**
 * 性能监控组件（开发环境显示）
 */
export function PerformanceMonitor() {
  const vitals = useWebVitals();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">性能指标</h3>
      <div>LCP: {vitals.LCP.toFixed(0)}ms</div>
      <div>FID: {vitals.FID.toFixed(0)}ms</div>
      <div>CLS: {vitals.CLS.toFixed(3)}</div>
    </div>
  );
}

/**
 * 性能预算配置
 */
export const performanceBudget = {
  // LCP (Largest Contentful Paint): 2.5s
  LCP: 2500,
  
  // FID (First Input Delay): 100ms
  FID: 100,
  
  // CLS (Cumulative Layout Shift): 0.1
  CLS: 0.1,
  
  // FCP (First Contentful Paint): 1.8s
  FCP: 1800,
  
  // TTI (Time to Interactive): 3.8s
  TTI: 3800,
  
  // 图像大小限制 (bytes)
  imageSize: 200 * 1024, // 200KB
  
  // JavaScript包大小限制 (bytes)
  jsBundleSize: 200 * 1024, // 200KB
};

/**
 * 检查性能预算
 */
export function checkPerformanceBudget(metric: keyof typeof performanceBudget, value: number): boolean {
  const budget = performanceBudget[metric];
  return value <= budget;
}

/**
 * 图片优化建议
 */
export function getImageOptimizationTips(src: string, width: number, height: number): string[] {
  const tips: string[] = [];

  if (width > 1920) {
    tips.push('图片宽度超过1920px，考虑使用响应式图片');
  }

  if (height > 1080) {
    tips.push('图片高度超过1080px，考虑使用响应式图片');
  }

  if (!src.endsWith('.webp') && !src.endsWith('.avif')) {
    tips.push('使用现代图片格式（WebP/AVIF）以减小文件大小');
  }

  return tips;
}

/**
 * 代码分割建议
 */
export function getCodeSplittingTips(bundleSize: number): string[] {
  const tips: string[] = [];
  const maxSizeKB = 200;

  if (bundleSize > maxSizeKB * 1024) {
    tips.push(`包大小超过${maxSizeKB}KB，建议进行代码分割`);
    tips.push('考虑使用动态导入（dynamic import）');
    tips.push('使用React.lazy()延迟加载非关键组件');
  }

  return tips;
}

/**
 * 性能优化建议汇总
 */
export function getPerformanceOptimizationTips(vitals: {
  LCP: number;
  FID: number;
  CLS: number;
}): string[] {
  const tips: string[] = [];

  if (vitals.LCP > performanceBudget.LCP) {
    tips.push('LCP较慢，优化建议：');
    tips.push('- 优化图片（懒加载、压缩、WebP格式）');
    tips.push('- 预加载关键资源');
    tips.push('- 减少服务端渲染时间');
  }

  if (vitals.FID > performanceBudget.FID) {
    tips.push('FID较慢，优化建议：');
    tips.push('- 减少JavaScript执行时间');
    tips.push('- 分割长任务');
    tips.push('- 优化主线程工作');
  }

  if (vitals.CLS > performanceBudget.CLS) {
    tips.push('CLS较高，优化建议：');
    tips.push('- 为图片和视频设置尺寸属性');
    tips.push('- 避免动态插入内容');
    tips.push('- 使用CSS transform代替动画');
  }

  return tips;
}
