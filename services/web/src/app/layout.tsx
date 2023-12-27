import '@linker/styles/src/nomalize.css';
import '@linker/styles';

import { pretendard } from '@fonts/pretendard';
import type { Metadata } from 'next';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'linker',
  description: 'linker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
