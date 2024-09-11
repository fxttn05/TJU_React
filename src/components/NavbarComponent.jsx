import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"

const NavbarComponent = () => {
  return (
      <div className="background">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/" className='fs-3 fw-bold'>AyoNgoding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  )
}

export default NavbarComponent