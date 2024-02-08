import React from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

function ShowDetails() {
  const {
    cliente,

    vaciarCarrito,

    setBusquedaCompra,
    busquedaCompra,
    totalVentas,
    valorEnvio,
  } = useContext(contexto);

  const navigate = useNavigate();

  const handleClick = () => {
    const venta = {
      nombre: cliente.datosEnvio.name,
      apellido: cliente.datosEnvio.surname,
      fecha: serverTimestamp(),
      compras: cliente.compras,
      envio: cliente.datosEnvio,
      metodoDePago: cliente.formasDePago,
      estaPago: (cliente.estaPagado = true),
      total: totalVentas,
      valorEnvio: valorEnvio,
    };

    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, venta);

    pedido
      .then((res) => {
        setBusquedaCompra(res.id);
      })
      .catch((err) => {
        console.log(err);
      });
    vaciarCarrito();
    navigate("/buy");
  };

  return (
    <Container className="bg-dark p-3 rounded">
      <Row>
        <Col md={7} className="mb-md-0 mb-3">
          <Card border="verde-neon" data-bs-theme="dark">
            <ListGroup>
              <ListGroup.Item>
                Recibe: {cliente.datosEnvio.name} {cliente.datosEnvio.surname}
              </ListGroup.Item>
              <ListGroup.Item>
                Direccion: {cliente.datosEnvio.address}
              </ListGroup.Item>
              <ListGroup.Item>
                Ciudad y CP: {cliente.datosEnvio.city}{" "}
                {cliente.datosEnvio.postalCode}
              </ListGroup.Item>
              <ListGroup.Item>
                Tarrjeta: **** **** ****{" "}
                {cliente.formasDePago.cardNumber.slice(-4)}
              </ListGroup.Item>
              <ListGroup.Item>
                Telefono: {cliente.datosEnvio.phone}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={5}>
          <Card
            border="verde-neon"
            style={{ height: "100%" }}
            data-bs-theme="dark"
          >
            <ListGroup>
              <ListGroup.Item variant="light">
                <Row>
                  <Col sm={6}>producto</Col>
                  <Col sm={3}>cantidad</Col>
                  <Col sm={3}>total</Col>
                </Row>
              </ListGroup.Item>
              {cliente.compras.map((item) => {
                return (
                  <ListGroup.Item key={item.id}>
                    <Row>
                      <Col sm={6}> {item.title}</Col>
                      <Col sm={3}> {item.cantidad}</Col>
                      <Col sm={3}> c/u ${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
              <ListGroup.Item variant="light">
                <Row>
                  <Col sm={9}>Total:</Col>
                  <Col sm={3}>${totalVentas}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Button variant="verde-neon" className="col-12" onClick={handleClick}>
            confirmar compra
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowDetails;
