import React from 'react';
export const LogoPlaceholder4: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="100"
    height="32"
    viewBox="0 0 100 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="14" />
    <circle cx="32" cy="16" r="14" />
    <path d="M52 2h28v28H52z M56 6h20v20H56z" />
    <path d="M84 2l14 14-14 14-14-14z" />
  </svg>
);
