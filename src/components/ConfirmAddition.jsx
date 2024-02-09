import React from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConfirmAddition() {
  const { productAdded } = useContext(contexto);

  return (
    <Card data-bs-theme="dark" className="container px-0 py-3">
      <div className="row justify-content-center my-2 mx-0 no-gutters d-flex align-items-center">
        <div className="col-7">
          <Card.Body className="px-0 py-2 p-md-3">
            <Card.Title className="mb-3">
              {productAdded.contador > 1
                ? `Se agregaron ${productAdded.contador} productos al carrito`
                : `Se agrego ${productAdded.contador} producto al carrito`}
            </Card.Title>
            <div className="d-none d-lg-block">
              <Link className="btn m-1 btn-verde-neon" to="/">
                seguir comprando
              </Link>
              <Link className="btn m-1 btn-verde-neon" to="/cart">
                ir a carrito
              </Link>
            </div>
          </Card.Body>
        </div>
        <div className="col-4 col-md-3 ">
          <Card.Img
            src={"/images/" + productAdded.image}
            alt="Imagen de la tarjeta"
            className="roundedCircle"
          />
        </div>
      </div>
      <Row className="d-initial d-lg-none justify-content-center my-2 mx-0 no-gutters d-flex align-items-center">
        <Col sm={7} className="d-flex justify-content-center">
          <Link
            to="/"
            className="btn m-1 btn-verde-neon d-flex align-items-center justify-content-center"
            variant="verde-neon"
          >
            seguir comprando
          </Link>
        </Col>
        <Col className=" pt-2 d-flex justify-content-center">
          <Link
            to="/cart"
            className=" btn m-1 btn-verde-neon d-flex align-items-center justify-content-center"
            variant="verde-neon"
          >
            ir a carrito
          </Link>
        </Col>
      </Row>
    </Card>
  );
}

export default ConfirmAddition;
