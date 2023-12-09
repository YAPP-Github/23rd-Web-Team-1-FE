import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalStyle } from './constants/style.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <style>
        {Object.values(GlobalStyle)
          .map((className) => `.${className}`)
          .join(' ')}
      </style>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
