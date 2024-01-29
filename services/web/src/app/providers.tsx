'use client';

import { lightThemeVars, darkThemeVars } from '@linker/styles';
import { useRouter, useSearchParams } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import { setTokens } from '@utils/token/client';

export function Providers({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken == null || refreshToken == null) {
      return;
    }

    setTokens(accessToken, refreshToken);

    router.replace('/my/feed', { shallow: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
