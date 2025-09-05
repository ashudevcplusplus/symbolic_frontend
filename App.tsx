import React, { useEffect, Suspense, lazy } from 'react';

// Lazy load heavy visual components
const Starfield = lazy(() => import('./components/Starfield'));
const InteractiveGlow = lazy(() => import('./components/InteractiveGlow'));
const LongLandingPage = lazy(() => import('./pages/LongLandingPage'));

const GrainEffect: React.FC = () => (
  <div
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    style={{
      opacity: 'var(--grain-opacity)',
      backgroundImage: `url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\"/></svg>')`,
    }}
  />
);

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}`
      );
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial value on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--scroll-y');
    };
  }, []);

  return (
    <div className="antialiased font-sans overflow-x-hidden">
      <GrainEffect />
      <Suspense
        fallback={
          <div className="fixed inset-0 bg-surface-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
          </div>
        }
      >
        <Starfield />
      </Suspense>
      <Suspense fallback={null}>
        <InteractiveGlow />
      </Suspense>
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
            </div>
          }
        >
          <LongLandingPage />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
