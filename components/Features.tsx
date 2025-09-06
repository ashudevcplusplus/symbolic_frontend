import React, { useState, useRef } from 'react';
import { FeatureIcon1 } from './icons/FeatureIcon1';
import { FeatureIcon2 } from './icons/FeatureIcon2';
import { FeatureIcon3 } from './icons/FeatureIcon3';

// Type definitions for better type safety
type FeatureId = 1 | 2 | 3;

interface Feature {
  id: FeatureId;
  IconComponent: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  position: { top: string; left: string };
  depth: number;
}

const features: Feature[] = [
  {
    id: 1 as FeatureId,
    IconComponent: FeatureIcon1,
    title: 'Contract-Based Communication',
    description:
      'Replace ambiguous natural language with typed, executable contracts. Eliminate instruction variance and ensure deterministic I/O across all AI interactions.',
    position: { top: '10%', left: '20%' },
    depth: 0.8, // Closest
  },
  {
    id: 2 as FeatureId,
    IconComponent: FeatureIcon2,
    title: 'Intelligent Cost Control',
    description:
      'Set per-step budgets, attribute costs to specific outcomes, and route requests based on intent and targets. Control spending without sacrificing quality.',
    position: { top: '50%', left: '75%' },
    depth: 0.4, // Farthest
  },
  {
    id: 3 as FeatureId,
    IconComponent: FeatureIcon3,
    title: 'Proven Determinism',
    description:
      'Continuous evaluation against golden sets, scenario matrices, and pass@1 metrics. Stop regressions before they ship in high-stakes environments.',
    position: { top: '70%', left: '15%' },
    depth: 0.6, // Middle
  },
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  const [hoveredFeature, setHoveredFeature] = useState<FeatureId | null>(null);

  const featureRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);

  const getCoordinates = (index: number) => {
    const el = featureRefs.current[index];
    if (!el) return null;
    return {
      x: el.offsetLeft + el.offsetWidth / 2,
      y: el.offsetTop + el.offsetHeight / 2,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    featureRefs.current.forEach((el, index) => {
      if (el) {
        const feature = features[index];
        const sensitivity = 30; // Control movement intensity
        const translateX = (x / rect.width) * sensitivity * feature.depth;
        const translateY = (y / rect.height) * sensitivity * feature.depth;
        el.style.transform = `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    featureRefs.current.forEach((el) => {
      if (el) {
        el.style.transform = `translate(-50%, -50%)`;
      }
    });
  };

  const p1 = getCoordinates(0);
  const p2 = getCoordinates(1);
  const p3 = getCoordinates(2);

  return (
    <section
      id="features"
      className="py-26 bg-surface-0/80 backdrop-blur-sm scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            The Precision Layer for Mission-Critical AI
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Language is fuzzy; contracts are precise. Built for teams that demand determinism, 
            auditability, and cost discipline.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Details Panel */}
          <div className="bg-surface-1-augmented p-8 rounded-2xl min-h-[24rem] flex flex-col justify-center lg:order-1">
            {activeFeature && (
              <div key={activeFeature.id} className="animate-fade-in-up">
                <div className="mb-4 inline-block p-3 bg-accent-primary/20 rounded-lg">
                  <activeFeature.IconComponent className="h-10 w-10 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-text-primary mb-3">
                  {activeFeature.title}
                </h3>
                <p className="text-text-secondary font-light text-pretty">
                  {activeFeature.description}
                </p>
              </div>
            )}
          </div>
          {/* Constellation Map */}
          <div
            ref={mapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-2 h-[32rem] relative motion-safe:transform-gpu lg:order-2"
            style={{ perspective: '1000px' }}
          >
            <svg className="absolute top-0 left-0 w-full h-full" fill="none">
              <defs>
                <linearGradient
                  id="line-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--brand-primary))"
                    stopOpacity="0"
                  />
                  <stop offset="50%" stopColor="hsl(var(--brand-primary))" />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--brand-primary))"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              {p1 && p2 && (
                <line
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  strokeDasharray="5"
                  className={`transition-all duration-400 ${activeFeature ? 'opacity-30' : 'opacity-0'}`}
                />
              )}
              {p2 && p3 && (
                <line
                  x1={p2.x}
                  y1={p2.y}
                  x2={p3.x}
                  y2={p3.y}
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  strokeDasharray="5"
                  className={`transition-all duration-400 ${activeFeature ? 'opacity-30' : 'opacity-0'}`}
                />
              )}
              {p3 && p1 && (
                <line
                  x1={p3.x}
                  y1={p3.y}
                  x2={p1.x}
                  y2={p1.y}
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  strokeDasharray="5"
                  className={`transition-all duration-400 ${activeFeature ? 'opacity-30' : 'opacity-0'}`}
                />
              )}
            </svg>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                type="button"
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-orbital p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent hover:scale-110 active:scale-95"
                aria-label={`Learn more about ${feature.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveFeature(feature);
                  }
                }}
                style={{ ...feature.position, willChange: 'transform' }}
                onMouseEnter={() => setHoveredFeature(feature.id as FeatureId)}
                onMouseLeave={() => setHoveredFeature(null)}
                onClick={() => setActiveFeature(feature)}
              >
                <div
                  className={`relative flex flex-col items-center cursor-pointer group`}
                >
                  <div
                    className={`transition-all duration-300 ease-orbital p-4 rounded-full bg-[hsl(var(--surface-1)/.65)] backdrop-blur-[var(--glass-blur)]
                      ${activeFeature.id === feature.id ? 'scale-110 u-halo' : 'group-hover:scale-[1.02]'} u-stroke-1`}
                  >
                    <div className="transition-transform duration-400 ease-orbital group-hover:rotate-6">
                      <feature.IconComponent
                        className={`h-10 w-10 transition-colors duration-300 ease-in-out ${
                          activeFeature.id === feature.id
                            ? 'text-accent-primary'
                            : 'text-text-muted group-hover:text-accent-primary'
                        }`}
                      />
                    </div>
                  </div>
                  <span
                    className={`absolute -bottom-8 text-sm font-heading transition-all duration-300 ${hoveredFeature === feature.id || activeFeature.id === feature.id ? 'opacity-100 text-accent-primary' : 'opacity-0'}`}
                  >
                    {feature.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
