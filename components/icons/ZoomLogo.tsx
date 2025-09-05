import React from 'react';
export const ZoomLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="100"
    height="32"
    viewBox="0 0 64 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    <circle cx="16" cy="16" r="4" />
    <path d="M34 10c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4c0-2.2-1.8-4-4-4z" />
    <path d="M46 8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V10c0-1.1-.9-2-2-2z" />
    <path d="M58 6c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1z" />
  </svg>
);
