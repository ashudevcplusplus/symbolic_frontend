import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Theme, themes } from '../contexts/ThemeContext';
import {
  SunIcon,
  MoonIcon,
  EclipseIcon,
  SparklesIcon,
  ContrastIcon,
  CosmicDawnIcon,
} from './icons/ThemeIcons';

const themeConfig: Record<Theme, { icon: React.ReactNode; label: string }> = {
  dawn: { icon: <SunIcon className="w-5 h-5" />, label: 'Dawn' },
  dusk: { icon: <MoonIcon className="w-5 h-5" />, label: 'Dusk' },
  eclipse: { icon: <EclipseIcon className="w-5 h-5" />, label: 'Eclipse' },
  nebula: { icon: <SparklesIcon className="w-5 h-5" />, label: 'Nebula' },
  'cosmic-dawn': {
    icon: <CosmicDawnIcon className="w-5 h-5" />,
    label: 'Cosmic Dawn',
  },
  hicon: { icon: <ContrastIcon className="w-5 h-5" />, label: 'High Contrast' },
};

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

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

  const currentThemeConfig = themeConfig[theme] || themeConfig.dusk;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--surface-1)/.65)] backdrop-blur-[var(--glass-blur)] transition-colors focus:outline-none focus-visible:shadow-focus-glow u-stroke-1 hover:shadow-z1"
        aria-label={`Change theme. Current theme: ${currentThemeConfig.label}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentThemeConfig.icon}
      </button>
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 rounded-xl py-1 z-50 transition-opacity motion-safe:transform-gpu u-stroke-1"
          style={{
            willChange: 'opacity, transform',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
          }}
        >
          {themes.map((t) => {
            const config = themeConfig[t];
            if (!config) return null;
            return (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm transition-colors rounded-xl ${
                  theme === t
                    ? 'text-accent-primary shadow-[0_0_0_2px_var(--accent-ring)]'
                    : 'text-text-secondary hover:bg-[hsl(var(--accent-primary)/.08)] hover:text-text-primary'
                }`}
              >
                {config.icon}
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
