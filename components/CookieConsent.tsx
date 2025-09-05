import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  policyHref?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  policyHref = '/privacy',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a short delay to avoid being intrusive
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize analytics, etc.
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    // Here you would disable non-essential cookies
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div
        className="max-w-4xl mx-auto rounded-lg p-6 shadow-z3"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
          boxShadow: 'var(--elevation-z3)',
          border: 'inset 0 0 0 1px hsl(var(--surface-3) / .6)',
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3
              id="cookie-title"
              className="text-lg font-semibold text-text-primary mb-2"
            >
              We use cookies
            </h3>
            <p id="cookie-description" className="text-text-secondary text-sm">
              We use cookies to enhance your experience and analyze our traffic.
              By continuing to use our site, you agree to our{' '}
              <a
                href={policyHref}
                className="text-accent-primary hover:text-accent-mid underline focus:outline-none focus-visible:shadow-focus-glow"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-text-secondary hover:text-text-primary border border-surface-2 rounded-md hover:bg-surface-1 transition-colors focus:outline-none focus-visible:shadow-focus-glow"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-accent-primary text-white rounded-md hover:bg-accent-mid transition-colors focus:outline-none focus-visible:shadow-focus-glow"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
