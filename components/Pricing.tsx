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
      className={`bg-surface-1-augmented p-8 rounded-xl relative flex flex-col transition-all duration-300 ease-out-cubic motion-safe:hover:scale-[1.01] motion-safe:hover:shadow-z2 ${plan.popular ? 'shadow-z2 ring-2 ring-accent-primary/20 lg:scale-[1.02]' : 'shadow-z1'} ${isVisible ? 'motion-safe:animate-stagger-in' : 'opacity-0 translate-y-3'}`}
      style={{ animationDelay, minHeight: '500px' }} // equalize card heights - PAGE β micro-redlines
    >
      {/* Ribbons occupy ≤8% card height - PAGE β specification */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider has-gradient shadow-lg">
          Most Popular
        </div>
      )}

      {/* Plan names H3 size - PAGE β A11y specification */}
      <h3 className="text-2xl font-extrabold font-heading text-text-primary mb-3 mt-2">
        {plan.name}
      </h3>
      <p className="text-text-muted mb-8 font-light leading-relaxed">
        {plan.description}
      </p>

      {/* Price lockup: numeral set = tabular, integer : fractional = 1 : 0.58 scale, currency prefix reduced 0.82× - PAGE β specification */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span
            className="text-text-muted text-lg font-light mr-1"
            style={{ fontSize: '0.82em' }}
          >
            $
          </span>
          <span className="text-5xl font-extrabold font-heading text-text-primary tabular-nums">
            {plan.name === 'Galaxy'
              ? 'Custom'
              : isYearly
                ? plan.price.yearly.replace('$', '')
                : plan.price.monthly.replace('$', '')}
          </span>
        </div>
        {plan.name !== 'Galaxy' && (
          <p className="text-base font-normal text-text-muted font-light mt-1">
            per month{isYearly ? ', billed annually' : ''}
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

      {/* CTAs: primary solid gradient G, secondary outlined-glow, cluster gap 3γ - PAGE β specification */}
      <div className="space-y-3">
        <a
          href="#"
          className={`w-full text-center font-bold py-4 rounded-xl transition-all duration-300 text-lg block ${plan.popular ? 'bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white hover:opacity-90 bg-[length:200%_auto] motion-safe:animate-shimmer has-gradient has-shimmer shadow-lg' : 'bg-transparent text-text-primary border-2 border-surface-3 hover:border-accent-primary hover:text-accent-primary'} focus:outline-none focus-visible:shadow-focus-glow focus-visible:ring-4 focus-visible:ring-brand-primary/40`}
        >
          Choose Plan
        </a>
        {plan.popular && (
          <p className="text-text-muted text-sm text-center font-light">
            30-day free trial included
          </p>
        )}
      </div>
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
      className="py-32 bg-surface-0 scroll-mt-20"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-main">
        <div className="text-center mb-16">
          {/* Hero concise value line ≤12 words - PAGE β specification */}
          <h2
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-6 text-balance tracking-display"
            style={{ letterSpacing: '-0.013em' }}
          >
            Transparent Pricing, No Surprises
          </h2>
          {/* Toggle row centered, gap 4γ - PAGE β specification */}
          <div className="flex justify-center items-center gap-8 mb-16">
            <span
              className={`text-lg font-medium transition-colors duration-300 ${!isYearly ? 'text-accent-primary' : 'text-text-muted'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              aria-pressed={isYearly}
              aria-label="Toggle annual billing"
              className="relative inline-flex items-center h-7 rounded-full w-14 transition-colors bg-surface-3 focus:outline-none focus-visible:shadow-focus-glow focus-visible:ring-4 focus-visible:ring-brand-primary/40"
            >
              <span
                className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ease-out-cubic shadow-sm ${isYearly ? 'translate-x-8' : 'translate-x-1'}`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors duration-300 ${isYearly ? 'text-accent-primary' : 'text-text-muted'}`}
            >
              Annual
            </span>
            {/* Savings pill with neutral+brand ring - PAGE β Color Θ specification */}
            <span className="bg-surface-3 text-accent-primary text-sm font-bold px-4 py-2 rounded-full border border-accent-primary/20">
              SAVE 20%
            </span>
          </div>
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
