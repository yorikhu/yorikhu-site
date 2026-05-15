"use client";

import { FileJson, Terminal, FileText, Sparkles, FileCode2, ImageIcon, type LucideIcon } from "lucide-react";

interface FragmentItem {
  text: string;
  icon: LucideIcon;
  color: string;
  delay: string;
}

const fragments: FragmentItem[] = [
  { text: '灵感草稿_01.sketch', icon: FileJson, color: '#FF5E7E', delay: '0s' },
  { text: 'Failed_Experiment.log', icon: Terminal, color: '#7C5CFF', delay: '0.2s' },
  { text: '手绘设定集.pdf', icon: FileText, color: '#8BFFB7', delay: '0.4s' },
  { text: 'AI 生成过程纪实', icon: Sparkles, color: '#00F0FF', delay: '0.1s' },
  { text: '无用代码.js', icon: FileCode2, color: 'gray', delay: '0.5s' },
  { text: 'RGB分离测试', icon: ImageIcon, color: '#FF5E7E', delay: '0.3s' }
];

export function FragmentsSection() {
  return (
    <section id="fragments" className="py-32 px-6 md:px-20 border-t border-white/5 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#8BFFB7]/5 opacity-20" style={{ backgroundImage: 'radial-gradient(#8BFFB7 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-glitch-hover inline-block">
          DIGITAL<br/><span className="text-[#8BFFB7]">FRAGMENTS.</span>
        </h2>

        {/* Scattered masonry-like layout for fragments */}
        <div className="flex flex-wrap gap-4 md:gap-6 lg:max-w-5xl">
          {fragments.map((frag, i) => {
            const Icon = frag.icon;
            return (
              <div
                key={i}
                className="group px-6 py-4 border border-white/10 bg-black/80 backdrop-blur text-gray-400 font-mono text-sm cursor-pointer transition-all duration-300 hover:border-[#8BFFB7] hover:-translate-y-2 hover:shadow-[0_5px_20px_rgba(139,255,183,0.15)] flex items-center gap-3 animate-float"
                style={{ animationDelay: frag.delay }}
              >
                <Icon size={16} style={{ color: frag.color }} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:text-white transition-colors">{frag.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
