import style from '../styles/jumbotron.module.css'

export default function jumbotron() {

  return (
    <div className= {style.jumbotron}>
      <div className= {style.jumbotron_background}>
        <img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings53-512.png" className={style.blur} />
        <img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/drawings/a8/drawings60-512.png" className={`${style.blur} ${style.top}`} />
      </div>

      <div className={style.intro_container}>
        <h3 className={style.intro_head}>
          You are in Kate place!
        </h3>
        <label className={style.intro_detail}>Explore my artworks at all ages.</label>
      </div>             
    </div>
  )
}
