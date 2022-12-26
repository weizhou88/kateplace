import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/layout.module.css'

export default function layout({ children }) {
  return (
    <div>
      <Head>
        <title>Kateplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>

      <div className= "container-fluid">
        <nav className= {style.nav}>
          <div className= {style.logo}>
            <a href="./"><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></a>
          </div>
          <div id="mainListDiv" className={style.main_list}>
            <ul className={style.navlinks}>
              <li><Link href={'./drawings'} className={style.link}>My drawings</Link></li>
              <li><Link href={'./paintings'} className={style.link}>My paintings</Link></li>
              <li><Link href={'./graphics'} className={style.link}>My graphics</Link></li>
              <li><Link href={'./animations'} className={style.link}>My animations</Link></li>
            </ul> 
          </div>
        </nav>
        {children}
      </div>
    </div>
  )
}
