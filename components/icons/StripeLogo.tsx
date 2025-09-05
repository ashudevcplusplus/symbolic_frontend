import React from 'react';
export const StripeLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="100"
    height="32"
    viewBox="0 0 88 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 16c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12s-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12z" />
    <path d="M40 16c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12 12 5.4 12 12z" />
    <path d="M52 8c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H56c-2.2 0-4-1.8-4-4V8z" />
    <path d="M84 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
  </svg>
);
