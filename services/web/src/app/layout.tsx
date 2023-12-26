import '@linker/styles/src/nomalize.css';
import '@linker/styles';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Providers } from './providers';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/Pretendard-Semibold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
});

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
