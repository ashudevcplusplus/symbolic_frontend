import React, { useState, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const InteractiveGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const rafId = useRef<number | null>(null);
  const lastPos = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      lastPos.current = { x: event.clientX, y: event.clientY };
      if (rafId.current == null) {
        rafId.current = requestAnimationFrame(() => {
          setMousePos(lastPos.current);
          rafId.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current != null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  const glowStyle: React.CSSProperties = {
    position: 'fixed',
    top: mousePos.y,
    left: mousePos.x,
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background:
      'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0) 50%)',
    pointerEvents: 'none',
    zIndex: 20,
    transition: 'opacity 0.2s ease-out',
    opacity: mousePos.x > -1000 ? 1 : 0,
  };

  return <div style={glowStyle} />;
};

export default InteractiveGlow;
