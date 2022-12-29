import style from '../styles/navbanner.module.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import { useEffect } from 'react'

export default function navbanner() {
  useEffect(()=>{
    const ageSelector:HTMLElement|null = document.getElementById("age");
    let age = sessionStorage.getItem('age');
    if(ageSelector && age){
      (ageSelector as HTMLSelectElement).value = age;
    } 
  });

  const ageSelected = (event) =>{
    sessionStorage.setItem('age', event.target.value)
  }

  return (
    <Navbar bg='light' expand='lg' className={style.nav}>
      <Container>
        <Navbar.Brand href=""><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Link href="./" className={style.link}>Home</Link>
            <Link href="drawings" className={style.link}>Drawing</Link>
            <Link href="./paintings" className={style.link}>Painting</Link>
            <Link href="./graphics" className={style.link}>Graphics</Link>
            <Link href="./animations" className={style.link}>Animation</Link>
            <label className={style.ageLabel}>age: </label>
            <select name="age" id="age" className={style.ageSelector} onChange={ageSelected}>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
