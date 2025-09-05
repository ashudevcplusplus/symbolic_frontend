import React, { useRef, useEffect, useState } from 'react';
import { Avatar1 } from './icons/Avatar1';
import { Avatar2 } from './icons/Avatar2';
import { Avatar3 } from './icons/Avatar3';
import { QuoteIcon } from './icons/QuoteIcon';

const testimonials = [
  {
    quote:
      "Synergize created a new center of gravity for our team's collaboration. We're more aligned and efficient than ever. A true constellation of features.",
    name: 'Sarah Johnson',
    title: 'Marketing Director, Innovate Corp',
    avatar: <Avatar1 />,
  },
  {
    quote:
      'The automation workflows are like hitting hyperdrive on our productivity. What used to take days now takes minutes. Absolutely stellar!',
    name: 'Michael Chen',
    title: 'Lead Developer, Tech Solutions',
    avatar: <Avatar2 />,
  },
  {
    quote:
      'The analytics dashboards gave us a view of our operations from 30,000 feet. The clarity is out of this world. Onboarding was a smooth launch.',
    name: 'Emily Rodriguez',
    title: 'Project Manager, Creative Minds',
    avatar: <Avatar3 />,
  },
];

const TestimonialCard: React.FC<{
  testimonial: (typeof testimonials)[0];
  isVisible: boolean;
  animationDelay: string;
}> = ({ testimonial, isVisible, animationDelay }) => {
  return (
    <div
      className={`bg-surface-1-augmented p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-orbital shadow-z1 motion-safe:hover:shadow-z2 motion-safe:hover:scale-[1.01] ${isVisible ? 'motion-safe:animate-stagger-in' : 'opacity-0 translate-y-3'}`}
      style={{ animationDelay }}
    >
      <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-surface-3" />
      <p className="text-text-primary italic font-light mb-6 z-10 relative pt-10 text-lg text-pretty">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center z-10 relative">
        <div className="w-16 h-16 mr-4 flex-shrink-0">{testimonial.avatar}</div>
        <div>
          <p className="font-bold text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-muted font-light">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
};

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

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      id="testimonials"
      className="py-26 bg-surface-1 scroll-mt-20"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Echoes from Across the Galaxy
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            Don't just take our word for it. Hear from the pioneers traversing
            new frontiers of productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isVisible={isInView}
              animationDelay={`${index * 150}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
