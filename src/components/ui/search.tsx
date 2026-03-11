'use client'

import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = '搜索...' }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 pl-10 rounded-lg glass-organic focus:outline-none focus:ring-2 transition-all"
        style={{
          borderColor: 'rgba(94, 129, 107, 0.3)',
          color: '#38a3a5'
        }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#94a89b' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery('')
            onSearch('')
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sky-blue hover:text-white transition-colors"
        >
          ✕
        </button>
      )}
    </form>
  )
}
