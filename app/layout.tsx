import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://drive-to-own.com'
      : 'http://localhost:3000',
  ),
  title: 'Work & Pay Tracker — Every Payment, Logged. Permanent.',
  description:
    'Work & Pay Tracker helps vehicle owners track weekly installment payments from riders — every payment logged, timestamped, and permanent. No more disputes over who paid what.',
  openGraph: {
    title: 'Work & Pay Tracker',
    description:
      'Every payment. Logged. Permanent. Track weekly installments on every vehicle you finance, without the notebook or the arguments.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Work & Pay Tracker',
    description:
      'Every payment. Logged. Permanent. Track weekly installments on every vehicle you finance.',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full scroll-smooth',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
