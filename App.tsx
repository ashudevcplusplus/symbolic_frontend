import React, { useEffect, Suspense, lazy } from 'react';
const Starfield = lazy(() => import('./components/Starfield'));
const InteractiveGlow = lazy(() => import('./components/InteractiveGlow'));
import LongLandingPage from './pages/LongLandingPage';

const GrainEffect: React.FC = () => (
  <div
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] opacity-[0.015]"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')`,
    }}
  />
);

const App: React.FC = () => {
  useEffect(() => {
    let ticking = false;
    const update = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--scroll-y');
    };
  }, []);

  return (
    <div className="antialiased font-sans overflow-x-hidden">
      <GrainEffect />
      <Suspense fallback={null}>
        <Starfield />
      </Suspense>
      <Suspense fallback={null}>
        <InteractiveGlow />
      </Suspense>
      <div className="relative z-10">
        <LongLandingPage />
      </div>
    </div>
  );
};

export default App;
