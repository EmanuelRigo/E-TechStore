import React from "react";
import { Container, Row, Card, Badge, Spinner, Col } from "react-bootstrap";

function SalesItems({ item }) {
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
            <Col md={6}>
              <Card.Text>
                recibe: {item.envio.name} {item.envio.surname}
              </Card.Text>
            </Col>
            <Col md={6}>
              <Card.Text>Total: NUMERO</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalesItems;
