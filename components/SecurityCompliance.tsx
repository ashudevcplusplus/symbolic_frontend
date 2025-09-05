import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface SecurityComplianceProps {
  badges?: string[];
  copy?: string;
}

const SecurityCompliance: React.FC<SecurityComplianceProps> = ({
  badges = ['SOC2', 'ISO27001', 'HIPAA'],
  copy = 'Enterprise-grade security & governance',
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-glass-bg backdrop-blur-sm rounded-lg p-8 shadow-z2"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              boxShadow: 'var(--elevation-z2)',
              border: 'inset 0 0 0 1px hsl(var(--surface-3) / .6)',
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Security & Compliance
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {copy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-surface-1 rounded-lg border border-surface-2 hover:shadow-z3 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-positive" />
                    <span className="font-semibold text-text-primary">
                      {badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#security-docs"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-mid transition-colors font-medium focus:outline-none focus-visible:shadow-focus-glow"
              >
                Learn more about our security practices
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
