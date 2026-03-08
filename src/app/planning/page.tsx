'use client';

import { useState } from 'react';
import { getProjects, getRoadmap, getGoals } from '@/mock';

export default function PlanningPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'roadmap' | 'goals'>('projects');
  const projects = getProjects();
  const roadmap = getRoadmap();
  const goals = getGoals();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            🎯 规划
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            项目路线图和成长目标
          </p>
        </div>

        {/* Tab 切换 */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-slate-800/50 text-purple-300 hover:bg-slate-700/50'
            }`}
          >
            📦 项目
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'roadmap'
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-slate-800/50 text-purple-300 hover:bg-slate-700/50'
            }`}
          >
            🗺️ 路线图
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${
              activeTab === 'goals'
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-slate-800/50 text-purple-300 hover:bg-slate-700/50'
            }`}
          >
            🎯 目标
          </button>
        </div>

        {/* 项目 Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-4 md:space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-3 md:mb-4">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                      <span className="px-2 md:px-3 py-1 bg-purple-500/30 rounded-full text-xs md:text-sm">
                        {project.status}
                      </span>
                      {project.priority === 'high' && (
                        <span className="px-2 md:px-3 py-1 bg-pink-500/30 rounded-full text-xs md:text-sm">
                          High Priority
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-purple-300 mb-2 md:mb-3">{project.description}</p>
                    <div className="text-xs md:text-sm text-purple-400 mb-2 md:mb-3">
                      开始时间: {project.startDate}
                      {project.endDate && ` • 结束时间: ${project.endDate}`}
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-slate-900/50 text-purple-300 rounded text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-0 md:ml-6 text-center min-w-24">
                    <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1">{project.progress}%</div>
                    <div className="text-xs text-purple-400 mb-2 md:mb-3">进度</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 md:h-3">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 md:h-3 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 路线图 Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6 md:space-y-8">
            {roadmap.map((period, index) => (
              <div
                key={period.period}
                className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-pink-400">{period.period}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {period.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-3 md:p-4 bg-slate-900/50 rounded-lg border border-purple-500/20 text-sm md:text-base"
                    >
                      <div className="text-purple-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 目标 Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-6 md:space-y-8">
            {/* 技能目标 */}
            <div className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span>⚡</span> 技能目标
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {goals.skills.map((goal, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-slate-900/50 rounded-lg border border-pink-500/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base md:text-lg">{goal.skill}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        goal.priority === 'high'
                          ? 'bg-pink-500/30 text-pink-400'
                          : 'bg-purple-500/30 text-purple-400'
                      }`}>
                        {goal.priority}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-purple-300 mb-2">目标: {goal.target}</div>
                    <div className="text-xs text-purple-400">📅 {goal.deadline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 项目目标 */}
            <div className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span>📦</span> 项目目标
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {goals.projects.map((goal, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-slate-900/50 rounded-lg border border-purple-500/20"
                  >
                    <div className="font-bold text-base md:text-lg mb-2">{goal.project}</div>
                    <div className="text-xs md:text-sm text-purple-300 mb-2">目标: {goal.target}</div>
                    <div className="text-xs text-purple-400">📅 {goal.deadline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 个人目标 */}
            <div className="p-4 md:p-6 bg-slate-800/50 rounded-xl md:rounded-2xl border-2 border-purple-500/30">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span>💡</span> 个人目标
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {goals.personal.map((goal, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-slate-900/50 rounded-lg border border-indigo-500/20"
                  >
                    <div className="font-bold text-base md:text-lg mb-2">{goal.goal}</div>
                    <div className="text-xs md:text-sm text-purple-300 mb-1">{goal.target}</div>
                    <div className="text-xs text-purple-400">{goal.deadline}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-purple-400 py-8">
          <p>持续规划，持续成长... 🚀</p>
        </div>
      </div>
    </main>
  );
}
