import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './Footer';
import './globals.css';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LML Digitals | Marketing and Software Development',
  description:
    'LML Digitals is a leading marketing and software development company dedicated to transforming businesses with innovative digital solutions.',
  keywords:
    'marketing, software development, digital solutions, business transformation, LML Digitals',
  authors: [{ name: 'LML Digitals', url: 'https://www.lmldigitals.com' }],
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'LML Digitals | Marketing and Software Development',
    description:
      'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
    type: 'website',
    url: 'https://www.lmldigitals.com',
    images: [
      {
        url: '/app/opengraph-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LMLDigitals',
    title: 'LML Digitals | Marketing and Software Development',
    description:
      'Transform your business with innovative digital solutions from LML Digitals, a leader in marketing and software development.',
    images: ['/images/twitter-image.jpg'], // Relative path to the image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DR17LYS00W"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DR17LYS00W');
            `,
        }}
      />
    </html>
  );
}
