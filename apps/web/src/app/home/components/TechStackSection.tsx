"use client";

import { Code2, Database, Layout, Smartphone, Server, Wrench, Cpu } from "lucide-react";

interface TechStack {
  category: string;
  icon: typeof Code2;
  skills: string[];
  color: string;
  glowColor: string;
}

const techStacks: TechStack[] = [
  {
    category: "前端框架",
    icon: Layout,
    skills: ["React", "Next.js", "Vue 3", "Nuxt.js", "TypeScript"],
    color: "#7C5CFF",
    glowColor: "rgba(124, 92, 255, 0.2)",
  },
  {
    category: "小程序 / H5",
    icon: Smartphone,
    skills: ["微信小程序", "支付宝小程序", "UniApp", "H5 响应式", "PWA"],
    color: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.2)",
  },
  {
    category: "后端技术",
    icon: Server,
    skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "Redis"],
    color: "#8BFFB7",
    glowColor: "rgba(139, 255, 183, 0.2)",
  },
  {
    category: "工程化工具",
    icon: Wrench,
    skills: ["Git", "Webpack", "Vite", "Docker", "CI/CD"],
    color: "#FF5E7E",
    glowColor: "rgba(255, 94, 126, 0.2)",
  },
];

export function TechStackSection() {
  return (
    <section id="stack" className="py-32 px-6 md:px-20 border-t border-white/5 relative bg-[#080808] overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C5CFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 w-full">
        {/* Title */}
        <div className="flex items-center gap-4 mb-16">
          <Cpu className="text-[#7C5CFF] animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold text-white text-glitch-hover">
            TECH<span className="text-[#7C5CFF]">.</span>STACK
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {techStacks.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <div
                key={index}
                className="group relative min-h-[220px]"
              >
                {/* Glowing border effect */}
                <div
                  className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ backgroundColor: stack.glowColor }}
                ></div>

                {/* Card */}
                <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white/[0.09] hover:to-white/[0.03] transition-all duration-500 group-hover:-translate-y-1">
                  {/* Icon and category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="relative p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${stack.color}20, ${stack.color}08)`,
                        border: `1px solid ${stack.color}30`,
                      }}
                    >
                      <Icon
                        size={28}
                        style={{ color: stack.color }}
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {stack.category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="relative group/skill"
                      >
                        <div
                          className="absolute -inset-[1px] rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-sm"
                          style={{ backgroundColor: stack.glowColor }}
                        ></div>
                        <span
                          className="relative px-3 py-1.5 text-sm font-mono text-gray-400 bg-black/60 border border-white/10 rounded-full hover:border-white/30 hover:text-gray-200 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-tr-xl opacity-30"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${stack.color}15 50%)`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#7C5CFF]/10 via-[#00F0FF]/10 to-[#8BFFB7]/10 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <span className="text-white font-medium">技术选型原则：</span>
            <span className="text-sm">根据项目需求灵活选择</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm">注重代码质量与开发效率</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm">追求最佳用户体验</span>
          </div>
        </div>
      </div>
    </section>
  );
}
