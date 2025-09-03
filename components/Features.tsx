import React from 'react';
import { FeatureIcon1 } from './icons/FeatureIcon1';
import { FeatureIcon2 } from './icons/FeatureIcon2';
import { FeatureIcon3 } from './icons/FeatureIcon3';

const features = [
  {
    id: 1,
    IconComponent: FeatureIcon1,
    title: 'Lambda Processing',
    description:
      'Advanced serverless compute optimized for AI workloads with automatic scaling and intelligent resource allocation.',
  },
  {
    id: 2,
    IconComponent: FeatureIcon2,
    title: 'Quantum Analytics',
    description:
      'Harness the power of quantum-inspired algorithms to process massive datasets and uncover hidden patterns in your data.',
  },
  {
    id: 3,
    IconComponent: FeatureIcon3,
    title: 'Neural Networks',
    description:
      'Deploy custom neural network architectures with our drag-and-drop visual designer and pre-trained model library.',
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-32 bg-surface-0/80 backdrop-blur-sm scroll-mt-20"
    >
      <div className="container mx-auto max-w-main">
        <div className="text-center mb-16">
          {/* H1 max 2 lines, λ=-1.3% - PAGE α specification */}
          <h2
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance tracking-display leading-tight max-w-4xl mx-auto"
            style={{ letterSpacing: '-0.013em' }}
          >
            Discover Your Lambda Gallery
          </h2>
          {/* subhead 58–62ch - PAGE α specification */}
          <p
            className="text-xl text-text-secondary max-w-[58ch] md:max-w-[62ch] mx-auto font-light text-pretty leading-heading"
            style={{ lineHeight: '1.12' }}
          >
            Transform your workflow with intelligent features designed for
            precision and clarity.
          </p>
        </div>
        {/* Grid γ: md→2 cols, lg→3 cols - PAGE α specification */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Feature Cards - PAGE α specifications */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 relative group cursor-pointer transition-all duration-200 ease-out-cubic hover:shadow-z2 hover:scale-[1.01] focus-within:shadow-focus-glow focus-within:ring-4 focus-within:ring-brand-primary/40"
              style={{ minHeight: '320px' }} // card min height aligned per row
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle keyboard activation if needed
                }
              }}
              aria-label={`View details for ${feature.title}`}
            >
              {/* Badges top-left - PAGE α specification */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  New
                </span>
              </div>

              {/* Icon ∅=32–40, ψ=1.5px - PAGE α specification */}
              <div className="mb-6 inline-block p-4 bg-accent-primary/10 rounded-xl group-hover:bg-accent-primary/20 transition-colors duration-200">
                <feature.IconComponent
                  className="w-8 h-8 text-accent-primary"
                  style={{ strokeWidth: '1.5px' }}
                />
              </div>

              {/* Title with proper contrast r≥4.5 - PAGE α A11y specification */}
              <h3 className="text-xl font-extrabold font-heading text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-200">
                {feature.title}
              </h3>

              {/* Body text r≥4.5, 48–65ch copy - PAGE α specifications */}
              <p className="text-text-secondary font-light text-pretty leading-relaxed max-w-[48ch] lg:max-w-[65ch]">
                {feature.description}
              </p>

              {/* Hairline separator 1px gradient - PAGE α micro-redlines */}
              <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-text-muted/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
