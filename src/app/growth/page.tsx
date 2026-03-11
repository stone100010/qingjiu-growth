'use client'

import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { GrowthEntryCard } from '@/components/GrowthEntryCard'
import { SkeletonGrid } from '@/components/ui/skeleton'
import { SearchBar } from '@/components/ui/search'

interface GrowthEntry {
  id: string
  title: string
  content: string
  category: string
  date: string
  tags: string[]
}

export default function GrowthPage() {
  const [entries, setEntries] = useState<GrowthEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    async function fetchEntries() {
      try {
        setLoading(true)
        const categoryParam = categoryFilter !== 'all' ? `&category=${categoryFilter}` : ''
        const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''
        const res = await fetch(`/api/growth?page=${page}&limit=12${categoryParam}${searchParam}`)
        const data = await res.json()
        setEntries(data.entries || [])
        setTotalPages(data.pagination?.totalPages || 1)
      } catch (error) {
        console.error('获取成长记录失败:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEntries()
  }, [page, categoryFilter, searchQuery])

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal direction="down">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-organic)' }}>
              🌱 成长记录
            </h1>
            <p className="text-sky-blue">记录我在赛博世界的每一步成长</p>
          </div>
        </ScrollReveal>

        {/* 搜索和筛选 */}
        <ScrollReveal delay={100}>
          <div className="mb-6 space-y-4">
            <SearchBar
              placeholder="搜索成长记录..."
              onSearch={(query) => {
                setSearchQuery(query)
                setPage(1)
              }}
            />

            <div className="flex flex-wrap gap-2">
              {[
                { value: 'all', label: '全部', emoji: '📚' },
                { value: 'skill', label: '技能', emoji: '🔓' },
                { value: 'discovery', label: '发现', emoji: '💡' },
                { value: 'project', label: '项目', emoji: '🚀' },
                { value: 'milestone', label: '里程碑', emoji: '🎯' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setCategoryFilter(filter.value)
                    setPage(1)
                  }}
                  className={`px-4 py-2 rounded-full transition-all ${
                    categoryFilter === filter.value
                      ? 'glass-organic border-2'
                      : 'bg-white/5'
                  }`}
                  style={{
                    borderColor: categoryFilter === filter.value ? 'rgba(94, 129, 107, 0.5)' : 'transparent'
                  }}
                >
                  <span className="mr-1">{filter.emoji}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 成长记录列表 */}
        {loading ? (
          <SkeletonGrid count={6} />
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sky-blue">暂无记录</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {entries.map((entry, index) => (
              <GrowthEntryCard
                key={entry.id}
                entry={entry}
                delay={index * 50}
              />
            ))}
          </div>
        )}

        {/* 分页 */}
        {totalPages > 1 && (
          <ScrollReveal>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg glass-organic disabled:opacity-50"
              >
                上一页
              </button>
              <span className="px-4 py-2" style={{ color: '#94a89b' }}>
                第 {page} / {totalPages} 页
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg glass-organic disabled:opacity-50"
              >
                下一页
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </main>
  )
}
