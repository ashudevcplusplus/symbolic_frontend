// Application constants for better maintainability
export const ANIMATION_DELAYS = {
  HERO_IGNITION: 100, // ms
  FADE_IN_DELAY: 400, // ms
  TRANSITION_DURATION: 300, // ms
} as const;

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1280,
} as const;

export const SPACING = {
  SECTION_VERTICAL: 'py-26',
  CONTAINER_PADDING: 'px-6',
} as const;

export const Z_INDEX = {
  BACKGROUND: 0,
  CONTENT: 10,
  OVERLAY: 20,
  MODAL: 30,
} as const;