import React, { useState, useRef, useEffect } from 'react';
import { CheckIcon } from './icons/CheckIcon';

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

const PricingPlan: React.FC<{
  plan: {
    name: string;
    price: { monthly: string; yearly: string };
    description: string;
    features: string[];
    popular?: boolean;
  };
  isYearly: boolean;
  isVisible: boolean;
  animationDelay: string;
}> = ({ plan, isYearly, isVisible, animationDelay }) => {
  return (
    <div
      className={`relative flex flex-col p-10 rounded-[24px] transition-all duration-300 ease-orbital motion-safe:hover:scale-[1.01] ${plan.popular ? 'lg:scale-[1.04]' : ''} ${isVisible ? 'motion-safe:animate-stagger-in' : 'opacity-0 translate-y-3'}`}
      style={{
        animationDelay,
        willChange: 'transform, opacity',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        boxShadow: 'var(--elevation-z2), inset 0 0 0 1px var(--glass-stroke)',
        backgroundImage: 'var(--glass-gradient), var(--texture-dotgrid)',
      }}
    >
      {/* Ribbons occupy ≤8% card height - PAGE β specification */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider has-gradient shadow-lg">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
        {plan.name}
      </h3>
      <p className="text-text-muted mb-6 h-10 font-light">{plan.description}</p>
      <div className="mb-6 h-20">
        <p className="text-6xl font-extrabold font-heading tabular-nums u-text-gradient">
          {plan.name === 'Galaxy'
            ? 'Custom'
            : isYearly
              ? plan.price.yearly
              : plan.price.monthly}
        </p>
        {plan.name !== 'Galaxy' && (
          <p className="text-lg font-normal text-text-muted font-light">
            / month
          </p>
        )}
      </div>

      {/* Table rhythm: features list line-height ρ=1.4, row gap 1.5γ, check icons ψ=1.5px - PAGE β specification */}
      <ul className="space-y-6 mb-10 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon
              className="w-4 h-4 text-accent-primary mr-4 mt-1 flex-shrink-0"
              style={{ strokeWidth: '1.5px' }}
            />
            <span
              className="text-text-secondary font-light leading-relaxed"
              style={{ lineHeight: '1.4' }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full text-center font-bold py-3 rounded-[16px] transition-all duration-300 text-lg focus:outline-none focus-visible:shadow-focus-glow ${plan.popular ? 'bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white hover:opacity-90 bg-[length:200%_auto] motion-safe:animate-shimmer has-gradient has-shimmer' : 'bg-[hsl(var(--surface-1)/.65)] backdrop-blur-[var(--glass-blur)] text-text-primary hover:shadow-z3 u-stroke-1'}`}
      >
        Choose Plan
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const plans = [
    {
      name: 'Asteroid',
      price: { monthly: '$29', yearly: '$24' },
      description: 'For solo astronauts and small crews.',
      features: [
        '5 Projects',
        '10GB Storage',
        'Basic Analytics',
        'Email Support',
      ],
    },
    {
      name: 'Planet',
      price: { monthly: '$79', yearly: '$65' },
      description: 'For growing fleets and established colonies.',
      features: [
        'Unlimited Projects',
        '100GB Storage',
        'Advanced Analytics',
        'Automation Workflows',
        'Priority Support',
      ],
      popular: true,
    },
    {
      name: 'Galaxy',
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'For interstellar enterprises.',
      features: [
        'Everything in Planet',
        'Dedicated Account Manager',
        'Custom Integrations',
        '24/7 Support',
        'SLA',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-26 bg-surface-0 scroll-mt-20"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Pricing That's Not Astronomical
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Choose your orbit. No hidden fees, no asteroid belts of complexity.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-16">
          <span
            className={`font-medium ${!isYearly ? 'text-accent-primary' : 'text-text-muted'}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            aria-pressed={isYearly}
            aria-label="Toggle annual billing"
            className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-surface-3 focus:outline-none focus-visible:shadow-focus-glow"
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
          <span
            className={`font-medium ${isYearly ? 'text-accent-primary' : 'text-text-muted'}`}
          >
            Yearly
          </span>
          <span className="bg-accent-primary/20 text-accent-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            SAVE 20%
          </span>
        </div>

        {/* Tier stack: 3 cards - PAGE β specification */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-main mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.popular ? 'order-1 lg:order-2' : index === 0 ? 'order-2 lg:order-1' : 'order-3'}`}
            >
              <PricingPlan
                plan={plan}
                isYearly={isYearly}
                isVisible={isInView}
                animationDelay={`${index * 150}ms`}
              />
            </div>
          ))}
        </div>

        {/* Divider after tiers extends container width κ - PAGE β micro-redlines */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-text-muted/20 to-transparent my-16"></div>

        {/* Disclaimers in text.muted (r≥4.5) - PAGE β Color Θ specification */}
        <div className="text-center">
          <p className="text-text-muted text-sm font-light max-w-4xl mx-auto leading-relaxed">
            All plans include a 30-day money-back guarantee. Enterprise plans
            include custom SLAs and dedicated support. Pricing is subject to
            change with 30 days notice. All prices shown are in USD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
