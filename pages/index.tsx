import style from '../styles/index.module.css'
import Layout from "../components/layout"
import { Dropdown } from 'react-bootstrap'

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
            <h3 className={style.intro_head}>
              You are in Kate place!
            </h3>
            <label className={style.intro_detail}>Explore my artworks at age:</label>
            <select name="age" id="age">
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <Dropdown.Menu>
              <Dropdown.Item>8</Dropdown.Item>
            </Dropdown.Menu>
          </div>             
        </div>
      </Layout>
    </div>
  )
}
