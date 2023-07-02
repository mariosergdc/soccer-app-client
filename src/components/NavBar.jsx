import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="px-2 rounded-bottom"
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className={
          location.pathname === "/"
            ? "active navbar-brand-link"
            : "navbar-brand-link"
        }
      >
        Fútbol Tacajó
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link
            as={Link}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Posiciones
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/calendar"
            className={location.pathname === "/calendar" ? "active" : ""}
          >
            Calendario
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/player-form"
            className={location.pathname === "/player-form" ? "active" : ""}
          >
            Insertar Jugador
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/create-match"
            className={location.pathname === "/create-match" ? "active" : ""}
          >
            Crear Partido
          </Nav.Link>

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
