import React from 'react';
import { LogoPlaceholder1 } from './icons/LogoPlaceholder1';
import { LogoPlaceholder2 } from './icons/LogoPlaceholder2';
import { LogoPlaceholder3 } from './icons/LogoPlaceholder3';
import { LogoPlaceholder4 } from './icons/LogoPlaceholder4';
import { LogoPlaceholder5 } from './icons/LogoPlaceholder5';
import { LogoPlaceholder6 } from './icons/LogoPlaceholder6';
import { LogoPlaceholder7 } from './icons/LogoPlaceholder7';
import { LogoPlaceholder8 } from './icons/LogoPlaceholder8';

const logos = [
    { name: 'Placeholder 1', Icon: LogoPlaceholder1 },
    { name: 'Placeholder 2', Icon: LogoPlaceholder2 },
    { name: 'Placeholder 3', Icon: LogoPlaceholder3 },
    { name: 'Placeholder 4', Icon: LogoPlaceholder4 },
    { name: 'Placeholder 5', Icon: LogoPlaceholder5 },
    { name: 'Placeholder 6', Icon: LogoPlaceholder6 },
    { name: 'Placeholder 7', Icon: LogoPlaceholder7 },
    { name: 'Placeholder 8', Icon: LogoPlaceholder8 },
];

const Marquee: React.FC<{ children: React.ReactNode, direction?: 'left' | 'right' }> = ({ children, direction = 'left' }) => (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className={`flex min-w-full shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee-${direction}`}>
            {children}
        </div>
        <div className={`flex min-w-full shrink-0 items-center justify-around gap-12 motion-safe:animate-marquee-${direction}`} aria-hidden="true">
            {children}
        </div>
    </div>
);

const Integrations: React.FC = () => {
    return (
        <section id="integrations" className="py-26">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-text-primary mb-4 text-balance">Connect Your Entire Digital Universe</h2>
                    <p className="text-xl text-text-muted max-w-reading mx-auto font-light text-pretty">
                        Synergize integrates seamlessly with the tools your team already loves.
                    </p>
                </div>
                <div className="space-y-8">
                    <Marquee direction="left">
                        {logos.slice(0, 8).map(({ name, Icon }) => (
                            <div key={name} aria-label={name} className="flex-shrink-0">
                                <Icon className="h-12 w-auto text-text-muted transition-opacity duration-300 opacity-65 hover:opacity-100 focus-visible:opacity-100" />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee direction="right">
                        {logos.slice(0, 8).map(({ name, Icon }) => (
                            <div key={name} aria-label={name} className="flex-shrink-0">
                                <Icon className="h-12 w-auto text-text-muted transition-opacity duration-300 opacity-65 hover:opacity-100 focus-visible:opacity-100" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Integrations;