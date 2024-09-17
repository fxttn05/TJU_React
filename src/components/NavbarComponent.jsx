import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import { useState, useEffect } from 'react';
import Icon from "../assets/TJU.png"
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor)
  });
  return (
      <div className="background">
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
          <Container>
            <Navbar.Brand href="/" className=' d-flex gap-2 gap-md-3 align-items-center'>
              <img src={Icon} alt="Icon Tangkal Jati Utama" />
              <p className="fw-bold">Tangkal Jati Utama</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="px-4 gap-lg-5 nav-link text-white rounded-3 fw-bold mt-2 mt-md-0">
                <Nav.Link href="#Aboutus">About Us</Nav.Link>
                <Nav.Link href="#Bussec">Business Sector</Nav.Link>
                <Nav.Link href="#Aboutus">Summary</Nav.Link>
                <Nav.Link href="#Aboutus">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

export default NavbarComponent