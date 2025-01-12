import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactQueryProvider from './providers/ReactQueryProvider';
import './global.css';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <ReactQueryProvider>
          {children}
          <div id="portal" />
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
