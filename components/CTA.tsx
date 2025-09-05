import React, { useRef } from 'react';

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      !containerRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    containerRef.current.style.setProperty('--mouse-x', `${x}`);
    containerRef.current.style.setProperty('--mouse-y', `${y}`);
  };

  return (
    <section className="py-26">
      <div className="container mx-auto px-6">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="bg-gradient-to-r from-brand-gradient-from/80 via-accent-mid/80 to-brand-gradient-to/80 rounded-2xl p-20 text-center relative overflow-hidden group has-gradient"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to motion-safe:animate-swirl opacity-30 mix-blend-soft-light transition-transform duration-400 ease-orbital has-gradient"
            style={{
              transform:
                'rotate(calc(var(--mouse-x, 0.5) * 45deg)) scale(calc(1.2 + var(--mouse-y, 0.5) * 0.3))',
            }}
          ></div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-4 relative z-10 text-balance">
            Ready to Enter a New Dimension of Work?
          </h2>
          <p className="text-text-primary/80 max-w-reading mx-auto mb-8 relative z-10 text-xl font-light text-pretty">
            Join thousands of innovators charting new courses in productivity.
            Your 14-day trial is your launchpad.
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white font-bold px-10 py-5 rounded-xl transition-all transform duration-300 animate-pulse-glow focus:outline-none focus-visible:shadow-focus-glow relative z-10 bg-[length:200%_auto] motion-safe:animate-shimmer motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-z1 motion-safe:active:scale-[0.99] motion-safe:active:shadow-none has-gradient has-shimmer"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
