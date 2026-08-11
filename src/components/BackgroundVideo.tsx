import React from 'react';

interface BackgroundVideoProps {
  src: string;
  opacity?: number;
  overlayClassName?: string;
  className?: string;
}

export function BackgroundVideo({
  src,
  opacity = 0.25,
  overlayClassName = 'bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90',
  className = '',
}: BackgroundVideoProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
