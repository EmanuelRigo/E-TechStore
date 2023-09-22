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

function Navbarbookshop({ products }) {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category.name)),
  ];

  /* return  (
    <div>
      <label htmlFor="categorySelect">Selecciona una categoría:</label>
      <select id="categorySelect">
        <option value="">Todas las categorías</option>
        {uniqueCategories.map((category) => (
          <option>
            <Link key={category} value={category} to={`/categoria/${category}`}>
              {category}
            </Link>
          </option>
        ))}
      </select>
    </div>
  ); */
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
          />
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
              {/*              <Link to="/categoria/aventura" className="dropdown-item">
                Aventura
              </Link>
              <Link to="/categoria/terror" className="dropdown-item">
                terror
              </Link>{" "}
              <Link to="/categoria/ciencia" className="dropdown-item">
                ciencia
              </Link> */}
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
