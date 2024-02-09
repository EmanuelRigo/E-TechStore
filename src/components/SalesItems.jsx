import React from "react";
import { Row, Card, Badge, Col, Button } from "react-bootstrap";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function SalesItems({ item }) {
  const fecha = item.fecha.toDate();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(collection(db, "ventas"), item.id));
    } catch (error) {
      console.log("no se pudo eliminar");
    }
  };

  return (
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
          <Col md={2}>
            <Card.Text>fecha: {fecha.toLocaleString()} </Card.Text>
          </Col>
          <Col md={2}>
            <Card.Text>
              <Button
                className="btn btn-outline-verde-neon mt-2 mt-md-0"
                onClick={handleDelete}
              >
                {" "}
                eliminar
              </Button>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SalesItems;
