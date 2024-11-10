import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar id="nav" data-bs-theme="dark">
        <Container id="nav-cont">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Create</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;