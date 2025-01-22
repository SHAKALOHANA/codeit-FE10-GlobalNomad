import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Providers} from './providers/ReactQueryProvider';
import { ProfileProvider } from './context/ProfileContext';
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
        <Providers>
        <ProfileProvider>
          <Header />
            {children}
            <div id="portal" />
          <Footer />
        </ProfileProvider>
        </Providers>
      </body>
    </html>
  );
}
