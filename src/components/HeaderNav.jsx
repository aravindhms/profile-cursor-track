import React from 'react';
import { Target, Compass, Mail } from 'lucide-react';

export default function HeaderNav({ activeTab, onTabClick }) {
  const navItems = [
    { id: 'work', label: 'STAR STORIES', icon: Target },
    { id: 'about', label: 'CAREER ARC', icon: Compass },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <header className="fixed top-6 sm:top-8 left-0 right-0 z-40 flex justify-center items-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/20 shadow-glass transition-all duration-300 hover:border-white/35 hover:bg-white/[0.12]">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabClick(item.id)}
              className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'text-neutral-900 bg-white shadow-glow scale-[1.02]'
                  : 'text-white/85 hover:text-white hover:bg-white/10 active:scale-95'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-[-6deg]' : ''}`} />
              <span>[{item.label}]</span>
              {isActive && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
