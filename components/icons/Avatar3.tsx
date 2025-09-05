import React from 'react';

export const Avatar3: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="avatar3-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#38bdf8" />
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
      <circle cx="50" cy="50" r="40" fill="url(#avatar3-grad)" />
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="#38bdf8"
        strokeWidth="2"
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
        E
      </text>
    </g>
  </svg>
);
