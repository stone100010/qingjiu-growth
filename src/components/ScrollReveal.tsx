'use client';

import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-8 opacity-0',
    down: '-translate-y-8 opacity-0',
    left: 'translate-x-8 opacity-0',
    right: '-translate-x-8 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : directionClasses[direction]
      }`}
    >
      {children}
    </div>
  );
}
