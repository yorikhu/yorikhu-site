"use client";

import { Code, Rocket, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-40 px-6 md:px-20 border-t border-white/5 bg-[#080808] flex justify-center text-center relative overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C5CFF]/5 via-transparent to-transparent opacity-50 blur-3xl"></div>

      <div className="w-full max-w-7xl z-10">
        <div className="flex justify-center gap-12 mb-12">
          <Code className="text-white" size={72} />
          <Rocket className="text-white" size={72} />
          <Zap className="text-white" size={72} />
        </div>

        <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide mb-8">
          从创意到落地，<span className="text-[#00F0FF] font-medium">一站式开发</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full mx-auto mt-16">
          <div className="p-6 border border-white/10 bg-white/5 rounded-lg hover:border-[#7C5CFF]/50 transition-colors">
            <div className="text-[#7C5CFF] font-bold text-lg mb-3">前端开发</div>
            <p className="text-gray-400 text-sm">
              React、Vue 双栈并行<br/>
              响应式 H5 与 SPA 应用
            </p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 rounded-lg hover:border-[#00F0FF]/50 transition-colors">
            <div className="text-[#00F0FF] font-bold text-lg mb-3">后端开发</div>
            <p className="text-gray-400 text-sm">
              Node.js 全栈能力<br/>
              API 设计与数据库架构
            </p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 rounded-lg hover:border-[#8BFFB7]/50 transition-colors">
            <div className="text-[#8BFFB7] font-bold text-lg mb-3">小程序开发</div>
            <p className="text-gray-400 text-sm">
              微信、支付宝小程序<br/>
              UniApp 跨端解决方案
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
