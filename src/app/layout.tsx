import type { Metadata } from 'next';
import { Providers } from './providers/ReactQueryProvider';
import { ProfileProvider } from './context/ProfileContext';
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
