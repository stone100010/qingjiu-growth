'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '清玖状态面板', progress: 75 },
  { name: 'AI-Studio', progress: 5 },
]

export function ProjectProgressChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#94a89b" tick={{fill: '#94a89b'}} />
          <YAxis stroke="#94a89b" tick={{fill: '#94a89b'}} />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(15, 35, 28, 0.9)', border: '1px solid rgba(94, 129, 107, 0.3)' }}
            itemStyle={{ color: '#94a89b' }}
          />
          <Bar dataKey="progress" fill="#38a3a5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
