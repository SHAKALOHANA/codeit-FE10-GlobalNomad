import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Providers} from './providers/ReactQueryProvider';
import { ProfileProvider } from './context/ProfileContext';
import Script from 'next/script';
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
          <Script
          src="https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9070eccd51c9a7ceee9493b2835e12f7&libraries=services"
          strategy="beforeInteractive"
        />
            {children}
            <div id="portal" />
          <Footer />
        </ProfileProvider>
        </Providers>
      </body>
    </html>
  );
}
