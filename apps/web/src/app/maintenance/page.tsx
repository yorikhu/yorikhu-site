"use client";

import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 font-sans selection:bg-[#7C5CFF] selection:text-white relative overflow-hidden crt-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C5CFF]/5 via-transparent to-transparent opacity-50 blur-3xl"></div>

      <main className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-2xl">
          {/* Icon with animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7C5CFF]/20 blur-3xl animate-pulse"></div>
              <Construction className="text-[#7C5CFF] w-24 h-24 md:w-32 md:h-32 animate-float relative z-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text tracking-tighter">
            <span className="text-glitch-hover">SYSTEM</span>
            <span className="text-gray-700 mx-4">×</span>
            <span className="text-[#7C5CFF] text-glitch-hover">MAINTENANCE</span>
          </h1>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00F0FF]/30 bg-[#00F0FF]/5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            <span className="font-mono text-sm text-[#00F0FF]">UNDER_CONSTRUCTION</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 font-light mb-4 leading-relaxed">
            该区域正在进行系统升级和内容填充
          </p>
          <p className="text-gray-600 font-mono text-sm mb-12">
            // 正在构建数字宇宙的更多维度...
          </p>

          {/* Terminal-style info */}
          <div className="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm text-left mb-12 max-w-md mx-auto">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="space-y-2 text-gray-500">
              <p><span className="text-[#00F0FF]">&gt;</span> status: 模块开发中</p>
              <p><span className="text-[#00F0FF]">&gt;</span> progress: ████████░░ 80%</p>
              <p><span className="text-[#00F0FF]">&gt;</span> eta: 待定</p>
            </div>
          </div>

          {/* Back button */}
          <Link
            href="/home"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold hover:bg-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <ArrowLeft size={20} />
            返回首页
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 font-mono text-xs text-gray-600 bg-[#080808]">
        <p className="flex items-center justify-center gap-2">
          © 2024 YORIK CREATIVE LAB. <span className="w-2 h-2 rounded-full bg-[#8BFFB7] animate-pulse"></span> ALL SYSTEMS NOMINAL.
        </p>
      </footer>
    </div>
  );
}
