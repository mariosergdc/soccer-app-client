import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function NavBar() {
  const location = useLocation();
  const { loggedIn } = useContext(AuthContext);

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
          {loggedIn && (
            <>
              <Nav.Link
                as={Link}
                to="/create-team"
                className={location.pathname === "/create-team" ? "active" : ""}
              >
                Insertar Equipo
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/teams-page-admin"
                className={
                  location.pathname === "/teams-page-admin" ? "active" : ""
                }
              >
                Administrar Equipos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/matches-page-admin"
                className={
                  location.pathname === "/matches-page-admin" ? "active" : ""
                }
              >
                Administrar Partidos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/players-page-admin"
                className={
                  location.pathname === "/players-page-admin" ? "active" : ""
                }
              >
                Administrar Jugadores
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/create-player"
                className={
                  location.pathname === "/create-player" ? "active" : ""
                }
              >
                Insertar Jugador
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/create-match"
                className={
                  location.pathname === "/create-match" ? "active" : ""
                }
              >
                Crear Partido
              </Nav.Link>
            </>
          )}
          <Nav.Link
            as={Link}
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
