import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import NoSSR from 'react-no-ssr'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    sessionStorage.setItem('age', '8');
  }, []);

  return (
  <NoSSR>
      <Component {...pageProps} />
  </NoSSR>
  )
}
