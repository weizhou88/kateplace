import style from '../styles/navbanner.module.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import AppContext from '../AppContext'
import { useContext } from 'react'

export default function navbanner() {

  const router = useRouter();
  let context = useContext(AppContext);

  useEffect(()=>{
    // document.documentElement.style.setProperty(
    //   '--nav-height', `${document.getElementById("navbar")?.offsetHeight}px`);
    const ageSelector:HTMLElement|null = document.getElementById("age");
    let age = sessionStorage.getItem('age');
    if(!age){
      sessionStorage.setItem('age', '8');
      age='8'
    }
    if(ageSelector){
      (ageSelector as HTMLSelectElement).value = age;
    } 
  });

  const ageSelected = (event) =>{
    sessionStorage.setItem('age', event.target.value)
    context?.setAgeSelected(event.target.value);
  }

  return (
    <Navbar expand='lg' className={style.navbarCustom} id="navbar">
      <Container>
        <Navbar.Brand href=""><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="container-fluid">
            <Nav.Item>
              <Link href="./" className={style.link}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="drawings" className={style.link}>Drawing</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="./paintings" className={style.link}>Painting</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="./graphics" className={style.link}>Graphics</Link>
            </Nav.Item>
            <Nav.Item>  
              <Link href="./animations" className={style.link}>Animation</Link>
            </Nav.Item>
            <Nav.Item className="ms-auto">
              <label className={style.ageLabel}>age: </label>
              <select name="age" id="age" className={style.ageSelector} onChange={ageSelected}>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Nav.Item>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
