import React from 'react';

export const PlugIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22v-5"></path>
    <path d="M9 8V2"></path>
    <path d="M15 8V2"></path>
    <path d="M18 8h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"></path>
    <path d="M6 8H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"></path>
    <path d="M12 17a2.5 2.5 0 0 0-2.5-2.5H7a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 17 15h-2.5A2.5 2.5 0 0 0 12 17Z"></path>
  </svg>
);
