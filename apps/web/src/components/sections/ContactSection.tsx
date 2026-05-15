"use client";

import { useState, useEffect } from "react";

export function ContactSection() {
  const [terminalText, setTerminalText] = useState('');
  const [terminalOffset, setTerminalOffset] = useState({ x: 0, y: 0 });
  const [isHoveringTerminal, setIsHoveringTerminal] = useState(false);
  const fullText = '> connect yorik\n> initiating protocol...\n> verifying credentials...\n> connection established.\n> _';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  const contactLinks = ['WeChat', 'Email', 'Github', 'Twitter'];

  return (
    <section id="contact" className="py-32 px-6 md:px-20 border-t border-white/5 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-glitch-hover inline-block">
        CONTACT<br/><span className="text-gray-600">TERMINAL.</span>
      </h2>

      <div
        className="w-full bg-[#050505] border border-white/10 rounded shadow-2xl p-6 md:p-10 font-mono relative transition-all duration-300 ease-out"
        style={{
          transform: isHoveringTerminal
            ? `translate(${terminalOffset.x}px, ${terminalOffset.y}px)`
            : 'translate(0px, 0px)',
          boxShadow: isHoveringTerminal
            ? '0 20px 40px -10px rgba(0,240,255,0.15)'
            : 'none',
          borderColor: isHoveringTerminal
            ? 'rgba(0, 240, 255, 0.3)'
            : 'rgba(255, 255, 255, 0.1)'
        }}
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          setTerminalOffset({ x: x * 0.025, y: y * 0.025 });
        }}
        onMouseEnter={() => setIsHoveringTerminal(true)}
        onMouseLeave={() => {
          setIsHoveringTerminal(false);
          setTerminalOffset({ x: 0, y: 0 });
        }}
      >
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[#00F0FF] whitespace-pre-line leading-relaxed min-h-[140px] text-sm md:text-base">
          {terminalText}
          <span className="inline-block w-2 h-5 bg-[#00F0FF] ml-1 align-middle animate-pulse"></span>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 md:gap-6">
          {contactLinks.map((link) => (
            <button
              key={link}
              className="text-gray-500 hover:text-[#8BFFB7] hover:bg-[#8BFFB7]/10 px-4 py-2 rounded transition-all flex items-center gap-2"
            >
              <span className="opacity-50">&gt;</span> {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
