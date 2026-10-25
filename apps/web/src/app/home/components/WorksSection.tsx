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
  { title: '企业级管理系统', tag: 'React + NestJS', color: 'border-[#7C5CFF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
  { title: '电商小程序', tag: '微信小程序', color: 'border-[#00F0FF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop' },
  { title: 'H5 营销活动页', tag: 'Vue + Vite', color: 'border-[#8BFFB7]', height: 'h-80', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  { title: 'SaaS 产品官网', tag: 'Next.js', color: 'border-[#FF5E7E]', height: 'h-80', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop' },
  { title: '数据可视化平台', tag: 'Vue3 + ECharts', color: 'border-[#7C5CFF]', height: 'h-80', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
  { title: 'API 服务网关', tag: 'Node.js + Docker', color: 'border-gray-500', height: 'h-80', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop' },
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
