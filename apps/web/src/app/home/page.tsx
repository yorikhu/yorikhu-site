"use client";

import { useEffect } from "react";
import { HeroSection } from "@/app/home/components/HeroSection";
import { WorksSection } from "@/app/home/components/WorksSection";
import { TechStackSection } from "@/app/home/components/TechStackSection";
import { FragmentsSection } from "@/app/home/components/FragmentsSection";
import { AboutSection } from "@/app/home/components/AboutSection";
import { ContactSection } from "@/app/home/components/ContactSection";
import { Footer } from "@/app/home/components/Footer";

export default function HomePage() {
  useEffect(() => {
    // 调用 health 接口检查服务状态
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Health check:", data);
      })
      .catch((err) => {
        console.warn("API health check failed:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 font-sans selection:bg-[#7C5CFF] selection:text-white relative overflow-hidden crt-overlay">
      <HeroSection />
      <WorksSection />
      <TechStackSection />
      <AboutSection />
      <FragmentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
