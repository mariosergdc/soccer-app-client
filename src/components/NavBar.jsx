import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand-link">
            Fútbol Tacajó
          </Link>
        </Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calendar">Calendario</NavLink>
          <Nav.Link href="#about">About</Nav.Link>
          <NavLink to="/player-form">Insertar Jugador</NavLink>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/1.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
