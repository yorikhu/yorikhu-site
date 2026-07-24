"use client";

import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, Sprout } from "lucide-react";
import Link from "next/link";

const ENTITY_IMAGE_URL = "/images/eldra_coding.gif";

export function HeroSection() {
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload image on mount
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log("Entity image loaded successfully");
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load entity image");
      setImageError(true);
    };
    img.src = ENTITY_IMAGE_URL;
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C5CFF]/10 via-transparent to-transparent opacity-50 blur-3xl"></div>

      <div className="w-full max-w-[2400px] flex flex-col md:flex-row items-center justify-center gap-[clamp(2rem,10vmin,16rem)] z-10">
        {/* Left side - Text content */}
        <div className="w-full md:w-auto z-10 space-y-[clamp(1rem,3vmin,3rem)]">
          <div className="inline-block px-[clamp(0.75rem,1.5vmin,1.5rem)] py-[clamp(0.25rem,0.5vmin,0.5rem)] border border-[#7C5CFF]/30 text-[#7C5CFF] text-[clamp(0.75rem,1.5vmin,1.25rem)] font-mono rounded-full mb-2 animate-pulse">
            STATUS: ONLINE // VERSION 2.0
          </div>
          <h1 className="text-[clamp(3.5rem,12vmin,18rem)] font-bold text-white leading-none glow-text tracking-tighter flex flex-col gap-[clamp(0.5rem,2vmin,3rem)]">
            <span className="text-glitch-hover cursor-default">TECH</span>
            <span className="flex items-center gap-[clamp(1rem,3vmin,4rem)] pl-[clamp(1rem,4vmin,6rem)] text-glitch-hover cursor-default">
              <span className="text-gray-700 font-light">×</span> ART
            </span>
            <span className="flex items-center gap-[clamp(1rem,3vmin,4rem)] pl-[clamp(2rem,8vmin,12rem)] text-[#7C5CFF] text-glitch-hover cursor-default">
              <span className="text-gray-700 font-light">×</span> ALIVE
            </span>
          </h1>
          <div className="space-y-[clamp(1rem,2vmin,2rem)] text-[clamp(1.125rem,2.2vmin,2.5rem)] text-gray-400 max-w-[clamp(30rem,50vmin,65rem)] font-light leading-relaxed">
            <p
              className="flex items-center gap-4 cursor-crosshair group/name whitespace-nowrap"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
            >
              <span className="text-white font-medium group-hover/name:text-[#00F0FF] transition-colors duration-300">我是 攸悠</span>
              <span className={`inline-flex items-center justify-center w-[130px] px-4 py-1 border rounded-sm text-[0.7em] font-mono tracking-widest transition-all duration-300 relative overflow-hidden whitespace-nowrap ${
                isHoveringName
                  ? 'border-[#FF5E7E]/60 bg-[#FF5E7E]/10 text-white shadow-[0_0_15px_rgba(255,94,126,0.4)] scale-105'
                  : 'border-[#8BFFB7]/30 bg-[#8BFFB7]/10 text-[#8BFFB7]'
              }`}>
                {isHoveringName && <span className="absolute inset-0 bg-[#FF5E7E]/20 animate-pulse"></span>}
                <span className={isHoveringName ? 'inline-block animate-[text-glitch_0.15s_linear_infinite]' : ''}>
                  {isHoveringName ? '胡永琪' : 'YORIK HU'}
                </span>
              </span>
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[#00F0FF] font-medium">Web 全栈开发者</span>
              <span className="text-gray-600">/</span>
              <span className="text-white">H5 页面开发</span>
              <span className="text-gray-600">/</span>
              <span className="text-white">小程序开发</span>
            </div>
            <p className="text-gray-500">
              专注 Web 全栈开发<br/>
              以前端为支点，向后延伸全链路能力<br/>
              现代框架 · 工程化 · 性能优化
            </p>
          </div>
          <div className="pt-[clamp(1rem,3vmin,4rem)]">
            <Link href="/maintenance" className="group inline-flex items-center gap-3 bg-white text-black px-[clamp(1.5rem,3vmin,4rem)] py-[clamp(1rem,2vmin,2.5rem)] font-bold text-[clamp(1rem,1.8vmin,2rem)] hover:bg-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              EXPLORE UNIVERSE <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right side - Visual placeholder */}
        <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center relative">
          <div className="w-[clamp(20rem,35vmin,50rem)] h-[clamp(20rem,35vmin,50rem)] border border-white/10 relative group glitch-hover flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8BFFB7 1px, transparent 1px)', backgroundSize: 'clamp(20px, 3vmin, 32px) clamp(20px, 3vmin, 32px)' }}></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C5CFF] to-transparent opacity-50"></div>

            {/* Entity Image - shown when loaded */}
            {!imageError && (
              <img
                src={ENTITY_IMAGE_URL}
                alt="Yorik Entity 01"
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain z-20 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            )}

            {/* Placeholder content - shown until image loads */}
            <div className={`text-center z-10 animate-float transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
              <Sprout className="text-[#8BFFB7] mx-auto mb-[clamp(1rem,3vmin,2rem)] drop-shadow-[0_0_15px_rgba(139,255,183,0.6)] w-[clamp(4rem,10vmin,12rem)] h-[clamp(4rem,10vmin,12rem)]" />
              <p className="font-mono text-[clamp(0.875rem,1.8vmin,2rem)] text-[#00F0FF]">YORIK_ENTITY_01</p>
              <p className="text-[clamp(0.75rem,1.5vmin,1.5rem)] text-gray-600 mt-2 font-mono blink">Awaiting Instructions...</p>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-[clamp(0.5rem,1.5vmin,1.5rem)] h-[clamp(0.5rem,1.5vmin,1.5rem)] border-t border-l border-[#7C5CFF]"></div>
            <div className="absolute bottom-4 right-4 w-[clamp(0.5rem,1.5vmin,1.5rem)] h-[clamp(0.5rem,1.5vmin,1.5rem)] border-b border-r border-[#7C5CFF]"></div>

            {/* Private Assistant Label - shown after image loads */}
            {imageLoaded && (
              <div className="absolute top-4 right-4 z-30">
                <span className="px-3 py-1 bg-[#7C5CFF]/60 border border-[#7C5CFF]/80 text-white font-mono text-[clamp(0.65rem,1.2vmin,0.875rem)] rounded backdrop-blur-md">
                  PRIVATE ASSISTANT
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex justify-center mt-[clamp(2rem,6vmin,10rem)] z-20">
        <div
          className="animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="text-white/60 hover:text-white w-[clamp(2rem,4vmin,5rem)] h-[clamp(2rem,4vmin,5rem)]" />
        </div>
      </div>
    </section>
  );
}
