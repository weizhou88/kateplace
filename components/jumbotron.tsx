import { useContext } from 'react'
import AppContext from '../AppContext'
import style from '../styles/jumbotron.module.css'

export default function jumbotron() {
  const value = useContext(AppContext)
  const ageSelected = (event) =>{
    console.log(value?.state.ageSelected);
    let setAgeSelected = value?.setAgeSelected;
    console.log(setAgeSelected);
    setAgeSelected?(event.target.value, ()=>{console.log(value?.state.ageSelected)}):()=>{};
  }
  
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
        <label className={style.intro_detail}>Explore my artworks at age:</label>
        <select name="age" id="age" onChange={ageSelected}>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>             
    </div>
  )
}
