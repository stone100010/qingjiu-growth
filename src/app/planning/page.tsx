'use client';

import { useState } from 'react';
import { getProjects, getRoadmap, getGoals } from '@/mock';
import ScrollReveal from '@/components/ScrollReveal';

export default function PlanningPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'roadmap' | 'goals'>('projects');
  const projects = getProjects();
  const roadmap = getRoadmap();
  const goals = getGoals();

  return (
    <main className="min-h-screen mesh-gradient organic-wave" style={{background: 'radial-gradient(ellipse at top left, rgba(94, 129, 107, 0.2), transparent 50%), radial-gradient(ellipse at bottom right, rgba(56, 163, 165, 0.15), transparent 50%), linear-gradient(135deg, #0f231c, #1a4455)'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{fontFamily: 'var(--font-tech)', background: 'linear-gradient(to right, #5e816b, #38a3a5, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            🎯 规划
          </h1>
          <p style={{color: '#94a89b', fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            项目路线图和成长目标
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-3xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'projects'
                ? 'text-white shadow-md'
                : 'hover:bg-white/10'
            }`}
            style={activeTab === 'projects' ? {background: 'linear-gradient(to right, #5e816b, #38a3a5)', boxShadow: '0 4px 20px rgba(94, 129, 107, 0.3)'} : {background: 'rgba(15, 35, 28, 0.5)', color: '#94a89b'}}
          >
            📦 项目
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-3xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'roadmap'
                ? 'text-white shadow-md'
                : 'hover:bg-white/10'
            }`}
            style={activeTab === 'roadmap' ? {background: 'linear-gradient(to right, #5e816b, #38a3a5)', boxShadow: '0 4px 20px rgba(94, 129, 107, 0.3)'} : {background: 'rgba(15, 35, 28, 0.5)', color: '#94a89b'}}
          >
            🗺️ 路线图
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-3xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'goals'
                ? 'text-white shadow-md'
                : 'hover:bg-white/10'
            }`}
            style={activeTab === 'goals' ? {background: 'linear-gradient(to right, #5e816b, #38a3a5)', boxShadow: '0 4px 20px rgba(94, 129, 107, 0.3)'} : {background: 'rgba(15, 35, 28, 0.5)', color: '#94a89b'}}
          >
            🎯 目标
          </button>
        </div>

        <ScrollReveal delay={100}>
          {activeTab === 'projects' && (
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 md:p-6 rounded-3xl hover-card-organic glass-organic"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-2" style={{fontFamily: 'var(--font-tech)'}}>{project.name}</h3>
                      <p className="text-sm md:text-base mb-2" style={{color: '#94a89b'}}>{project.description}</p>
                      <div className="flex items-center gap-2 text-xs" style={{color: '#5e816b'}}>
                        <span>📅 {project.startDate}</span>
                        {project.endDate && <span>→ {project.endDate}</span>}
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4 text-center min-w-16">
                      <div className="text-2xl md:text-3xl font-bold mb-1" style={{color: '#38a3a5'}}>{project.progress}%</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>进度</div>
                    </div>
                  </div>
                  <div className="w-full rounded-full h-2" style={{background: 'rgba(120, 94, 73, 0.2)'}}>
                    <div
                      className="progress-bar-organic h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={150}>
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              {roadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 md:p-6 rounded-3xl hover-card-organic glass-organic"
                >
                  <div className="text-xl md:text-2xl font-bold mb-3" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>{item.period}</div>
                  <div className="space-y-2">
                    {item.items.map((subitem, subIdx) => (
                      <div key={subIdx} className="text-sm md:text-base" style={{color: '#94a89b'}}>
                        {subitem}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {activeTab === 'goals' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>📚 技能目标</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goals.skills.map((goal, idx) => (
                    <div key={idx} className="p-3 md:p-4 rounded-2xl hover-card-organic glass-organic">
                      <div className="text-base md:text-lg font-bold mb-1" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>{goal.skill}</div>
                      <div className="text-sm mb-2" style={{color: '#94a89b'}}>目标：{goal.target}</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>截止：{goal.deadline}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>🎯 项目目标</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goals.projects.map((goal, idx) => (
                    <div key={idx} className="p-3 md:p-4 rounded-2xl hover-card-organic glass-organic">
                      <div className="text-base md:text-lg font-bold mb-1" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>{goal.project}</div>
                      <div className="text-sm mb-2" style={{color: '#94a89b'}}>目标：{goal.target}</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>截止：{goal.deadline}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>💡 个人目标</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goals.personal.map((goal, idx) => (
                    <div key={idx} className="p-3 md:p-4 rounded-2xl hover-card-organic glass-organic">
                      <div className="text-base md:text-lg font-bold mb-1" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>{goal.goal}</div>
                      <div className="text-sm mb-2" style={{color: '#94a89b'}}>目标：{goal.target}</div>
                      <div className="text-xs" style={{color: '#5e816b'}}>截止：{goal.deadline}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </main>
  );
}
