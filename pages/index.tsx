import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kateplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>

      <div className= {styles.container_fluid}>
        <nav className= {styles.nav}>
          <div className= {styles.logo}>
            <a href="./home"><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></a>
          </div>
          <div id="mainListDiv" className={styles.main_list}>
            <ul className={styles.navlinks}>
              <Link href={''} className={styles.link}>My drawings</Link>
              <Link href={''} className={styles.link}>My paintings</Link>
              <Link href={''} className={styles.link}>My graphics</Link>
              <Link href={''} className={styles.link}>My animations</Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
