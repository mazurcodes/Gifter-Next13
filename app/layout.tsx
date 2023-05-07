import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Toastify from './components/Toastify';

const inter = Inter({
  weight: ['300', '400', '600', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gifter | Gifts made easy',
  description: 'Gifter app for those that want to receive meaningful gifts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <div className="main-wrapper flex flex-col min-h-screen max-w-7xl mx-auto">
          {children}
          <Footer />
          <Toastify />
        </div>
      </body>
    </html>
  );
}
