import React from "react";
import ItemCount from "./ItemCount";

import Card from "react-bootstrap/Card";

import { Container, Row, Col, Image } from "react-bootstrap";

function ItemDetail({ product }) {
  return (
    <>
      <Container className="bg-dark rounded item">
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
                <Card.Text className="mb-2 text-muted">
                  {product.price > 160 ? (
                    <p>
                      llega
                      <strong> gratis mañana</strong>
                    </p>
                  ) : (
                    <p>
                      llega <strong>mañana</strong> por $15
                    </p>
                  )}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  stock: {product.stock}
                </Card.Subtitle>
                <ItemCount product={product}></ItemCount>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemDetail;
