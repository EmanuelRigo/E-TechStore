import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, useNavigate, useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";

import "../stylesheets/Navbarbookshop.css";

import { useState } from "react";

function Navbarbookshop() {
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange = (event) => {
    setInputValue2(event.target.value);
  };

  const categoriaBuscada = useLocation();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      funcionBuscar2();
    }
  };

  const funcionBuscar2 = () => {
    if (categoriaBuscada.pathname.includes("/categoria/")) {
      navigate(`?busqueda=${inputValue2} `);
      setInputValue2("");
    } else {
      navigate(`/?busqueda=${inputValue2} `);
      setInputValue2("");
    }
  };

  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="my-3 rounded container"
    >
      <Container fluid>
        <Link className="navbar-brand text-white" to="/">
          E-TechStore
        </Link>

        <div>
          <CartWidget></CartWidget>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/compras">
              Compras
            </Link>
            <Link className="nav-link" to="/favoritos">
              Favoritos
            </Link>
            <NavDropdown
              title="Categorias"
              className="bg-dark"
              id="basic-nav-dropdown"
            >
              <Link
                value="notebooks"
                className="dropdown-item"
                to={`/categoria/notebooks`}
              >
                Notebooks
              </Link>
              <Link
                value="gaming"
                className="dropdown-item"
                to={`/categoria/gaming`}
              >
                Gaming
              </Link>
              <Link
                value="phones"
                className="dropdown-item"
                to={`/categoria/phones`}
              >
                Phones
              </Link>
              <Link
                value="games"
                className="dropdown-item"
                to={`/categoria/games`}
              >
                Games
              </Link>
              <Link
                value="monitors"
                className="dropdown-item"
                to={`/categoria/monitors`}
              >
                Monitores
              </Link>
            </NavDropdown>
          </Nav>
          <Row>
            <Col className="d-flex input-group ">
              <button className="btn btn-verde-neon" onClick={funcionBuscar2}>
                Buscar
              </button>
              <input
                type="text"
                className="form-control"
                value={inputValue2}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbookshop;
