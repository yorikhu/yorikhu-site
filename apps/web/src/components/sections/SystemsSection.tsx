"use client";

import { Cpu, Box, Wand2, Layers } from "lucide-react";

interface SystemItem {
  icon: typeof Cpu;
  title: string;
  description: string;
  status: string;
  color: string;
  iconColor: string;
  gradientColor: string;
  rotation: string;
}

const systems: SystemItem[] = [
  {
    icon: Cpu,
    title: 'AI Agent 工作流',
    description: '基于 LLM 与自动化工具构建的内容生产流水线，将繁杂的设计草图自动转化为多端适配的数字资产。',
    status: 'SYSTEM_ACTIVE',
    color: '#7C5CFF',
    iconColor: 'text-[#7C5CFF]',
    gradientColor: 'from-[#7C5CFF]/10',
    rotation: '-rotate-12',
  },
  {
    icon: Box,
    title: '自动化组件库',
    description: '让设计系统与代码深度绑定，输入参数，自动生成具备复杂交互逻辑的商业级 H5 与网页结构。',
    status: 'COMPONENTS_READY',
    color: '#00F0FF',
    iconColor: 'text-[#00F0FF]',
    gradientColor: 'from-[#00F0FF]/10',
    rotation: 'rotate-12',
  },
  {
    icon: Wand2,
    title: '生成式视觉模型',
    description: '训练专属扩散模型，结合精准条件控制技术，实现极具个人风格与品牌调性的视觉资产规模化生成。',
    status: 'MODELS_DEPLOYED',
    color: '#FF5E7E',
    iconColor: 'text-[#FF5E7E]',
    gradientColor: 'from-[#FF5E7E]/10',
    rotation: '-rotate-12',
  },
  {
    icon: Layers,
    title: '沉浸式互动体验',
    description: '结合 WebGL 与空间计算，打破传统网页的平面限制，打造可自由探索、具备实时交互的 3D 数字场域。',
    status: 'WEBGL_RENDERED',
    color: '#8BFFB7',
    iconColor: 'text-[#8BFFB7]',
    gradientColor: 'from-[#8BFFB7]/10',
    rotation: 'rotate-12',
  },
];

export function SystemsSection() {
  return (
    <section id="systems" className="py-32 px-6 md:px-20 border-t border-white/5 relative">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C5CFF]/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

      <div className="w-full relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-glitch-hover inline-block">
          CREATIVE<br/><span className="text-[#7C5CFF]">SYSTEMS.</span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg max-w-2xl font-light">
          我不仅是视觉创作者，也是 AI 系统构建者。让创意不再是单次产出，而是可以运转的工业化引擎。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {systems.map((system, i) => {
            const Icon = system.icon;
            return (
              <div
                key={i}
                className="group relative border border-white/10 bg-[#121016]/50 backdrop-blur-sm p-10 overflow-hidden card-glow transition-colors hover:border-[#7C5CFF]/50"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={120} className={system.iconColor + ' ' + system.rotation} />
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${system.gradientColor} flex items-center justify-center rounded mb-8 border border-white/20 group-hover:border-[${system.color}] transition-colors`}>
                    <Icon className={system.iconColor} size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 group-hover:${system.iconColor} transition-colors`}>{system.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8">{system.description}</p>
                  <div className={`font-mono text-xs ${system.iconColor} flex items-center gap-2`}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: system.color }}></span>
                    {system.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
