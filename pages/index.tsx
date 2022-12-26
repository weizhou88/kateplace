import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kateplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>

      <div className= "container-fluid">
        <nav className= "nav">
          <div className= "logo">
            <a href="./"><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li><Link href={''} className="link">My drawings</Link></li>
              <li><Link href={''} className="link">My paintings</Link></li>
              <li><Link href={''} className="link">My graphics</Link></li>
              <li><Link href={''} className="link">My animations</Link></li>
            </ul> 
          </div>
        </nav>
        <div className= {style.jumbotron}>
          <div className= {style.jumbotron_background}>
            <img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings53-512.png" className={style.blur} />
            <img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings60-512.png" className={`${style.blur} ${style.top}`} />
          </div>

          <div className={style.intro_container}>
            <h3 className={style.intro_head} id={style.intro_head_big}>
              You are in Kate place!
            </h3>
            <p className={style.intro_detail} id={style.intro_detail_big}>
              Click the button to check out my art works!
            </p>
            <h3 className={style.intro_head} id={style.intro_head_small}>
              You are in Kate place!
            </h3>
            <p className={style.intro_detail} id={style.intro_detail_small}>
              Click the button to check out my art works.
            </p>
            <a href="./drawing" className="btn btn-primary">MY DRAWINGS</a>
          </div>   
        </div>
      </div>
    </div>
  )
}
