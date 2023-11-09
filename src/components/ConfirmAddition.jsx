import React from "react";
import { useContext, useEffect } from "react";
import { contexto } from "./CustomProvider";
import { Container, Card, Col, Row, Button, Image } from "react-bootstrap";

function ConfirmAddition() {
  const { productAdded, calcularTotal, carrito } = useContext(contexto);

  return (
    <>
      {/*       <div>
        <h2>Los productos se agregaron al carrito</h2>
        {productAdded.title} {}
        {productAdded.contador} <button>ir a carrito</button>
      </div> */}
      {/*       <Container data-bs-theme="dark" className="bg-dark">
        <Row>
          <Col md={8}>
            <h3 className="text-light">
              Se agregaron {productAdded.contador} al carrito
            </h3>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container> */}

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
                <Button className="btn-block " variant="verde-neon">
                  seguir comprando
                </Button>
                <Button className="btn-block mx-2 " variant="verde-neon">
                  ir a carrito
                </Button>
              </div>
            </Card.Body>

            {/*   <Row className="d-none d-lg-block">
              <Col md={4} className="d-flex justify-content-center">
                <Button className="btn-block " variant="verde-neon">
                  seguir comprando
                </Button>
                <Button className="btn-block " variant="verde-neon">
                  ir a carrito
                </Button>
              </Col>
              <Col md={4} className=" d-flex justify-content-center"></Col>
            </Row> */}
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
            <Button
              className="d-flex align-items-center justify-content-center"
              variant="verde-neon"
            >
              seguir comprando
            </Button>
          </Col>
          <Col className=" d-flex justify-content-center">
            <Button
              className="d-flex align-items-center justify-content-center"
              variant="verde-neon"
            >
              ir a carrito
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ConfirmAddition;
