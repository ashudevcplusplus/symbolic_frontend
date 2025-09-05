import React, { useMemo, useState, useEffect, memo } from 'react';

type CelestialObject = {
  id: string;
  style: React.CSSProperties;
};

const Starfield: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isIgnited, setIsIgnited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsIgnited(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const celestialObjects = useMemo(() => {
    const objects = {
      nearStars: [] as CelestialObject[],
      midStars: [] as CelestialObject[],
      farStars: [] as CelestialObject[],
      shootingStars: [] as CelestialObject[],
      asteroids: [] as CelestialObject[],
    };
    const nearStarCount = 20;
    const midStarCount = 40;
    const farStarCount = 80;
    const shootingStarCount = 5;
    const asteroidCount = 8;

    for (let i = 0; i < nearStarCount; i++) {
      objects.nearStars.push({
        id: `near-star-${i}`,
        style: {
          width: `${Math.random() * 2 + 1.5}px`,
          height: `${Math.random() * 2 + 1.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
      });
    }

    for (let i = 0; i < midStarCount; i++) {
      objects.midStars.push({
        id: `mid-star-${i}`,
        style: {
          width: `${Math.random() * 1.5 + 1}px`,
          height: `${Math.random() * 1.5 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
      });
    }

    for (let i = 0; i < farStarCount; i++) {
      objects.farStars.push({
        id: `far-star-${i}`,
        style: {
          width: `${Math.random() * 1 + 0.5}px`,
          height: `${Math.random() * 1 + 0.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
      });
    }

    for (let i = 0; i < shootingStarCount; i++) {
      const direction = Math.floor(Math.random() * 4);
      let top, left, angle;
      switch (direction) {
        case 0:
          top = `-5%`;
          left = `${Math.random() * 100}%`;
          angle = Math.random() * 90 + 225;
          break;
        case 1:
          top = `${Math.random() * 100}%`;
          left = `105%`;
          angle = Math.random() * 90 + 135;
          break;
        case 2:
          top = `105%`;
          left = `${Math.random() * 100}%`;
          angle = Math.random() * 90 + 45;
          break;
        case 3:
        default:
          top = `${Math.random() * 100}%`;
          left = `-5%`;
          angle = Math.random() * 90 - 45;
          break;
      }
      objects.shootingStars.push({
        id: `shooting-${i}`,
        style: {
          top,
          left,
          '--angle': `${angle}deg`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          animationDelay: `${Math.random() * 10 + 2}s`,
        },
      });
    }

    for (let i = 0; i < asteroidCount; i++) {
      const size = Math.random() * 8 + 4;
      objects.asteroids.push({
        id: `asteroid-${i}`,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          borderRadius: `${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% / ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}%`,
          animationDuration: `${Math.random() * 30 + 20}s`,
          animationDelay: `${Math.random() * 10}s`,
          animationDirection:
            Math.random() > 0.5 ? 'alternate' : 'alternate-reverse',
        },
      });
    }

    return objects;
  }, []);

  const parallaxStyle: React.CSSProperties = {
    transformStyle: 'preserve-3d',
    transform: `scale(${!prefersReducedMotion && isIgnited ? 1 : 0.2}) translateZ(calc(var(--scroll-y, 0) * ${prefersReducedMotion ? 0 : 0.7}px))`,
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ perspective: '300px' }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-[1200ms] ease-orbital"
          style={parallaxStyle}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                'radial-gradient(ellipse at center, hsl(var(--accent-primary)/.10) 0%, transparent 70%)',
              mixBlendMode: 'plus-lighter',
              transform: 'translateZ(-600px) scale(5)',
            }}
          />

          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: 'translateZ(-400px) scale(3)' }}
          >
            {celestialObjects.farStars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  ...star.style,
                  backgroundColor:
                    'var(--star-secondary, rgba(245,243,255,0.70))',
                }}
              />
            ))}
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: 'translateZ(-250px) scale(2)' }}
          >
            {celestialObjects.midStars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  ...star.style,
                  backgroundColor: 'var(--star-accent, rgba(224,242,254,0.90))',
                }}
              />
            ))}
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: 'translateZ(0px) scale(1)' }}
          >
            {celestialObjects.nearStars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  ...star.style,
                  backgroundColor: 'var(--star-primary, rgba(207,250,254,1))',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {!prefersReducedMotion && (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {celestialObjects.shootingStars.map((star) => (
            <div
              key={star.id}
              className="absolute h-[1px] w-40 animate-shooting-star"
              style={{
                ...star.style,
                background:
                  'linear-gradient(to right, var(--star-primary, rgba(207,250,254,0.4)), transparent)',
              }}
            />
          ))}
          {celestialObjects.asteroids.map((asteroid) => (
            <div
              key={asteroid.id}
              className="absolute bg-slate-700/50 animate-asteroid-drift"
              style={asteroid.style}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default memo(Starfield);
