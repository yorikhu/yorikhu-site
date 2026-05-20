"use client";

import { Fingerprint } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-40 px-6 md:px-20 border-t border-white/5 bg-[#080808] flex justify-center text-center relative overflow-hidden">
      {/* Animated scanning line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FF5E7E]/30 blur-[2px] animate-scan"></div>

      <div className="max-w-3xl z-10">
        <Fingerprint className="mx-auto text-white/10 mb-8" size={64} />
        <div className="text-2xl md:text-4xl font-light text-white tracking-wide flex flex-col space-y-1 mb-8">
          <p>我相信未来的创作者，</p>
          <p>既是开发者、设计师，更是<span className="text-[#FF5E7E] font-bold text-glitch-hover inline-block mx-2">导演</span>与</p>
          <p><span className="text-[#00F0FF] font-bold text-glitch-hover inline-block mx-2">世界构建者</span>。</p>
        </div>
        <div className="text-2xl md:text-4xl font-light text-white tracking-wide">
          <p className="text-gray-500 text-xl md:text-2xl pt-4">
            AI 不只是工具，而是一种新的创作媒介。
          </p>
        </div>
      </div>
    </section>
  );
}
