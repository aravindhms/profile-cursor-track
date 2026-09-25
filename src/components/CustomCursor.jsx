import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable if pointer device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button'
      );
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth RAF loop for the trailing magnetic ring
    let animationFrameId;
    const animate = () => {
      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Center glowing precision dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white transition-opacity duration-200 pointer-events-none ${
          isHovered ? 'scale-0 opacity-0' : 'opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.9)]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing glowing magnetic ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-white pointer-events-none transition-[width,height,background-color,border-color,opacity] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? '-ml-6 -mt-6 w-12 h-12 bg-white/20 border-white/80 backdrop-blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.4)]'
            : isClicking
            ? '-ml-3 -mt-3 w-6 h-6 bg-white/40 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]'
            : '-ml-4 -mt-4 w-8 h-8 bg-transparent border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.2)]'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
