import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Menu from "../components/common/menu/Menu";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <QueryClientProvider client={queryClient}>
          <Header/>
          <Menu/>
          <Component {...pageProps} />
          <Footer/>
      </QueryClientProvider>
  )
}
export default MyApp;
