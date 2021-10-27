import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

const queryClient = new QueryClient();
// @ts-ignore

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
      </QueryClientProvider>
      )
}
export default MyApp
