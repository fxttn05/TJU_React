import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import Icon from "../assets/TJU.png"

const NavbarComponent = () => {
  return (
      <div className="background">
        <Navbar expand="lg" className="bg-body-tertiary align-items-center">
          <Container>
            <Navbar.Brand href="/" className=' d-flex gap-3 align-items-center'>
              <img src={Icon} alt="Icon Tangkal Jati Utama" />
              <p className="fw-bold">Tangkal Jati Utama</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="px-4 gap-lg-5 nav-link text-white rounded-3 fw-bold">
                <Nav.Link href="#Aboutus">About Us</Nav.Link>
                <Nav.Link href="#Businesssector">Business Sector</Nav.Link>
                <Nav.Link href="#Summary">Summary</Nav.Link>
                <Nav.Link href="#Contactus">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

export default NavbarComponent