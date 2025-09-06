import React from 'react';
import { SlackLogo } from './icons/SlackLogo';
import { GitHubLogo } from './icons/GitHubLogo';
import { GoogleWorkspaceLogo } from './icons/GoogleWorkspaceLogo';
import { MicrosoftTeamsLogo } from './icons/MicrosoftTeamsLogo';
import { NotionLogo } from './icons/NotionLogo';
import { FigmaLogo } from './icons/FigmaLogo';
import { ZoomLogo } from './icons/ZoomLogo';
import { StripeLogo } from './icons/StripeLogo';

const logos = [
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

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-26">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">
            Connect Your Entire Digital Universe
          </h2>
          <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
            promtflow.ai integrates seamlessly with the tools your team already
            loves.
          </p>
        </div>
        <div className="space-y-8">
          <Marquee direction="left">
            {logos.slice(0, 8).map(({ name, Icon }) => (
              <div key={name} aria-label={name} className="flex-shrink-0">
                <Icon className="h-12 w-auto text-text-muted transition-[filter,opacity] duration-300 [filter:grayscale(.2)_opacity(.85)] hover:[filter:grayscale(0)_opacity(1)] focus-visible:[filter:grayscale(0)_opacity(1)]" />
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {logos.slice(0, 8).map(({ name, Icon }) => (
              <div key={name} aria-label={name} className="flex-shrink-0">
                <Icon className="h-12 w-auto text-text-muted transition-[filter,opacity] duration-300 [filter:grayscale(.2)_opacity(.85)] hover:[filter:grayscale(0)_opacity(1)] focus-visible:[filter:grayscale(0)_opacity(1)]" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
