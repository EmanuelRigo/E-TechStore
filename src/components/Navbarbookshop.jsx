import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
      bg="danger"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          BookShop
        </Link>

        <div className="navbar__search">
          <Form.Control
            placeholder="buscar"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={handleOnChangeNavBar}
          />
          <Link to={`?busqueda=${inputValue} `}>buscar</Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CartWidget></CartWidget>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Compras</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbookshop;
