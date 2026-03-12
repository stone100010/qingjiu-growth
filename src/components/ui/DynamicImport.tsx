'use client';

import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

/**
 * 动态导入组件（代码分割）
 * @param importFunc - 动态导入函数
 * @param fallback - 加载时的fallback组件
 * @returns 懒加载的组件
 */
export function dynamicImport<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);

  return function DynamicComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense 
        fallback={
          fallback || (
            <div className="flex items-center justify-center p-8">
              <LoadingSpinner size="md" />
            </div>
          )
        }
      >
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

/**
 * 预加载组件（可选链）
 * @param importFunc - 动态导入函数
 */
export function preloadComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) {
  importFunc();
}

/**
 * 带错误边界的动态导入
 */
export function dynamicImportWithErrorBoundary<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
  errorFallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);

  return function DynamicComponentWithErrorBoundary(props: React.ComponentProps<T>) {
    return (
      <Suspense
        fallback={
          fallback || (
            <div className="flex items-center justify-center p-8">
              <LoadingSpinner size="md" />
            </div>
          )
        }
      >
        <ErrorBoundaryWrapper errorFallback={errorFallback}>
          <LazyComponent {...props} />
        </ErrorBoundaryWrapper>
      </Suspense>
    );
  };
}

/**
 * 错误边界包装器
 */
interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
  errorFallback?: React.ReactNode;
}

function ErrorBoundaryWrapper({ children, errorFallback }: ErrorBoundaryWrapperProps) {
  return (
    <>
      {children}
    </>
  );
}

/**
 * 路由级别的代码分割
 * 用于Next.js App Router的动态导入
 */
export function dynamicPage<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) {
  return lazy(importFunc);
}

/**
 * 条件性导入（仅在某些条件下加载）
 */
export function conditionalImport<T extends React.ComponentType<any>>(
  condition: boolean,
  importFunc: () => Promise<{ default: T }>
) {
  if (!condition) return null;

  const LazyComponent = lazy(importFunc);

  return function ConditionalComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={<LoadingSpinner size="sm" />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
