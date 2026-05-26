export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 font-mono text-xs text-gray-600 bg-[#080808]">
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
      </div>
    </footer>
  );
}
