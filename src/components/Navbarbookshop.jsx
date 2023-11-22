import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, useNavigate, useLocation, matchPath } from "react-router-dom";
import CartWidget from "./CartWidget";

import "../stylesheets/Navbarbookshop.css";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { useContext, useEffect, useState } from "react";
import { contexto } from "./CustomProvider";

function Navbarbookshop() {
  const { navBarCategory, funcionBuscar, setInputValue, inputValue } =
    useContext(contexto);

  ///////////////
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange = (event) => {
    setInputValue2(event.target.value);
  };
  ////////////

  const categoriaBuscada = useLocation();

  console.log(categoriaBuscada);

  const funcionBuscar2 = () => {
    if (categoriaBuscada.pathname.includes("/categoria/")) {
      navigate(`?busqueda=${inputValue2} `);
      setInputValue2("");
    } else {
      navigate(`/?busqueda=${inputValue2} `);
      setInputValue2("");
    }
  };

  const uniqueCategories = [
    ...new Set(navBarCategory.map((product) => product.category.name)),
  ];

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
              compras
            </Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
                notebooks
              </Link>
              <Link
                value="gaming"
                className="dropdown-item"
                to={`/categoria/gaming`}
              >
                gaming
              </Link>
              <Link
                value="phones"
                className="dropdown-item"
                to={`/categoria/phones`}
              >
                phones
              </Link>
              <Link
                value="games"
                className="dropdown-item"
                to={`/categoria/games`}
              >
                games
              </Link>
              <Link
                value="monitors"
                className="dropdown-item"
                to={`/categoria/monitors`}
              >
                monitores
              </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Row>
            <Col xs="auto">
              <Form.Control
                placeholder="Buscar"
                className=" mr-sm-2"
                value={inputValue2}
                onChange={handleInputChange}
              />
            </Col>
            <Col xs="auto">
              <Button
                className="btn m-1 btn-verde-neon"
                onClick={funcionBuscar2}
              >
                Buscar
              </Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbookshop;
