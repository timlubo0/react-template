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
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/auth';
import { Routes } from '../navigation/Routes';


const queryClient = new QueryClient();
        
export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const login = useAuth();

  React.useEffect(() => { 
    if(!login.isLoggedIn){
      router.push(Routes.login);
    } 
  }, [router.pathname, login.isLoggedIn]);


  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
