import React, { useState, useEffect, memo } from 'react';

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  return prefersReducedMotion;
};

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
    top: 0,
    left: 0,
    transform: `translate3d(${mousePos.x - 400}px, ${mousePos.y - 400}px, 0)`,
    width: '800px',
    height: '800px',
    background:
      'radial-gradient(40% 40% at 50% 50%, hsl(var(--accent-primary) / 0.10) 0%, transparent 60%)',
    pointerEvents: 'none',
    zIndex: 20,
    transition: 'opacity 0.2s ease-out',
    willChange: 'transform, opacity',
    opacity: mousePos.x > -1000 ? 0.6 : 0,
    mixBlendMode: 'plus-lighter',
  };

  return <div style={glowStyle} />;
};

export default memo(InteractiveGlow);
