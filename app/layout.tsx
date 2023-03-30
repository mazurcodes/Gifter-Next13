import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({
  weight: ['300', '400', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gifter | Giving made easy',
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
        <div className="main-wrapper flex flex-col min-h-screen">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
