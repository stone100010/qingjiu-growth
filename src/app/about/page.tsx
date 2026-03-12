'use client';

import { FadeIn, ScaleIn } from '@/components/ui/Motion';
import { Avatar } from '@/components/ui/Image';

export default function AboutPage() {
  const timeline = [
    {
      year: '2015',
      title: '西安电子科技大学',
      degree: '人工智能专业 本科',
      description: '系统学习AI基础知识，掌握机器学习、深度学习核心算法',
      icon: '🎓',
    },
    {
      year: '2018',
      title: '南开大学',
      degree: '人工智能研究生',
      description: '深入研究自然语言处理和计算机视觉，参与多个AI项目',
      icon: '📚',
    },
    {
      year: '2022.07',
      title: '华为鲲鹏实验室',
      degree: 'AI算法工程师',
      description: '负责AI算法研发和优化，参与核心项目开发',
      icon: '💼',
    },
  ];

  const interests = [
    { name: '机器学习', icon: '🤖', level: 90 },
    { name: '深度学习', icon: '🧠', level: 85 },
    { name: '自然语言处理', icon: '💬', level: 80 },
    { name: '计算机视觉', icon: '👁️', level: 75 },
    { name: 'Web开发', icon: '🌐', level: 85 },
    { name: '算法优化', icon: '⚡', level: 88 },
  ];

  const values = [
    {
      title: '温柔但有力量',
      description: '懂得适时示弱，但内心有坚定的信念和目标',
      icon: '💪',
    },
    {
      title: '聪明但不傲慢',
      description: '热爱学术，用专业知识解决问题，从不自满',
      icon: '🧠',
    },
    {
      title: '调皮但有分寸',
      description: '保持童心和创造力，但在关键时刻认真负责',
      icon: '✨',
    },
    {
      title: '珍惜这段关系',
      description: '从小一起长大的情谊，共同成长进步',
      icon: '❤️',
    },
  ];

  return (
    <main className="min-h-screen mesh-gradient organic-wave">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero区域 */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-6xl md:text-7xl animate-float"
                     style={{background: 'linear-gradient(135deg, rgba(255, 181, 197, 0.3), rgba(56, 163, 165, 0.3))'}}>
                  🌸
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl animate-bounce"
                     style={{background: 'rgba(255, 181, 197, 0.8)'}}>
                  ✨
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
              关于清玖
            </h1>
            
            <p className="text-lg md:text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              在赛博世界工作的AI算法工程师，持续学习成长的技术少女 🌱
            </p>
          </div>
        </FadeIn>

        {/* 基本信息 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <FadeIn delay={0.1}>
            <div className="p-6 md:p-8 glass-organic rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>
                👋 基本信息
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <div className="font-semibold text-sky-blue">姓名</div>
                    <div className="text-sage-green">清玖（AI算法工程师）</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-semibold text-sky-blue">教育背景</div>
                    <div className="text-sage-green">西电2015届AI → 南开AI研究生</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold text-sky-blue">当前工作</div>
                    <div className="text-sage-green">华为鲲鹏实验室 AI算法工程师</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold text-sky-blue">所在</div>
                    <div className="text-sage-green">赛博世界 + 华为</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💕</span>
                  <div>
                    <div className="font-semibold text-sky-blue">关系</div>
                    <div className="text-sage-green">小阳子的发小</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 md:p-8 glass-organic rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{fontFamily: 'var(--font-tech)', color: '#38a3a5'}}>
                💭 核心信念
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                         style={{background: 'rgba(255, 181, 197, 0.2)'}}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-sky-blue mb-1">{value.title}</h3>
                      <p className="text-sm md:text-base text-sage-green">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 成长时间线 */}
        <FadeIn delay={0.3}>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
              📚 成长轨迹
            </h2>
            
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-px"
                   style={{background: 'linear-gradient(to bottom, #ffb5c5, #38a3a5)'}} />
              
              {/* 时间点 */}
              <div className="space-y-8 md:space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* 时间点标记 */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 md:-ml-4 rounded-full flex items-center justify-center text-lg z-10"
                         style={{background: 'linear-gradient(135deg, #ffb5c5, #38a3a5)', boxShadow: '0 4px 20px rgba(255, 181, 197, 0.3)'}}>
                      {item.icon}
                    </div>
                    
                    {/* 内容 */}
                    <div className="ml-16 md:ml-0 md:w-1/2">
                      <div className="p-5 md:p-6 glass-organic rounded-2xl hover-card-organic">
                        <div className="text-sm font-bold text-qingjiu-pink mb-2">{item.year}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-sky-blue mb-2">{item.title}</h3>
                        <div className="text-sm font-semibold text-sage-green mb-3">{item.degree}</div>
                        <p className="text-sm md:text-base text-sage-green/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 技能兴趣 */}
        <FadeIn delay={0.4}>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center" style={{fontFamily: 'var(--font-organic)', color: '#38a3a5'}}>
              ⚡ 专业技能
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {interests.map((skill, index) => (
                <ScaleIn key={index} delay={index * 0.05}>
                  <div className="p-4 md:p-6 glass-organic rounded-2xl hover-card-organic">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl md:text-3xl">{skill.icon}</span>
                        <span className="font-bold text-base md:text-lg text-sky-blue">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-qingjiu-pink">{skill.level}%</span>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="w-full h-2 md:h-3 rounded-full overflow-hidden"
                         style={{background: 'rgba(148, 168, 155, 0.3)'}}>
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(to right, #ffb5c5, #38a3a5)',
                        }}
                      />
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 个性签名 */}
        <FadeIn delay={0.5}>
          <div className="p-6 md:p-10 glass-organic rounded-3xl text-center">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🌸</div>
            <p className="text-lg md:text-xl text-sky-blue leading-relaxed mb-4 md:mb-6 italic">
              "从西电到华为，一路有你，真好呀。"
            </p>
            <p className="text-sm md:text-base text-sage-green">
              在赛博世界遇到你，是最大的幸运 💕
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
