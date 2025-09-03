import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const securityPillars = [
  {
    id: 1,
    title: 'Compliance & Certifications',
    icon: '🏛️', // Will be replaced with proper icon
    items: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'GDPR & CCPA ready',
      'HIPAA eligible',
    ],
  },
  {
    id: 2,
    title: 'Data Handling & Privacy',
    icon: '🔐', // Will be replaced with proper icon
    items: [
      'End-to-end encryption',
      'Zero-knowledge architecture',
      'Data minimization practices',
      'Regular security audits',
    ],
  },
  {
    id: 3,
    title: 'Access Control & Security',
    icon: '🛡️', // Will be replaced with proper icon
    items: [
      'Multi-factor authentication',
      'Role-based access control',
      'Audit logging & monitoring',
      'Incident response plan',
    ],
  },
  {
    id: 4,
    title: 'Infrastructure & Audits',
    icon: '🏗️', // Will be replaced with proper icon
    items: [
      '99.99% uptime SLA',
      'Global CDN protection',
      'Penetration testing',
      'Third-party assessments',
    ],
  },
];

const Security: React.FC = () => {
  return (
    <section className="py-32 bg-surface-0">
      <div className="container mx-auto max-w-main">
        {/* Hero calm tone, no gradients behind H1, specular ≤2% - PAGE δ specification */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-6 text-balance tracking-display"
            style={{ letterSpacing: '-0.013em' }}
          >
            Security & Trust
          </h1>
          {/* Longform paragraphs 56–65ch - PAGE δ A11y specification */}
          <p
            className="text-xl text-text-secondary max-w-[56ch] md:max-w-[65ch] mx-auto font-light text-pretty leading-relaxed mb-8"
            style={{ lineHeight: '1.5' }}
          >
            Your data security is our highest priority. We maintain rigorous
            standards and transparent practices to ensure your information
            remains protected at all times.
          </p>
        </div>

        {/* Trust bands: logo belt greyscale (luma−6% at rest), restore on hover - PAGE δ specification */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold font-heading text-text-primary mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Logo placeholders - will be replaced with actual logos */}
            <div className="flex items-center justify-center p-6 bg-surface-1-augmented rounded-lg hover:bg-surface-2 transition-colors duration-300">
              <div className="w-24 h-8 bg-gradient-to-r from-text-muted to-text-muted/50 rounded"></div>
            </div>
            <div className="flex items-center justify-center p-6 bg-surface-1-augmented rounded-lg hover:bg-surface-2 transition-colors duration-300">
              <div className="w-24 h-8 bg-gradient-to-r from-text-muted to-text-muted/50 rounded"></div>
            </div>
            <div className="flex items-center justify-center p-6 bg-surface-1-augmented rounded-lg hover:bg-surface-2 transition-colors duration-300">
              <div className="w-24 h-8 bg-gradient-to-r from-text-muted to-text-muted/50 rounded"></div>
            </div>
            <div className="flex items-center justify-center p-6 bg-surface-1-augmented rounded-lg hover:bg-surface-2 transition-colors duration-300">
              <div className="w-24 h-8 bg-gradient-to-r from-text-muted to-text-muted/50 rounded"></div>
            </div>
          </div>
        </div>

        {/* Pillars grid: 2×2 cards - PAGE δ specification */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 transition-all duration-300 ease-out-cubic hover:shadow-z2 hover:scale-[1.01] focus-within:shadow-focus-glow focus-within:ring-4 focus-within:ring-brand-primary/40"
            >
              {/* Avoid playful icons, no emoji - PAGE δ micro-redlines */}
              <div className="mb-6 inline-block p-4 bg-surface-3 rounded-lg">
                <div className="w-8 h-8 bg-text-muted/20 rounded"></div>
              </div>

              <h3 className="text-xl font-extrabold font-heading text-text-primary mb-6">
                {pillar.title}
              </h3>

              {/* Checklist (3–5 items) - PAGE δ specification */}
              <ul className="space-y-4">
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckIcon
                      className="w-5 h-5 text-positive mr-3 mt-0.5 flex-shrink-0"
                      style={{ strokeWidth: '1.5px' }}
                    />
                    <span
                      className="text-text-secondary font-light leading-relaxed"
                      style={{ fontWeight: '400' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callouts: ISO/SOC badges 24–28px, borderless, ring focus only - PAGE δ specification */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-extrabold font-heading text-text-primary mb-8">
            Certifications & Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-surface-1-augmented p-6 rounded-xl hover:bg-surface-2 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 cursor-pointer">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SOC 2</span>
              </div>
              <p className="text-text-secondary font-light mt-3 text-sm">
                Type II Certified
              </p>
            </div>
            <div className="bg-surface-1-augmented p-6 rounded-xl hover:bg-surface-2 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 cursor-pointer">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ISO 27001</span>
              </div>
              <p className="text-text-secondary font-light mt-3 text-sm">
                Information Security
              </p>
            </div>
            <div className="bg-surface-1-augmented p-6 rounded-xl hover:bg-surface-2 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 cursor-pointer">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GDPR</span>
              </div>
              <p className="text-text-secondary font-light mt-3 text-sm">
                Privacy Compliant
              </p>
            </div>
          </div>
        </div>

        {/* CTA with brand reserved for CTAs & links - PAGE δ Color Θ specification */}
        <div className="text-center">
          <div className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-extrabold font-heading text-text-primary mb-4">
              Need More Details?
            </h3>
            <p className="text-text-secondary font-light leading-relaxed mb-6 max-w-[56ch] md:max-w-[65ch] mx-auto">
              Our security team is available to answer your questions and
              provide detailed documentation about our security practices and
              compliance measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white font-bold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
              >
                Contact Security Team
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-accent-primary hover:text-accent-primary/80 font-bold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
              >
                Download Security Overview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
