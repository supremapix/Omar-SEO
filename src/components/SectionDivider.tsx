import React from 'react';

interface SectionDividerProps {
  color?: 'blue' | 'cyan' | 'purple' | 'amber' | 'emerald';
}

export function SectionDivider({ color = 'blue' }: SectionDividerProps) {
  const gradientMap = {
    blue: 'from-blue-600 via-cyan-400 to-indigo-600',
    cyan: 'from-cyan-500 via-blue-400 to-teal-400',
    purple: 'from-purple-600 via-pink-500 to-indigo-500',
    amber: 'from-amber-500 via-yellow-400 to-amber-600',
    emerald: 'from-emerald-500 via-teal-400 to-green-500',
  };

  const glowMap = {
    blue: 'shadow-[0_0_15px_rgba(59,130,246,0.8)]',
    cyan: 'shadow-[0_0_15px_rgba(34,211,238,0.8)]',
    purple: 'shadow-[0_0_15px_rgba(168,85,247,0.8)]',
    amber: 'shadow-[0_0_15px_rgba(245,158,11,0.8)]',
    emerald: 'shadow-[0_0_15px_rgba(16,185,129,0.8)]',
  };

  return (
    <div className="relative my-12 sm:my-16 w-full max-w-7xl mx-auto px-4 overflow-hidden select-none">
      {/* Background Dim Line */}
      <div className="w-full h-[1px] bg-slate-800/80 relative">
        {/* Moving Neon Light Beam */}
        <div
          className={`absolute top-0 left-0 w-1/3 sm:w-1/4 h-[2px] bg-gradient-to-r ${gradientMap[color]} ${glowMap[color]} animate-neon-sweep rounded-full`}
        />
      </div>

      {/* Central Diamond Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping opacity-75" />
        <div className="w-2.5 h-2.5 rotate-45 border border-cyan-400/80 bg-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping opacity-75" />
      </div>
    </div>
  );
}
