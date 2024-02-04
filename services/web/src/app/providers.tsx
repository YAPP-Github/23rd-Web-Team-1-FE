'use client';

import { lightThemeVars, darkThemeVars } from '@linker/styles';
import MyProviders from '@providers/MyProviders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import { setTokens } from '@utils/token/client';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 6e5, // 10분
            gcTime: 9e5, // 15분
          },
        },
      }),
  );

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        value={{
          light: lightThemeVars,
          dark: darkThemeVars,
        }}
      >
        <MyProviders>{children}</MyProviders>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
