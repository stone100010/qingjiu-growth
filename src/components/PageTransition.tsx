'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const variants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// 更简单的淡入淡出版本（适合某些页面）
export function FadeTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// 滑动过渡版本（适合从侧边栏导航的页面）
export function SlideTransition({ children, direction = 'left' }: { 
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
}) {
  const pathname = usePathname();
  
  const slideVariants = {
    left: { x: [-100, 0] },
    right: { x: [100, 0] },
    up: { y: [100, 0] },
    down: { y: [-100, 0] },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, ...slideVariants[direction].reduce((acc, val) => ({ ...acc, x: val[0] }), {}) }}
        animate={{ opacity: 1, [Object.keys(slideVariants[direction])[0]]: slideVariants[direction][Object.keys(slideVariants[direction])[0]][1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
