import React, { useState } from 'react';
import { FeatureIcon1 } from './icons/FeatureIcon1';
import { FeatureIcon2 } from './icons/FeatureIcon2';
import { FeatureIcon3 } from './icons/FeatureIcon3';

const docsTiles = [
  {
    id: 1,
    IconComponent: FeatureIcon1,
    title: 'Getting Started',
    description: 'Quick setup guide for new users',
    category: 'Basics',
  },
  {
    id: 2,
    IconComponent: FeatureIcon2,
    title: 'API Reference',
    description: 'Complete API documentation',
    category: 'Developer',
  },
  {
    id: 3,
    IconComponent: FeatureIcon3,
    title: 'Integration Guide',
    description: 'Connect with popular platforms',
    category: 'Advanced',
  },
  {
    id: 4,
    IconComponent: FeatureIcon1,
    title: 'Best Practices',
    description: 'Optimize your workflow',
    category: 'Advanced',
  },
  {
    id: 5,
    IconComponent: FeatureIcon2,
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    category: 'Support',
  },
  {
    id: 6,
    IconComponent: FeatureIcon3,
    title: 'Migration Guide',
    description: 'Upgrade from previous versions',
    category: 'Advanced',
  },
];

const tocItems = [
  'Introduction',
  'Installation',
  'Configuration',
  'Authentication',
  'API Endpoints',
  'Error Handling',
  'Best Practices',
];

const Docs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-32 bg-surface-0">
      <div className="container mx-auto max-w-main">
        {/* Header band: search visual (no logic) centered, width 56–64ch, placeholder 14–16px - PAGE γ specification */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-8 text-balance tracking-display"
            style={{ letterSpacing: '-0.013em' }}
          >
            Documentation Center
          </h1>
          <p
            className="text-xl text-text-secondary max-w-[58ch] md:max-w-[62ch] mx-auto font-light text-pretty leading-heading mb-12"
            style={{ lineHeight: '1.12' }}
          >
            Everything you need to build, integrate, and optimize with our
            platform.
          </p>

          {/* Search visual (no logic) - PAGE γ specification */}
          <div className="max-w-[56ch] md:max-w-[64ch] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-base bg-surface-1-augmented border border-surface-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:border-accent-primary placeholder:text-text-muted"
                style={{ fontSize: '14px', lineHeight: '16px' }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main content area */}
          <div className="lg:col-span-3">
            {/* Tiles: 2×3 at lg, σz=z1, corners ρ=12px, icon ⌀=28–32, titles ≤2 lines - PAGE γ specification */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {docsTiles.map((tile) => (
                <a
                  key={tile.id}
                  href="#"
                  className="group bg-surface-1-augmented shadow-z1 rounded-xl p-6 transition-all duration-200 hover:shadow-z2 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
                >
                  {/* Icon ⌀=28–32, ψ=1.5px - PAGE γ specification */}
                  <div className="mb-4 inline-block p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors duration-200">
                    <tile.IconComponent
                      className="w-7 h-7 text-accent-primary"
                      style={{ strokeWidth: '1.5px' }}
                    />
                  </div>

                  {/* Titles ≤2 lines - PAGE γ specification */}
                  <h3 className="text-lg font-extrabold font-heading text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200 line-clamp-2">
                    {tile.title}
                  </h3>

                  <p className="text-text-secondary font-light text-sm leading-relaxed mb-3">
                    {tile.description}
                  </p>

                  <span className="inline-block px-2 py-1 bg-surface-3 text-text-muted text-xs font-medium rounded-md">
                    {tile.category}
                  </span>
                </a>
              ))}
            </div>

            {/* Code blocks (visuals): mono 13–14px, line-height 1.55, panel ρ=12px, σz=z1, copy buttons visible focus ring - PAGE γ specification */}
            <div className="bg-surface-1-augmented shadow-z1 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-extrabold font-heading text-text-primary">
                  Quick Start
                </h3>
                <button
                  className="px-3 py-1 text-sm bg-surface-3 hover:bg-surface-3/80 rounded-md transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
                  aria-label="Copy code"
                >
                  Copy
                </button>
              </div>
              <pre
                className="bg-surface-2 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
                style={{
                  fontSize: '13px',
                  lineHeight: '1.55',
                  fontFamily: 'monospace',
                }}
              >
                <code className="text-text-primary">
                  {`import { SymbolicAI } from 'symbolic-ai';

const client = new SymbolicAI({
  apiKey: 'your-api-key'
});

const result = await client.process({
  prompt: 'Analyze this data',
  model: 'quantum-grok'
});`}
                </code>
              </pre>
            </div>

            {/* Admonitions: {info, warn, danger} tone bars 4px on left, icons ψ=1.5px - PAGE γ specification */}
            <div className="space-y-6">
              <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ strokeWidth: '1.5px' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                      Info
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 font-light">
                      This is an informational note to help you understand
                      important concepts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50/50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ strokeWidth: '1.5px' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                      Warning
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 font-light">
                      Be careful when making changes to production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TOC preview: right rail at lg with hairline (1px gradient), hide at md− - PAGE γ specification */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="bg-surface-1-augmented shadow-z1 rounded-xl p-6">
                <h3 className="text-lg font-extrabold font-heading text-text-primary mb-4">
                  Table of Contents
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {tocItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block py-2 px-3 text-sm text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 rounded-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
                          style={{ textDecoration: 'none' }}
                          onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.textDecoration = 'underline')
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.textDecoration = 'none')
                          }
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Hairline separator 1px gradient - PAGE γ specification */}
              <div className="h-px bg-gradient-to-r from-transparent via-text-muted/20 to-transparent my-6"></div>

              <div className="bg-surface-1-augmented shadow-z1 rounded-xl p-6">
                <h4 className="text-sm font-bold text-text-primary mb-3">
                  Related Topics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-accent-mid hover:text-accent-primary transition-colors duration-200"
                      style={{ textDecoration: 'underline' }}
                    >
                      Authentication
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-accent-mid hover:text-accent-primary transition-colors duration-200"
                      style={{ textDecoration: 'underline' }}
                    >
                      Rate Limits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-accent-mid hover:text-accent-primary transition-colors duration-200"
                      style={{ textDecoration: 'underline' }}
                    >
                      Webhooks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
