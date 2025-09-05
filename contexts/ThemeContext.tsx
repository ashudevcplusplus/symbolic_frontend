import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

export type Theme =
  | 'dawn'
  | 'dusk'
  | 'eclipse'
  | 'nebula'
  | 'cosmic-dawn'
  | 'hicon';
export const themes: Theme[] = [
  'dawn',
  'dusk',
  'eclipse',
  'nebula',
  'cosmic-dawn',
  'hicon',
];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dusk';
  }
  try {
    const storedTheme = localStorage.getItem('synergize-theme');
    if (storedTheme && themes.includes(storedTheme as Theme)) {
      return storedTheme as Theme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dusk';
    }
  } catch (e) {
    // Ignore localStorage access errors
  }
  return 'dawn';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, _setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('synergize-theme', theme);
    } catch (e) {
      // Ignore localStorage access errors
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (themes.includes(newTheme)) {
      _setTheme(newTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
