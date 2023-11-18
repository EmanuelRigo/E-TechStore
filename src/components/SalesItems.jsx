import React from "react";
import { Container, Row, Card, Badge } from "react-bootstrap";

function SalesItems({ item }) {
  console.log({ item });
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
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalesItems;
