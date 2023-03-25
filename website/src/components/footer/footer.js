import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './footer.css';


function HeaderNavbar() {
  return (
    <Navbar expand="lg" >
      <Container fluid >
        <Navbar.Brand href="#">
            <img
              src={"/images/RabinAkram-nopauseagency-logo.webp"}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Rabin Akram - Unlock your growth potential with NoPause Agency's high-quality User Generated Content."
            />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end "
            style={{ maxHeight: '100px', width: '98%' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <span className="navbar-divider"></span>
            <Nav.Link href="#about">Our Story</Nav.Link>
            <span className="navbar-divider"></span>
            <Nav.Link href="#services">Services</Nav.Link>
            <span className="navbar-divider"></span>
            <Nav.Link href="#results">Impactful Results</Nav.Link>
            <span className="navbar-divider"></span>
            <Nav.Link href="#contact">Let's Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;