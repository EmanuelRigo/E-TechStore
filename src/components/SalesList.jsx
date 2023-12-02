import React from "react";

import { useEffect, useState } from "react";
import SalesItems from "./SalesItems";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { Container, Spinner, Row, Col } from "react-bootstrap";

function SalesList() {
  const [ventas, setVentas] = useState();

  const ventasCollection = collection(db, "ventas");

  useEffect(() => {
    const pedidoFireStoreVentas = getDocs(ventasCollection);

    pedidoFireStoreVentas.then((res) => {
      const documentArrayVentas = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setVentas(documentArrayVentas);
    });
  }, [ventasCollection]);

  const [contenido, setContenido] = useState(null);

  useEffect(() => {
    if (ventas === undefined) {
      setContenido(
        <Container className="d-flex align-items-center justify-content-center">
          <Spinner
            animation="border"
            variant="verde-neon"
            size="lg"
            className="p-5 m-5"
          />
        </Container>
      );
    } else if (ventas.length > 0) {
      setContenido(
        <Container className="bg-dark rounded py-1">
          {ventas.map((item) => (
            <SalesItems key={item.id} item={item} />
          ))}
        </Container>
      );
    } else if (ventas.length === 0) {
      setContenido(
        <Container className="container-lg mt-4 px-0">
          <Row className=" bg-light gx-3 rounded my-4 mx-0 mx-auto ">
            <Col className="d-flex align-items-center justify-content-center py-3 mx-auto">
              <h2>No hay compras</h2>
            </Col>
          </Row>
        </Container>
      );
    }
  }, [ventas]);
  return <div>{contenido}</div>;
}

export default SalesList;
