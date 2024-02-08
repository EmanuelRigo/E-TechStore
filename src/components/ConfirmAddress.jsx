import { useState, useContext } from "react";
import React from "react";
import { contexto } from "./CustomProvider";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { Container, Card, ListGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Modal } from "react-bootstrap";

import { Notify } from "notiflix";

function ConfirmAddress() {
  const { setAddressInfo } = useContext(contexto);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dni, setDni] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);

  const addressData = {
    name: name,
    surname: surname,
    dni: dni,
    address: address,
    city: city,
    country: country,
    postalCode: postalCode,
    phone: phone,
  };

  const handleContinue = () => {
    if (
      name.trim() &&
      surname.trim() &&
      dni.trim() &&
      address.trim() &&
      city.trim() &&
      country.trim() &&
      postalCode.trim() &&
      phone.trim()
    ) {
      setAddressInfo(addressData);
      setLinkHabilitado(true);
      handleShow();
    } else {
      Notify.failure("por favor llene todos los campos");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="bg-light p-3 rounded">
        <Row className="g-2 mb-2">
          <Col md={6}>
            <FloatingLabel controlId="floatingInputGrid" label="Nombre">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nombre"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingInputGrid" label="Apellido">
              <Form.Control
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="address"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Ciudad">
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="ciudad"
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingSelectGrid" label="Provincia">
              <Form.Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                aria-label="Floating label select example"
              >
                <option>Seleciona una Provincia</option>
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
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                type="number"
                placeholder="Codigo Postal"
              />
            </FloatingLabel>
          </Col>
          <Col md={4}>
            <FloatingLabel controlId="floatingInputGrid" label="Telefono">
              <Form.Control
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Revise la informacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              Nombre y apellido: {addressData.name} {addressData.surname}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Direccion: {addressData.address}, {addressData.city}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Provincia y Codigo Postal: {addressData.country},
              {addressData.postalCode}
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Telefono: {addressData.phone}
            </ListGroup.Item>
            <ListGroup.Item as="li">DNI: {addressData.dni} </ListGroup.Item>
          </ListGroup>
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
