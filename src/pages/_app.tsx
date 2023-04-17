import '@/styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import "moment/locale/fr";
import React from 'react';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme/theme'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import RouteGuard from '../navigation/RouteGuard';

const queryClient = new QueryClient();
        
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
