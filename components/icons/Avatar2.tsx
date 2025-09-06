import React from 'react';

export const Avatar2: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="avatar2-grad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
      <filter id="avatar-glow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#avatar-glow)">
      <circle cx="50" cy="50" r="40" fill="url(#avatar2-grad)" />
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="#d946ef"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="50"
        y="65"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="40"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        M
      </text>
    </g>
  </svg>
);
