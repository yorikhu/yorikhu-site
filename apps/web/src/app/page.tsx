import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { SystemsSection } from "@/components/sections/SystemsSection";
import { FragmentsSection } from "@/components/sections/FragmentsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 font-sans selection:bg-[#7C5CFF] selection:text-white relative overflow-hidden crt-overlay">
      <Navigation />
      <HeroSection />
      <WorksSection />
      <SystemsSection />
      <FragmentsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
