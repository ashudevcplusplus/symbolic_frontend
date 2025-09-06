import React, { useState } from 'react';

interface ChangelogEntry {
  date: string;
  tag: string;
  summary: string;
  href: string;
}

interface ChangelogTickerProps {
  entries: ChangelogEntry[];
}

const ChangelogTicker: React.FC<ChangelogTickerProps> = ({ entries }) => {
  const [isPaused, setIsPaused] = useState(false);

  if (!entries.length) return null;

  return (
    <section className="py-8 border-t border-surface-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-text-primary">
            Latest Updates
          </h4>
          <span className="text-xs text-text-muted bg-surface-1 px-2 py-1 rounded-full">
            {entries.length} updates
          </span>
        </div>

        <div
          className="relative flex overflow-hidden rounded-md bg-surface-1 border border-surface-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maskImage:
              'linear-gradient(to_right, transparent, white_10%, white_90%, transparent)',
          }}
        >
          <div
            className={`flex min-w-full shrink-0 items-center gap-8 motion-safe:animate-marquee-left ${
              isPaused ? 'motion-safe:pause' : ''
            }`}
            style={{ willChange: 'transform' }}
          >
            {entries.map((entry, index) => (
              <div key={index} className="flex items-center gap-4 py-3 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-positive bg-positive/10 px-2 py-1 rounded-full">
                    {entry.tag}
                  </span>
                  <span className="text-xs text-text-muted">{entry.date}</span>
                </div>
                <a
                  href={entry.href}
                  className="text-sm text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2 group"
                >
                  {entry.summary}
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div
            className={`flex min-w-full shrink-0 items-center gap-8 motion-safe:animate-marquee-left ${
              isPaused ? 'motion-safe:pause' : ''
            }`}
            style={{ willChange: 'transform' }}
            aria-hidden="true"
          >
            {entries.map((entry, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-4 py-3 px-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-positive bg-positive/10 px-2 py-1 rounded-full">
                    {entry.tag}
                  </span>
                  <span className="text-xs text-text-muted">{entry.date}</span>
                </div>
                <a
                  href={entry.href}
                  className="text-sm text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2 group"
                >
                  {entry.summary}
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangelogTicker;
