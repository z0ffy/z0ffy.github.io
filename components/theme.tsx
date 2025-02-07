import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Moon from './icons/moon';
import Sun from './icons/sun';

/**
 * A simple theme toggle that switches between 'light' and 'dark' mode.
 * If process.env.theme isn't 'both', the toggle remains hidden.
 */
export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration errors by ensuring the component
  // doesn't render icons until the client is mounted.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null if environment is not configured for theme toggling
  if (process.env.theme !== 'both') return null;

  // If we haven't mounted yet, do not render icons to avoid SSR mismatches
  if (!mounted) return null;

  // If you want "system" theme to behave as 'light' or 'dark', 
  // use a condition like (theme === 'system' && systemTheme === 'light').
  const isLight = theme === 'light' || (theme === 'system' && systemTheme === 'light');

  return isLight ? (
    <Moon
      width="2em"
      height="2em"
      style={{ cursor: 'pointer' }}
      onClick={() => setTheme('dark')}
    />
  ) : (
    <Sun
      width="2em"
      height="2em"
      style={{ cursor: 'pointer' }}
      onClick={() => setTheme('light')}
    />
  );
}
