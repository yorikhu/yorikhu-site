"use client";

import { ImageIcon } from "lucide-react";
import Image from "next/image";

interface WorkItem {
  title: string;
  tag: string;
  color: string;
  height: string;
  img: string;
}

const works: WorkItem[] = [
  { title: '数字摄影 01', tag: 'Photography', color: 'border-[#7C5CFF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop' },
  { title: '光影实验', tag: 'Photography', color: 'border-[#00F0FF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' },
  { title: '数字画廊', tag: 'WebGL', color: 'border-[#8BFFB7]', height: 'h-80', img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop' },
  { title: '品牌视觉重构', tag: 'UI / UX', color: 'border-[#FF5E7E]', height: 'h-80', img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop' },
  { title: '动效实验 04', tag: 'Framer Motion', color: 'border-[#7C5CFF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop' },
  { title: '智能生成组件', tag: 'Agent', color: 'border-gray-500', height: 'h-80', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop' },
];

export function WorksSection() {
  return (
    <section id="works" className="py-32 px-6 md:px-20 border-t border-white/5 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-glitch-hover inline-block">
        SELECTED<br/><span className="text-gray-600">WORKS.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, i) => (
          <div
            key={i}
            className={`group border border-white/10 bg-white/5 relative flex flex-col justify-end transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] ${work.height} hover:${work.color} hover:border`}
          >
            {work.img ? (
              <Image
                src={work.img}
                alt={work.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-colors"></div>
            )}
            <div className="absolute top-4 right-4 text-white/20 group-hover:text-white/80 z-10 transition-colors">
              <ImageIcon size={24} />
            </div>
            <div className="p-6 z-10 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-mono text-xs mb-2 text-gray-500 group-hover:text-[#00F0FF] transition-colors">{work.tag}</p>
              <h3 className="text-xl font-bold text-white">{work.title}</h3>
              <div className="w-0 h-[2px] bg-white mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
