import { createContext, useContext, ReactNode } from 'react';
import { useThemeColor, ThemeColorPreset } from '../hooks/useThemeColor';

interface ThemeColorContextType {
  preset: ThemeColorPreset;
  changePreset: (preset: ThemeColorPreset) => void;
  presets: ThemeColorPreset[];
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export function useThemeColorContext() {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error('useThemeColorContext must be used within ThemeColorProvider');
  }
  return context;
}

export default function ThemeColorProvider({ children }: { children: ReactNode }) {
  const themeColor = useThemeColor();

  return (
    <ThemeColorContext.Provider value={themeColor}>
      {children}
    </ThemeColorContext.Provider>
  );
}
