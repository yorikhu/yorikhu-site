"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const CONTACT_INFO = {
  WeChat: { value: 'yorikhu', link: null },
  Email: { value: 'yorikhu@gmail.com', link: `mailto:yorikhu@gmail.com` },
  Github: { value: 'https://github.com/yorikhu', link: 'https://github.com/yorikhu' },
  X: { value: '@yorikhu', link: 'https://x.com/yorikhu' }
};

export function ContactSection() {
  const [terminalText, setTerminalText] = useState('');
  const [terminalOffset, setTerminalOffset] = useState({ x: 0, y: 0 });
  const [isHoveringTerminal, setIsHoveringTerminal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fullText = '> connect yorikhu\n> initiating protocol...\n> verifying credentials...\n> connection established.\n> _';

  // Reset terminal when no contact is selected
  useEffect(() => {
    if (selectedContact === null) {
      let i = 0;
      const typing = setInterval(() => {
        setTerminalText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(typing);
      }, 80);
      return () => clearInterval(typing);
    }
  }, [selectedContact]);

  // Handle typing animation for contact info
  const typeContactInfo = (contact: string) => {
    setSelectedContact(contact);
    setCopiedContact(null);
    setIsTyping(true);
    setTerminalText('');

    const commandText = `> ${contact.toLowerCase()}\n`;
    const resultText = `${contact} Account: ${CONTACT_INFO[contact as keyof typeof CONTACT_INFO].value}\n`;
    const fullContactText = commandText + resultText;

    let i = 0;
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    const typeChar = () => {
      if (i < fullContactText.length) {
        setTerminalText(fullContactText.slice(0, i));
        i++;
        typingTimeoutRef.current = setTimeout(typeChar, 50);
      } else {
        setIsTyping(false);
      }
    };

    typeChar();
  };

  const handleCopy = async (contact: string) => {
    const info = CONTACT_INFO[contact as keyof typeof CONTACT_INFO].value;

    // Fallback for environments where navigator.clipboard is unavailable
    if (!navigator.clipboard) {
      const textArea = document.createElement('textarea');
      textArea.value = info;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedContact(contact);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      document.body.removeChild(textArea);
    } else {
      try {
        await navigator.clipboard.writeText(info);
        setCopiedContact(contact);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }

    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => {
      setCopiedContact(null);
    }, 2000);
  };

  const handleContactClick = (contact: string) => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typeContactInfo(contact);
  };

  const contactLinks = ['WeChat', 'Email', 'Github', 'X'];

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
        <div className="text-[#00F0FF] whitespace-pre-wrap leading-relaxed min-h-[140px] text-sm md:text-base overflow-visible">
          <span className="inline">
            {terminalText}
            {(!selectedContact || isTyping) && (
              <span className="inline-block w-2 h-5 bg-[#00F0FF] ml-1 align-middle animate-pulse"></span>
            )}
          </span>
          {selectedContact && !isTyping && (
            <>
              <button
                onClick={() => handleCopy(selectedContact)}
                className="inline-flex items-center gap-1 ml-2 text-gray-400 hover:text-[#8BFFB7] transition-colors align-middle shrink-0"
                title="Copy to clipboard"
              >
                {copiedContact === selectedContact ? (
                  <Check size={16} className="text-[#8BFFB7]" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
              {CONTACT_INFO[selectedContact as keyof typeof CONTACT_INFO].link && (
                <a
                  href={CONTACT_INFO[selectedContact as keyof typeof CONTACT_INFO].link || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 ml-2 text-gray-400 hover:text-[#00F0FF] transition-colors align-middle shrink-0"
                  title="Open link"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 md:gap-6">
          {contactLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleContactClick(link)}
              className={`text-gray-500 px-4 py-2 rounded transition-all flex items-center gap-2 ${
                selectedContact === link
                  ? 'text-[#00F0FF] bg-[#00F0FF]/10'
                  : 'hover:text-[#8BFFB7] hover:bg-[#8BFFB7]/10'
              }`}
            >
              <span className="opacity-50">&gt;</span> {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
