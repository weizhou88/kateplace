import Head from 'next/head'
import Navbanner from './navbanner'
import { useEffect } from 'react'

export default function layout({ children }) {
  useEffect(() => {
    // document.documentElement.style.setProperty(
    //   '--nav-height', `${document.getElementById("navbar")?.offsetHeight}px`);
  })
  
  return (
    <div>
      <Head>
        <title>Kateplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>

      <div className= "container-fluid">
        <Navbanner></Navbanner>
        {children}
      </div>
    </div>
  )
}
