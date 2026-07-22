"use client";

import { Github, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 text-center border-t border-white/5 font-mono text-xs text-gray-600 bg-[#080808]">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <a
          href="https://github.com/yorikhu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-[#8BFFB7] transition-colors"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:hi@yorikhu.com"
          className="flex items-center gap-2 text-gray-500 hover:text-[#00F0FF] transition-colors"
        >
          <Mail size={18} />
          <span>Email</span>
        </a>
        <a
          href="/resume"
          className="flex items-center gap-2 text-gray-500 hover:text-[#7C5CFF] transition-colors"
        >
          <FileText size={18} />
          <span>Resume</span>
        </a>
      </div>

      {/* Footer info */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#8BFFB7] animate-pulse"></span>
          ALL SYSTEMS NOMINAL.
        </span>
        <span>© 2024 YORIK HU.</span>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors whitespace-nowrap"
        >
          浙ICP备2026035672号-1
        </a>
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=33010202005760"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition-colors whitespace-nowrap inline-flex items-center gap-1"
        >
          <img src="/images/beian.png" alt="公安备案" className="w-3 h-3" />
          浙公网安备33010202005760号
        </a>
      </div>
    </footer>
  );
}
