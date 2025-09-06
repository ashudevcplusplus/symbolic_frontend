import React from 'react';
import { FeatureIcon1 } from './icons/FeatureIcon1';
import { FeatureIcon2 } from './icons/FeatureIcon2';
import { FeatureIcon3 } from './icons/FeatureIcon3';

const timelineEvents = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Started with a vision to democratize AI operations',
  },
  {
    year: '2019',
    title: 'First Product',
    description: 'Launched our flagship quantum computing platform',
  },
  {
    year: '2020',
    title: 'Scale',
    description: 'Expanded to serve enterprise customers globally',
  },
  {
    year: '2021',
    title: 'Innovation',
    description: 'Introduced neural network orchestration capabilities',
  },
  {
    year: '2022',
    title: 'Growth',
    description: 'Reached 10,000+ active users worldwide',
  },
  {
    year: '2023',
    title: 'Excellence',
    description: 'Achieved industry-leading performance benchmarks',
  },
];

const values = [
  {
    icon: FeatureIcon1,
    title: 'Innovation First',
    description:
      'We push boundaries and embrace cutting-edge technology to solve complex problems.',
  },
  {
    icon: FeatureIcon2,
    title: 'Human Centered',
    description:
      'Every decision we make prioritizes the needs and experiences of our users.',
  },
  {
    icon: FeatureIcon3,
    title: 'Sustainable Growth',
    description:
      'We build for the long term, ensuring our solutions remain relevant and valuable.',
  },
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: '/api/placeholder/96/96', // Placeholder for avatar
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-founder',
    image: '/api/placeholder/96/96',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Research',
    image: '/api/placeholder/96/96',
  },
  {
    name: 'James Park',
    role: 'VP Engineering',
    image: '/api/placeholder/96/96',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP Product',
    image: '/api/placeholder/96/96',
  },
  {
    name: 'David Kim',
    role: 'VP Operations',
    image: '/api/placeholder/96/96',
  },
];

const About: React.FC = () => {
  return (
    <section className="py-32 bg-surface-0">
      <div className="container mx-auto max-w-main">
        {/* Hero founder line (≤16 words) + photo grid - PAGE ε specification */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-8 text-balance tracking-display"
            style={{ letterSpacing: '-0.013em' }}
          >
            Founded by AI Pioneers
          </h1>
          <p className="text-xl text-text-secondary max-w-[58ch] md:max-w-[65ch] mx-auto font-light text-pretty leading-relaxed mb-12">
            We combine decades of experience in artificial intelligence, quantum
            computing, and software engineering to build the future of
            intelligent systems.
          </p>

          {/* Photo grid with ρ=12px, σz=z1, monochrome rim-light 220° - PAGE ε specification */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-xl overflow-hidden shadow-z1 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-text-muted/20 rounded-full flex items-center justify-center">
                      <span className="text-text-muted font-bold text-xl">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>
                  {/* Monochrome rim-light effect */}
                  <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-accent-primary/30 transition-all duration-300"></div>
                </div>
                {/* Alt text on portraits - PAGE ε A11y specification */}
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-text-primary">
                    {member.name}
                  </p>
                  <p className="text-xs text-text-muted font-light">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline: hairline spine 1px, nodes 12px, year labels 14–16px, step gap 5γ - PAGE ε specification */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary text-center mb-16">
            Our Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Hairline spine - PAGE ε specification */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-text-muted/30 to-transparent"></div>

            <div className="space-y-20">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    {/* Year labels 14–16px - PAGE ε specification */}
                    <div
                      className="text-lg md:text-xl font-extrabold text-accent-primary mb-2"
                      style={{ fontSize: '14px', lineHeight: '16px' }}
                    >
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Timeline nodes 12px - PAGE ε specification */}
                  <div className="relative flex-shrink-0 w-12 h-12 bg-accent-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values row: 3 cards, emoji-free, icon ψ=1.5px, titles ≤4 words - PAGE ε specification */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary text-center mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-surface-1-augmented shadow-z1 rounded-xl p-8 text-center transition-all duration-300 ease-out-cubic hover:shadow-z2 hover:scale-[1.01] focus-within:shadow-focus-glow focus-within:ring-4 focus-within:ring-brand-primary/40"
              >
                {/* Icon ψ=1.5px - PAGE ε specification */}
                <div className="mb-6 inline-block p-4 bg-accent-primary/10 rounded-xl">
                  <value.icon
                    className="w-8 h-8 text-accent-primary"
                    style={{ strokeWidth: '1.5px' }}
                  />
                </div>

                {/* Titles ≤4 words - PAGE ε specification */}
                <h3 className="text-xl font-extrabold font-heading text-text-primary mb-4">
                  {value.title}
                </h3>

                <p className="text-text-secondary font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team mosaic: 3–4 across at lg, avatar ⌀=96, name 16px / role 14px muted - PAGE ε specification */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary text-center mb-16">
            Meet Our Team
          </h2>

          {/* Team mosaic - PAGE ε specification */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                  }
                }}
                aria-label={`View profile for ${member.name}`}
              >
                <div className="relative mb-4">
                  {/* Avatar ⌀=96 - PAGE ε specification */}
                  <div
                    className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-z1 group-hover:shadow-z2 transition-all duration-300 relative overflow-hidden"
                    style={{ width: '96px', height: '96px' }}
                  >
                    {/* Avatar hover = ring glow 0.85 - PAGE ε Motion specification */}
                    <div className="absolute inset-0 rounded-full ring-4 ring-transparent group-hover:ring-accent-primary/30 transition-all duration-300"></div>

                    {/* Placeholder avatar content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-text-muted font-bold text-2xl">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Name 16px / role 14px muted - PAGE ε specification */}
                <div className="text-center">
                  <h3
                    className="text-base font-extrabold text-text-primary mb-1"
                    style={{ fontSize: '16px' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm text-text-muted font-light"
                    style={{ fontSize: '14px' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
