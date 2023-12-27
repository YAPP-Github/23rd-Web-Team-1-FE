'use client';

import { lightThemeVars, darkThemeVars } from '@linker/styles';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightThemeVars,
        dark: darkThemeVars,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
