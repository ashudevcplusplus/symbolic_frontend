import React, { useState, useEffect } from 'react';
import { HeroIllustration } from './HeroIllustration';
import { SignalIcon } from './icons/SignalIcon';
import { ClockIcon } from './icons/ClockIcon';
import { PlugIcon } from './icons/PlugIcon';

const AnimatedTitle: React.FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => {
  return (
    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-text-secondary/80">
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="inline-block transition-transform duration-700 ease-orbital"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(1.1em)',
              transitionDelay: `${i * 100 + 400}ms`
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const [isIgnited, setIsIgnited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIgnited(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-42 pb-26 overflow-hidden min-h-[100vh] flex flex-col justify-center">
       <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
        <div className="absolute top-1/2 left-1/2 w-[200vw] h-[200vw] bg-gradient-to-tr from-brand-gradient-from via-accent-mid to-brand-gradient-to animate-aurora-sweep" />
      </div>
       <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{backgroundImage: 'radial-gradient(ellipse at 50% 40%, hsl(var(--accent-mid) / 0.3) 0%, transparent 50%)'}}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <h1 className="text-5xl md:text-[3.5rem] lg:text-[4rem] font-extrabold font-heading leading-heading tracking-display mb-6 text-balance">
                  <AnimatedTitle text="Command AI with sovereign precision." isVisible={isIgnited} />
                </h1>
                <div className={`transition-all duration-400 ease-in-out ${isIgnited ? 'opacity-100 delay-500' : 'opacity-0'}`}>
                  <p className="text-lg md:text-xl text-text-secondary max-w-narrow mb-10 font-light leading-body text-pretty">
                    Turn AI operations into a calm, controllable system—clarity, speed, and trust.
                  </p>
                  <div className="flex flex-col items-start justify-center gap-4 mb-16">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href="#"
                        className="has-gradient has-shimmer bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white font-bold px-10 py-5 rounded-xl transition-all transform duration-300 focus:outline-none focus-visible:shadow-focus-glow bg-[length:200%_auto] motion-safe:animate-shimmer motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-z1 motion-safe:active:scale-[0.99] motion-safe:active:shadow-none animate-pulse-glow"
                      >
                        Start Free Trial
                      </a>
                      <a
                        href="#"
                        className="bg-transparent text-text-secondary font-bold px-10 py-5 rounded-xl transition-all transform duration-300 focus:outline-none focus-visible:shadow-focus-glow motion-safe:hover:scale-[1.03] shadow-[inset_0_0_0_1px_theme(colors.surface-3)] hover:shadow-[inset_0_0_0_1px_theme(colors.accent-primary),0_0_12px_-4px_theme(colors.accent-primary)] hover:text-text-primary"
                      >
                        Request a demo
                      </a>
                    </div>
                     <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-2 text-sm text-text-muted font-light">
                        <div className="flex items-center gap-2">
                           <SignalIcon className="w-4 h-4 text-positive" />
                           <span>99.99% Uptime</span>
                        </div>
                         <div className="flex items-center gap-2">
                           <ClockIcon className="w-4 h-4 text-info" />
                           <span>Sub-100ms Latency</span>
                        </div>
                         <div className="flex items-center gap-2">
                           <PlugIcon className="w-4 h-4 text-accent-mid" />
                           <span>100+ Integrations</span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={`relative h-full min-h-[300px] lg:min-h-0 transition-all duration-500 ease-orbital ${isIgnited ? 'scale-100 opacity-100' : 'scale-90 opacity-50'}`}>
                <HeroIllustration isIgnited={isIgnited} />
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;