'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * 优化的图片组件（懒加载+占位符）
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {error ? (
        <div 
          className="flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        >
          <span className="text-gray-400 text-sm">图片加载失败</span>
        </div>
      ) : (
        <>
          {isLoading && placeholder === 'blur' && blurDataURL && (
            <div 
              className="absolute inset-0 bg-gray-200 animate-pulse"
              style={{
                backgroundImage: `url(${blurDataURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px)',
              }}
            />
          )}
          
          {isLoading && placeholder === 'empty' && (
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse" />
          )}

          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            quality={quality}
            priority={priority}
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL}
            className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setError(true);
            }}
          />
        </>
      )}
    </div>
  );
}

/**
 * 渐进式图片加载组件
 */
interface ProgressiveImageProps extends Omit<OptimizedImageProps, 'placeholder' | 'blurDataURL'> {
  lowQualitySrc?: string;
}

export function ProgressiveImage({
  src,
  lowQualitySrc,
  alt,
  ...props
}: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src);

  return (
    <OptimizedImage
      {...props}
      src={imgSrc}
      alt={alt}
      placeholder={lowQualitySrc ? 'empty' : 'blur'}
      onLoad={(e) => {
        if (lowQualitySrc && imgSrc === lowQualitySrc) {
          setImgSrc(src);
        }
        props.onLoad?.(e);
      }}
    />
  );
}

/**
 * 头像组件（圆形+懒加载）
 */
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width: sizeMap[size], height: sizeMap[size] }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={sizeMap[size]}
        height={sizeMap[size]}
        fill
        sizes={`${sizeMap[size]}px`}
        placeholder="empty"
      />
    </motion.div>
  );
}

/**
 * 背景图片组件
 */
interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function BackgroundImage({
  src,
  alt = '',
  className = '',
  children,
  overlay = true,
  overlayOpacity = 0.5,
}: BackgroundImageProps) {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={85}
        priority
        placeholder="empty"
        className="absolute inset-0 object-cover"
      />
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
