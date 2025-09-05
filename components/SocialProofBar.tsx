import React, { useState, useEffect } from 'react';
import { SlackLogo } from './icons/SlackLogo';
import { GitHubLogo } from './icons/GitHubLogo';
import { GoogleWorkspaceLogo } from './icons/GoogleWorkspaceLogo';
import { MicrosoftTeamsLogo } from './icons/MicrosoftTeamsLogo';
import { NotionLogo } from './icons/NotionLogo';
import { FigmaLogo } from './icons/FigmaLogo';
import { ZoomLogo } from './icons/ZoomLogo';
import { StripeLogo } from './icons/StripeLogo';

interface Logo {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface SocialProofBarProps {
  logos?: Logo[];
  blurb?: string;
}

const defaultLogos: Logo[] = [
  { name: 'Slack', Icon: SlackLogo },
  { name: 'GitHub', Icon: GitHubLogo },
  { name: 'Google Workspace', Icon: GoogleWorkspaceLogo },
  { name: 'Microsoft Teams', Icon: MicrosoftTeamsLogo },
  { name: 'Notion', Icon: NotionLogo },
  { name: 'Figma', Icon: FigmaLogo },
  { name: 'Zoom', Icon: ZoomLogo },
  { name: 'Stripe', Icon: StripeLogo },
];

const Marquee: React.FC<{
  children: React.ReactNode;
  direction?: 'left' | 'right';
}> = ({ children, direction = 'left' }) => (
  <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <div
      className={`flex min-w-full shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee-${direction} motion-safe:transform-gpu`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
    <div
      className={`flex min-w-full shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee-${direction} motion-safe:transform-gpu`}
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      {children}
    </div>
  </div>
);

const SocialProofBar: React.FC<SocialProofBarProps> = ({
  logos = defaultLogos,
  blurb,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!logos.length) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        {blurb && (
          <div className="text-center mb-6">
            <p className="text-text-muted font-medium">{blurb}</p>
          </div>
        )}

        <div
          className={`space-y-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Marquee direction="left">
            {logos.map(({ name, Icon }) => (
              <div key={name} aria-label={name} className="flex-shrink-0">
                <Icon className="h-8 w-auto text-text-muted transition-all duration-300 [filter:grayscale(.3)_opacity(.8)] hover:[filter:grayscale(0)_opacity(1)] focus-visible:[filter:grayscale(0)_opacity(1)] hover:scale-110 focus-visible:scale-110" />
              </div>
            ))}
          </Marquee>

          <Marquee direction="right">
            {logos.map(({ name, Icon }) => (
              <div key={name} aria-label={name} className="flex-shrink-0">
                <Icon className="h-8 w-auto text-text-muted transition-all duration-300 [filter:grayscale(.3)_opacity(.8)] hover:[filter:grayscale(0)_opacity(1)] focus-visible:[filter:grayscale(0)_opacity(1)] hover:scale-110 focus-visible:scale-110" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
