import style from '../styles/navbanner.module.css'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

export default function navbanner() {
  return (
    <Navbar bg='light' expand='lg' className={style.nav}>
      <Container>
        <Navbar.Brand href=""><img src="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="drawings">Drawing</Nav.Link>
            <Nav.Link href="./paintings">Painting</Nav.Link>
            <Nav.Link href="./graphics">Graphics</Nav.Link>
            <Nav.Link href="./animations">Animation</Nav.Link>
            <NavDropdown title="age">
              <NavDropdown.Item href="#action/8">8</NavDropdown.Item>
              <NavDropdown.Item href="#action/9">9</NavDropdown.Item>
              <NavDropdown.Item href="#action/10">10</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
