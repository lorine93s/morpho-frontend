'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { Toaster } from '@/components/ui/toaster';
import AppProvider from '@/contexts/AppContext';
import apolloClient from '@/lib/apollo-client';
import { cn } from '@/lib/utils';
import { ApolloProvider } from '@apollo/client';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
import { roboto } from './fonts';

import './globals.css';

const config = getDefaultConfig({
  appName: 'morpho-frontend',
  projectId: '134f0e99f1b28f5fc5482a9ac6126a51',
  chains: [mainnet, base],
  ssr: true
});

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(roboto.className, 'bg-[#131719] text-white')}>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <ApolloProvider client={apolloClient}>
              <RainbowKitProvider>
                <AppProvider>
                  <Header />
                  <div className="container min-h-[calc(100vh-220px)] min-w-[100vw]">{children}</div>
                  <Footer />
                  <Toaster />
                </AppProvider>
              </RainbowKitProvider>
            </ApolloProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
