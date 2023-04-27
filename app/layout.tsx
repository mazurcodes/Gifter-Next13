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
