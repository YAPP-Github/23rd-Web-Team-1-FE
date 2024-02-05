import '@linker/styles/src/nomalize.css';
import '@linker/styles';

import { pretendard } from '@fonts/pretendard';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

import getQueryClient from '@utils/getQueryClient';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'linker',
  description: 'linker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Providers>
          <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
        </Providers>
        <div id="portal" />
      </body>
    </html>
  );
}
