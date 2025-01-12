import React, { useEffect, useState } from 'react';

export default function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      
      setPosition({ 
        x: e.clientX + scrollX,
        y: e.clientY + scrollY
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-blue-500/30 blur-xl transition-transform duration-200 ease-out"
      style={{ 
        position: 'absolute',
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}