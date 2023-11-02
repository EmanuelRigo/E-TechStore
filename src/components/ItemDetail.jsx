import React from "react";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Container, Row, Col, Image } from "react-bootstrap";

function ItemDetail({ product }) {
  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <>
      <Container className="bg-dark rounded">
        <Row>
          <Col lg={8} className="p-3">
            <div className="imgContainer rounded">
              <Image src={"../images/" + product.image} fluid />
            </div>
          </Col>
          <Col lg={4} className="p-3">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  estrellas
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  ${product.price}
                </Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  llega mañana por $10
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  stock: {product.stock}
                </Card.Subtitle>
                <ItemCount product={product}></ItemCount>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemDetail;
