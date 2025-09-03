import React, { useEffect } from 'react';
import Starfield from './components/Starfield';
import InteractiveGlow from './components/InteractiveGlow';
import LongLandingPage from './pages/LongLandingPage';

const GrainEffect: React.FC = () => (
  <div
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] opacity-[0.015]"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')`
    }}
  />
);

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial value on load
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.documentElement.style.removeProperty('--scroll-y');
    }
  }, []);

  return (
    <div className="antialiased font-sans overflow-x-hidden">
      <GrainEffect />
      <Starfield />
      <InteractiveGlow />
      <div className="relative z-10">
        <LongLandingPage />
      </div>
    </div>
  );
};

export default App;