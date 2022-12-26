import style from '../styles/index.module.css'
import Layout from "../components/layout"
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Layout>
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
              Click the button to check out my artworks!
            </p>
            <h3 className={style.intro_head} id={style.intro_head_small}>
              You are in Kate place!
            </h3>
            <p className={style.intro_detail} id={style.intro_detail_small}>
              Click the button to check out my artworks.
            </p>
            <Link href={'https://www.google.com'} className="btn btn-primary">
              MY DRAWINGS
            </Link>
            <a href="./drawings">
              MY DRAWINGS a link
            </a>
          </div>   
        </div>
      </Layout>
    </div>
  )
}
