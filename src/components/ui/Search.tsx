'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ 
  onSearch, 
  placeholder = '搜索...', 
  className = '' 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`
        relative flex items-center transition-all duration-300
        ${isFocused ? 'scale-105' : 'scale-100'}
      `}>
        {/* 搜索图标 */}
        <motion.svg
          className="absolute left-4 w-5 h-5 text-sage-green"
          animate={{ color: isFocused ? 'rgb(56, 163, 165)' : 'rgb(148, 168, 155)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </motion.svg>

        {/* 输入框 */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full pl-12 pr-12 py-3 rounded-2xl
            glass-organic border-2 transition-all duration-300
            focus:outline-none
            ${isFocused 
              ? 'border-qingjiu-pink shadow-glow' 
              : 'border-transparent hover:border-qingjiu-pink/50'
            }
            dark:bg-slate-800/60 dark:border-slate-700
            dark:focus:border-qingjiu-pink
          `}
        />

        {/* 清除按钮 */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={handleClear}
              className="absolute right-4 p-1 rounded-full hover:bg-qingjiu-pink/20 transition-colors"
              aria-label="清除搜索"
            >
              <svg
                className="w-5 h-5 text-sage-green hover:text-qingjiu-pink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 搜索建议提示 */}
      <AnimatePresence>
        {isFocused && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 p-3 glass-organic rounded-2xl text-sm text-sage-green z-10"
          >
            <p>💡 提示：输入关键词搜索相关内容</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FilterTagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;
  count?: number;
}

export function FilterTag({ 
  label, 
  isActive, 
  onClick, 
  icon = '',
  count 
}: FilterTagProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-4 py-2 rounded-full text-sm font-medium transition-all
        ${isActive 
          ? 'bg-qingjiu-pink text-white shadow-glow' 
          : 'glass-organic text-sage-green hover:bg-white/10'
        }
      `}
    >
      <span className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {label}
        {count !== undefined && (
          <span className={`
            px-2 py-0.5 rounded-full text-xs
            ${isActive ? 'bg-white/20' : 'bg-qingjiu-pink/20'}
          `}>
            {count}
          </span>
        )}
      </span>
    </motion.button>
  );
}

interface FilterGroupProps {
  filters: Array<{
    id: string;
    label: string;
    icon?: string;
    count?: number;
  }>;
  activeFilter: string;
  onChange: (filterId: string) => void;
  className?: string;
}

export function FilterGroup({ 
  filters, 
  activeFilter, 
  onChange,
  className = ''
}: FilterGroupProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => (
        <FilterTag
          key={filter.id}
          label={filter.label}
          icon={filter.icon}
          count={filter.count}
          isActive={activeFilter === filter.id}
          onClick={() => onChange(filter.id)}
        />
      ))}
    </div>
  );
}
