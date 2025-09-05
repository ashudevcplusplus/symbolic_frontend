import React, { useState, useEffect } from 'react';

interface Stat {
  label: string;
  value: string;
  footnote?: string;
}

interface StatsKPIProps {
  stats: Stat[];
}

const AnimatedValue: React.FC<{ value: string; isVisible: boolean }> = ({
  value,
  isVisible,
}) => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(increment * currentStep, numericValue);

      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        // Preserve the original format (e.g., "99.9%" or "50K+")
        const formatted = value.replace(
          /[0-9]+(\.[0-9]+)?/,
          currentValue.toFixed(value.includes('.') ? 1 : 0)
        );
        setDisplayValue(formatted);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span
      className="u-text-gradient font-bold tabular-nums"
      style={{
        fontSize: 'var(--type-price)',
        lineHeight: '1.2',
      }}
    >
      {displayValue}
    </span>
  );
};

const StatsKPI: React.FC<StatsKPIProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-kpi');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  if (!stats.length) return null;

  return (
    <section id="stats-kpi" className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-orbital ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <div className="mb-4">
                <AnimatedValue value={stat.value} isVisible={isVisible} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>
              {stat.footnote && (
                <p className="text-sm text-text-muted">{stat.footnote}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsKPI;
