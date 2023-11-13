import { useState, useContext } from "react";
import React from "react";
import { contexto } from "./CustomProvider";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Modal } from "react-bootstrap";

function ConfirmAddress() {
  const { setAddressInfo } = useContext(contexto);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefono, setTelefono] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);
  class AdressClient {
    constructor(name, surname, dni, address, city, country, postalCode, phone) {
      this.name = name;
      this.surname = surname;
      this.dni = dni;
      this.address = address;
      this.city = city;
      this.coutry = country;
      this.postalCode = postalCode;
      this.phone = phone;
    }
  }

  const addressData = new AdressClient(
    nombre,
    apellido,
    dni,
    direccion,
    ciudad,
    provincia,
    codigoPostal,
    telefono
  );

  const handleContinue = () => {
    if (
      nombre.trim() &&
      apellido.trim() &&
      dni.trim() &&
      direccion.trim() &&
      ciudad.trim() &&
      provincia.trim() &&
      codigoPostal.trim() &&
      telefono.trim()
    ) {
      setAddressInfo(addressData);
      setLinkHabilitado(true);
      handleShow();
      console.log(addressData);
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
      console.log("object");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="bg-light p-3  rounded">
        <Row className="g-2 mb-2">
          <Col md={6}>
            <FloatingLabel controlId="floatingInputGrid" label="Nombre">
              <Form.Control
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Nombre"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingInputGrid" label="Apellido">
              <Form.Control
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                type="text"
                placeholder="Apellido"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2 mb-2">
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Direccion">
              <Form.Control
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                type="text"
                placeholder="direccion"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Ciudad">
              <Form.Control
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                type="text"
                placeholder="ciudad"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingSelectGrid" label="Provincia">
              <Form.Select
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                aria-label="Floating label select example"
              >
                <option>Open this select menu</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">
                  Tierra del Fuego, Antártida e Islas del Atlántico Sur
                </option>
                <option value="Tucumán">Tucumán</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Codigo Postal">
              <Form.Control
                value={codigoPostal}
                onChange={(e) => setCodigoPostal(e.target.value)}
                type="number"
                placeholder="Codigo Postal"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Telefono">
              <Form.Control
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="number"
                placeholder="Telefono"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="dni">
              <Form.Control
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                type="number"
                placeholder="dni"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="p-1">
          <Button
            className="btn btn-verde-neon col m-2"
            onClick={handleContinue}
          >
            confirmar
          </Button>
        </Row>
      </Container>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Revise la informacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>{addressData.name} </Col>
            <Col md={4}>{addressData.surname} </Col>
            <Col md={4}>{addressData.dni} </Col>
          </Row>
          <Row>
            <Col md={4}>{addressData.address} </Col>
            <Col md={4}>{addressData.city} </Col>
            <Col md={4}>{addressData.country} </Col>
          </Row>
          <Row>
            <Col md={4}>{addressData.postalCode} </Col>
            <Col md={4}>{addressData.phone}</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link
            className="btn m-1 btn-verde-neon"
            to={linkHabilitado ? "/confirmPay" : "#"}
          >
            Continuar
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmAddress;
