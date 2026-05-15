"use client";

import { Sprout } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const navLinks = [
    { href: "/works", label: "WORKS", color: "hover:text-[#00F0FF]", shadow: "hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" },
    { href: "/systems", label: "SYSTEMS", color: "hover:text-[#7C5CFF]", shadow: "hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.5)]" },
    { href: "/fragments", label: "FRAGMENTS", color: "hover:text-[#8BFFB7]", shadow: "hover:drop-shadow-[0_0_8px_rgba(139,255,183,0.5)]" },
    { href: "/contact", label: "TERMINAL", color: "hover:text-[#FF5E7E]", shadow: "hover:drop-shadow-[0_0_8px_rgba(255,94,126,0.5)]" },
  ];

  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 backdrop-blur-md border-b border-white/5 bg-[#0D0D0D]/70">
      <Link href="/" className="flex items-center gap-2 text-white font-bold tracking-[0.2em] cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
        <Sprout size={24} className="text-[#8BFFB7]" />
        <span>YORIK HU</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-mono tracking-wider text-gray-500">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${link.color} ${link.shadow} transition-all`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
