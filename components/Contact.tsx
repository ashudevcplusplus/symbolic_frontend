import React, { useState } from 'react';
import { FeatureIcon1 } from './icons/FeatureIcon1';
import { FeatureIcon2 } from './icons/FeatureIcon2';
import { FeatureIcon3 } from './icons/FeatureIcon3';

const contactCards = [
  {
    icon: FeatureIcon1,
    title: 'Sales',
    description: 'Discuss enterprise solutions and custom pricing.',
    action: 'Start Conversation',
    email: 'sales@company.com',
  },
  {
    icon: FeatureIcon2,
    title: 'Support',
    description: 'Get help with technical issues and product questions.',
    action: 'Get Support',
    email: 'support@company.com',
  },
  {
    icon: FeatureIcon3,
    title: 'Press',
    description: 'Media inquiries and partnership opportunities.',
    action: 'Contact Press',
    email: 'press@company.com',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-32 bg-surface-0">
      <div className="container mx-auto max-w-main">
        {/* Hero one-line promise, secondary line points to SLAs - PAGE ξ specification */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-6 text-balance tracking-display"
            style={{ letterSpacing: '-0.013em' }}
          >
            We&apos;re Here to Help
          </h1>
          <p className="text-xl text-text-secondary max-w-[58ch] md:max-w-[65ch] mx-auto font-light text-pretty leading-relaxed">
            Get in touch with our team. We respond within 24 hours with
            SLA-backed support for enterprise customers.
          </p>
        </div>

        {/* Cards: {Sales, Support, Press}, icon ⌀=28–32, σz=z1, ρ=12px, CTA per card (outlined-glow) - PAGE ξ specification */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 text-center transition-all duration-300 ease-out-cubic hover:shadow-z2 hover:scale-[1.01] focus-within:shadow-focus-glow focus-within:ring-4 focus-within:ring-brand-primary/40"
            >
              {/* Icon ⌀=28–32, ψ=1.5px - PAGE ξ specification */}
              <div className="mb-6 inline-block p-4 bg-accent-primary/10 rounded-xl">
                <card.icon
                  className="w-7 h-7 text-accent-primary"
                  style={{ strokeWidth: '1.5px' }}
                />
              </div>

              <h3 className="text-xl font-extrabold font-heading text-text-primary mb-3">
                {card.title}
              </h3>

              <p className="text-text-secondary font-light leading-relaxed mb-6">
                {card.description}
              </p>

              {/* CTA per card (outlined-glow) - PAGE ξ specification */}
              <a
                href={`mailto:${card.email}`}
                className="inline-block w-full px-6 py-3 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow"
              >
                {card.action}
              </a>
            </div>
          ))}
        </div>

        {/* Form (visual only): 2-column at lg, label 13–14px, field 44–48px height, help text muted - PAGE ξ specification */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-extrabold font-heading text-text-primary mb-8 text-center">
              Send Us a Message
            </h2>

            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                {/* Label 13–14px - PAGE ξ specification */}
                <label
                  htmlFor="name"
                  className="block text-text-secondary font-medium mb-2"
                  style={{ fontSize: '13px', lineHeight: '14px' }}
                >
                  Full Name
                  <span className="text-danger ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                {/* Field 44–48px height - PAGE ξ specification */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-2 border border-surface-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:border-accent-primary transition-colors"
                  style={{ height: '44px' }}
                  required
                  aria-describedby="name-help"
                />
                {/* Help text muted - PAGE ξ specification */}
                <p
                  id="name-help"
                  className="mt-1 text-xs text-text-muted font-light"
                >
                  Enter your full legal name
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-text-secondary font-medium mb-2"
                  style={{ fontSize: '13px', lineHeight: '14px' }}
                >
                  Email Address
                  <span className="text-danger ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-2 border border-surface-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:border-accent-primary transition-colors"
                  style={{ height: '44px' }}
                  required
                  aria-describedby="email-help"
                />
                <p
                  id="email-help"
                  className="mt-1 text-xs text-text-muted font-light"
                >
                  We&apos;ll use this to respond to your inquiry
                </p>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-text-secondary font-medium mb-2"
                  style={{ fontSize: '13px', lineHeight: '14px' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-2 border border-surface-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:border-accent-primary transition-colors"
                  style={{ height: '44px' }}
                  aria-describedby="company-help"
                />
                <p
                  id="company-help"
                  className="mt-1 text-xs text-text-muted font-light"
                >
                  Optional: helps us provide better context
                </p>
              </div>

              <div className="lg:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-text-secondary font-medium mb-2"
                  style={{ fontSize: '13px', lineHeight: '14px' }}
                >
                  Message
                  <span className="text-danger ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-surface-2 border border-surface-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:border-accent-primary transition-colors resize-vertical"
                  required
                  aria-describedby="message-help"
                />
                <p
                  id="message-help"
                  className="mt-1 text-xs text-text-muted font-light"
                >
                  Tell us how we can help you
                </p>
              </div>

              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:shadow-focus-glow shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map slot: static image only, 16:9, corners ρ=16px, no parallax - PAGE ξ specification */}
        <div className="mt-16">
          <div
            className="w-full max-w-4xl mx-auto bg-gradient-to-br from-surface-2 to-surface-3 rounded-2xl overflow-hidden shadow-z1"
            style={{ aspectRatio: '16/9' }}
          >
            {/* Static map placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-text-secondary font-light">
                  Global Headquarters
                </p>
                <p className="text-text-muted text-sm font-light mt-1">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
