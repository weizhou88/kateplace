import { useEffect, useContext } from 'react'
import AppContext from '../AppContext'
import style from '../styles/jumbotron.module.css'

export default function jumbotron() {
  const value = useContext(AppContext)

  // useEffect(() => {
  //   if(value){
  //     sessionStorage.setItem('age', value.state.ageSelected)
  //   }
  //   console.log(value?.state.ageSelected)    
  // }, [])

  const ageSelected = (event) =>{
    sessionStorage.setItem('age', event.target.value)
    // console.log(value?.state.ageSelected);
    // value?.setAgeSelected?(event.target.value):()=>{};
    // if(value){
    //   value.state.ageSelected = event.target.value;
    // }
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
