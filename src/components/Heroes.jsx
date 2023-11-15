import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

import { FaCartPlus } from "react-icons/fa";

function Heroes({ itemFound }) {
  const { agregarProducto } = useContext(contexto);
  console.log(itemFound);
  return (
    <>
      <Card data-bs-theme="dark" className="container py-3 heroe">
        <div className="row p-md-4 no-gutters d-flex align-items-center">
          <div className="col-5 ">
            <Card.Img
              src={itemFound ? "../images/" + itemFound.image : null}
              alt="Imagen de la tarjeta"
            />
          </div>
          <div className="col-7">
            <Card.Body className="px-0 py-2 p-md-4">
              <Card.Title className="mb-3">
                {itemFound ? itemFound.title : null}
              </Card.Title>
              <Card.Text className="d-none d-md-block">
                {itemFound ? itemFound.description : null}
              </Card.Text>
              <Row>
                <Col>
                  <Button
                    className="d-flex align-items-center justify-content-center"
                    variant="verde-neon"
                    onClick={() => {
                      agregarProducto(1, itemFound);
                    }}
                  >
                    <FaCartPlus className="m-md-2"></FaCartPlus>
                    <p className="d-none d-md-block m-0">agregar a carrito</p>
                  </Button>
                </Col>
                <Col className="d-flex align-items-center">
                  <Card.Text className="h2 text-verde-neon">
                    ${itemFound ? itemFound.price : null}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Heroes;
