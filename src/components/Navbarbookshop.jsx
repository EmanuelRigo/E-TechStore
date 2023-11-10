import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import "../stylesheets/Navbarbookshop.css";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { useContext, useEffect, useState } from "react";
import { contexto } from "./CustomProvider";

function Navbarbookshop() {
  const { navBarCategory, funcionBuscar, setInputValue, inputValue } =
    useContext(contexto);

  ///////////////
  const handleOnChangeNavBar = (e) => {
    const nuevoValor = e.target.value;
    setInputValue(nuevoValor);
  };
  /////////////////

  const uniqueCategories = [
    ...new Set(navBarCategory.map((product) => product.category.name)),
  ];

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
            <Nav.Link href="#home">compras</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown
              title="Categorias"
              className="bg-dark"
              id="basic-nav-dropdown"
            >
              <Link
                value="computers"
                className="dropdown-item"
                to={`/categoria/computers`}
              >
                computers
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
                onChange={handleOnChangeNavBar}
              />
            </Col>
            <Col xs="auto">
              <Link
                className="btn m-1 btn-verde-neon"
                to={`?busqueda=${inputValue} `}
              >
                buscar
              </Link>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbookshop;
