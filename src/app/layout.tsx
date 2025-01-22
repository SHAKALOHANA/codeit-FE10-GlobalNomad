import type { Metadata } from 'next';
import { Providers } from './providers/ReactQueryProvider';
import { ProfileProvider } from './context/ProfileContext';
import Script from 'next/script';
import './global.css';
import ClientLayout from '../components/ClientLayout';

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

          <Script
          src="https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9070eccd51c9a7ceee9493b2835e12f7&libraries=services"
          strategy="beforeInteractive"
        />
          <ProfileProvider>
          <ClientLayout>
            {children}
            <div id="portal" />
          </ClientLayout>
          </ProfileProvider>
        </Providers>
      </body>
    </html>
  );
}
