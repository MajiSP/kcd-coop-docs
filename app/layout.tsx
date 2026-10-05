import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://majisp.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/`),
  title: { default: 'KCD Co-op', template: '%s | KCD Co-op' },
  description: 'Documentation for KCD Co-op, the multiplayer platform for Kingdom Come: Deliverance II.',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
