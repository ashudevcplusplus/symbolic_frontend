import React, { useState, useRef, useEffect } from 'react';

interface LocaleOption {
  code: string;
  name: string;
  flag: string;
}

interface LocaleSwitcherProps {
  locales?: LocaleOption[];
  current?: string;
}

const defaultLocales: LocaleOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  locales = defaultLocales,
  current = 'en',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentLocale =
    locales.find((locale) => locale.code === current) || locales[0];

  const handleLocaleChange = (localeCode: string) => {
    // In a real app, you would update the app's locale
    console.log('Switching to locale:', localeCode);
    localStorage.setItem('preferred-locale', localeCode);
    setIsOpen(false);

    // You could trigger a page reload or update the app's i18n system here
    // window.location.reload();
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-md bg-glass-bg backdrop-blur-sm transition-colors focus:outline-none focus-visible:shadow-focus-glow u-stroke-1 hover:shadow-z1"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
        }}
        aria-label={`Change language. Current: ${currentLocale.name}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-lg" role="img" aria-label={currentLocale.name}>
          {currentLocale.flag}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 rounded-md py-1 z-50 transition-opacity motion-safe:transform-gpu"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid hsl(var(--surface-3) / .6)',
            willChange: 'opacity, transform',
          }}
        >
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm transition-colors rounded-sm ${
                current === locale.code
                  ? 'text-accent-primary shadow-[0_0_0_2px_var(--accent-ring)]'
                  : 'text-text-secondary hover:bg-accent-tint hover:text-text-primary'
              }`}
              style={{
                backgroundColor:
                  current === locale.code
                    ? 'var(--accent-tint)'
                    : 'transparent',
              }}
            >
              <span role="img" aria-label={locale.name}>
                {locale.flag}
              </span>
              <span>{locale.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
