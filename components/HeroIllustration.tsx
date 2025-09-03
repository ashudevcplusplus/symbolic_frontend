import React from 'react';

export const HeroIllustration: React.FC<{isIgnited: boolean}> = ({isIgnited}) => (
<svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
    <defs>
        <linearGradient id="gradCore" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--brand-gradient-from))" />
            <stop offset="100%" stopColor="hsl(var(--brand-gradient-to))" />
        </linearGradient>
        <linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--brand-primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--brand-primary))" />
            <stop offset="100%" stopColor="hsl(var(--brand-primary))" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <style>
        {`
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes gentle-pulse {
              0%, 100% { opacity: 0.7; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }
             @keyframes dash-flow {
                to { stroke-dashoffset: -1000; }
            }
        `}
        </style>
    </defs>

    <g transform="translate(200 200)" className={`transition-all duration-700 ease-orbital ${isIgnited ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <g transform="rotate(-8)">
        {/* Main Arc */}
        <path d="M -150 -150 A 212 212 0 0 1 150 -150" stroke="hsl(var(--surface-3))" strokeWidth="1" />
        <path d="M -150 -150 A 212 212 0 0 1 150 -150" stroke="url(#gradRing)" strokeWidth="2" strokeDasharray="4 8" className="motion-safe:animate-[dash-flow_30s_linear_infinite]" />

        {/* Inner Arc */}
         <path d="M -120 -120 A 170 170 0 0 1 120 -120" stroke="hsl(var(--surface-3))" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Ticks and elements on arc */}
        <g stroke="hsl(var(--text-muted))" strokeWidth="1">
            <path d="M -150 -150 l 5 5" />
            <path d="M 150 -150 l -5 5" />
            <path d="M 0 -212.13 l 0 10" />
        </g>
        
        {/* Blips */}
        <circle cx="-106" cy="-184" r="3" fill="hsl(var(--brand-primary))" filter="url(#glow)" className="motion-safe:animate-[gentle-pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        <circle cx="106" cy="-184" r="3" fill="hsl(var(--accent-mid))" filter="url(#glow)" className="motion-safe:animate-[gentle-pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />

        {/* Central element */}
        <g transform="translate(0, -50)">
            <circle cx="0" cy="0" r="20" fill="hsl(var(--surface-1))" />
            <path d="M -10 0 A 10 10 0 0 1 10 0" stroke="hsl(var(--accent-primary))" strokeWidth="1.5" />
        </g>

        {/* Geometric connections */}
        <g stroke="hsl(var(--surface-3))" strokeWidth="0.5" strokeDasharray="3 3">
            <path d="M -106 -184 L -20 -58" />
            <path d="M 106 -184 L 20 -58" />
            <path d="M 0 -212 L 0 -70" />
        </g>
      </g>
    </g>
</svg>
);