import React from "react";
import { Row, Card, Badge, Col } from "react-bootstrap";

function SalesItems({ item }) {
  const fecha = item.fecha.toDate();

  return (
    <>
      <Card border="verde-neon" data-bs-theme="dark" className="my-3">
        <Card.Header>identificador de compra: {item.id} </Card.Header>
        <Card.Body>
          <Card.Title>
            {item.compras[0].title}{" "}
            {item.compras.length > 1 ? (
              <Badge bg="secondary">
                {"+" + (item.compras.length - 1) + " articulos"}
              </Badge>
            ) : (
              ""
            )}
          </Card.Title>
          <Row>
            <Col md={4}>
              <Card.Text>
                recibe: {item.envio.name} {item.envio.surname}
              </Card.Text>
            </Col>
            <Col md={4}>
              <Card.Text>Total: ${item.total} </Card.Text>
            </Col>
            <Col md={4}>
              <Card.Text>fecha: {fecha.toLocaleString()} </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalesItems;
