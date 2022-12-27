import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import NoSSR from 'react-no-ssr'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import AppContext from "../AppContext"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [ageSelected, setAgeSelected] = useState('9');

  return (
  <NoSSR>
    <AppContext.Provider
      value={{
          state: {
            ageSelected: ageSelected
          },
          setAgeSelected: setAgeSelected
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  </NoSSR>
  )
}
