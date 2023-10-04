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
  const { navBarCategory, funcionBuscar, setInputValue } = useContext(contexto);

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
          <Link to={"/"} onClick={funcionBuscar}>
            buscar
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {uniqueCategories.map((category) => (
                <Link
                  key={category}
                  value={category}
                  className="dropdown-item"
                  to={`/categoria/${category}`}
                >
                  {category}
                </Link>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbookshop;
