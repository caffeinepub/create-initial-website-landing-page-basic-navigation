import { useEffect, useState } from 'react';

export type ThemeColorPreset = 'terracotta' | 'ocean' | 'forest' | 'sunset' | 'purple';

interface ThemeColors {
  light: {
    primary: string;
    primaryForeground: string;
    accent: string;
    accentForeground: string;
    ring: string;
  };
  dark: {
    primary: string;
    primaryForeground: string;
    accent: string;
    accentForeground: string;
    ring: string;
  };
}

const themePresets: Record<ThemeColorPreset, ThemeColors> = {
  terracotta: {
    light: {
      primary: 'oklch(0.55 0.15 35)',
      primaryForeground: 'oklch(0.98 0.01 35)',
      accent: 'oklch(0.65 0.12 35)',
      accentForeground: 'oklch(0.98 0.01 35)',
      ring: 'oklch(0.55 0.15 35)',
    },
    dark: {
      primary: 'oklch(0.65 0.15 35)',
      primaryForeground: 'oklch(0.15 0.02 35)',
      accent: 'oklch(0.55 0.12 35)',
      accentForeground: 'oklch(0.98 0.01 35)',
      ring: 'oklch(0.65 0.15 35)',
    },
  },
  ocean: {
    light: {
      primary: 'oklch(0.50 0.15 240)',
      primaryForeground: 'oklch(0.98 0.01 240)',
      accent: 'oklch(0.60 0.12 240)',
      accentForeground: 'oklch(0.98 0.01 240)',
      ring: 'oklch(0.50 0.15 240)',
    },
    dark: {
      primary: 'oklch(0.60 0.15 240)',
      primaryForeground: 'oklch(0.15 0.02 240)',
      accent: 'oklch(0.50 0.12 240)',
      accentForeground: 'oklch(0.98 0.01 240)',
      ring: 'oklch(0.60 0.15 240)',
    },
  },
  forest: {
    light: {
      primary: 'oklch(0.45 0.12 150)',
      primaryForeground: 'oklch(0.98 0.01 150)',
      accent: 'oklch(0.55 0.10 150)',
      accentForeground: 'oklch(0.98 0.01 150)',
      ring: 'oklch(0.45 0.12 150)',
    },
    dark: {
      primary: 'oklch(0.55 0.12 150)',
      primaryForeground: 'oklch(0.15 0.02 150)',
      accent: 'oklch(0.45 0.10 150)',
      accentForeground: 'oklch(0.98 0.01 150)',
      ring: 'oklch(0.55 0.12 150)',
    },
  },
  sunset: {
    light: {
      primary: 'oklch(0.60 0.18 50)',
      primaryForeground: 'oklch(0.98 0.01 50)',
      accent: 'oklch(0.70 0.15 50)',
      accentForeground: 'oklch(0.15 0.02 50)',
      ring: 'oklch(0.60 0.18 50)',
    },
    dark: {
      primary: 'oklch(0.70 0.18 50)',
      primaryForeground: 'oklch(0.15 0.02 50)',
      accent: 'oklch(0.60 0.15 50)',
      accentForeground: 'oklch(0.98 0.01 50)',
      ring: 'oklch(0.70 0.18 50)',
    },
  },
  purple: {
    light: {
      primary: 'oklch(0.50 0.18 300)',
      primaryForeground: 'oklch(0.98 0.01 300)',
      accent: 'oklch(0.60 0.15 300)',
      accentForeground: 'oklch(0.98 0.01 300)',
      ring: 'oklch(0.50 0.18 300)',
    },
    dark: {
      primary: 'oklch(0.60 0.18 300)',
      primaryForeground: 'oklch(0.15 0.02 300)',
      accent: 'oklch(0.50 0.15 300)',
      accentForeground: 'oklch(0.98 0.01 300)',
      ring: 'oklch(0.60 0.18 300)',
    },
  },
};

const STORAGE_KEY = 'theme-color-preset';
const DEFAULT_PRESET: ThemeColorPreset = 'terracotta';

// Validate that a string is a valid preset
function isValidPreset(value: string): value is ThemeColorPreset {
  return value in themePresets;
}

export function useThemeColor() {
  const [preset, setPreset] = useState<ThemeColorPreset>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Validate stored value and fall back to default if invalid
    if (stored && isValidPreset(stored)) {
      return stored;
    }
    return DEFAULT_PRESET;
  });

  const applyThemeColors = (selectedPreset: ThemeColorPreset) => {
    // Guard against invalid presets
    if (!isValidPreset(selectedPreset)) {
      console.warn(`Invalid theme preset: ${selectedPreset}, falling back to ${DEFAULT_PRESET}`);
      selectedPreset = DEFAULT_PRESET;
    }

    const isDark = document.documentElement.classList.contains('dark');
    const colors = themePresets[selectedPreset][isDark ? 'dark' : 'light'];
    
    const root = document.documentElement;
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-foreground', colors.primaryForeground);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-foreground', colors.accentForeground);
    root.style.setProperty('--ring', colors.ring);
  };

  useEffect(() => {
    // Apply theme colors on mount and when preset changes
    applyThemeColors(preset);

    // Watch for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          applyThemeColors(preset);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [preset]);

  const changePreset = (newPreset: ThemeColorPreset) => {
    // Validate before applying
    if (!isValidPreset(newPreset)) {
      console.warn(`Invalid theme preset: ${newPreset}, ignoring change`);
      return;
    }
    
    setPreset(newPreset);
    localStorage.setItem(STORAGE_KEY, newPreset);
    applyThemeColors(newPreset);
  };

  return {
    preset,
    changePreset,
    presets: Object.keys(themePresets) as ThemeColorPreset[],
  };
}
