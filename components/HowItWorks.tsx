import React, { useRef, useState, useEffect } from 'react';
import { HowItWorksIcon1 } from './icons/HowItWorksIcon1';
import { HowItWorksIcon2 } from './icons/HowItWorksIcon2';
import { HowItWorksIcon3 } from './icons/HowItWorksIcon3';

const steps = [
  {
    Icon: HowItWorksIcon1,
    title: 'Connect Your AI',
    description:
      'Plug Synergize into your existing AI models and APIs. No changes to your current setup—just add reliability on top.',
  },
  {
    Icon: HowItWorksIcon2,
    title: 'Define Contracts',
    description:
      'Set clear rules for what your AI should do and how it should behave. No more guessing games or random failures.',
  },
  {
    Icon: HowItWorksIcon3,
    title: 'Ship with Confidence',
    description:
      'Deploy AI features that actually work. Get alerts when something changes, and sleep better knowing your AI won\'t break.',
  },
];

const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
};

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      id="how-it-works"
      className="py-26 bg-surface-1/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Fix Your AI in 3 Simple Steps
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            No complex migrations or rewrites. Just add reliability to your existing AI setup 
            and start sleeping better at night.
          </p>
        </div>
        <div className="relative max-w-main mx-auto">
          <div
            className="absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent hidden md:block"
            aria-hidden="true"
          />
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center relative ${isInView ? 'motion-safe:animate-stagger-in' : 'opacity-0 translate-y-3'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-surface-1 shadow-glow-accent">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-surface-2">
                      <span className="text-2xl font-bold font-heading text-accent-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4 inline-flex items-center justify-center">
                  <step.Icon className="w-8 h-8 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-light text-pretty">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
