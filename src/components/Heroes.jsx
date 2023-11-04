import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

function Heroes({ itemFound }) {
  console.log(itemFound);
  return (
    <>
      <Container
        className="bg-dark heroe rounded p-5 my-5 hero"
        data-bs-theme="dark"
        expand="lg"
      >
        <Row>
          <Col>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {itemFound ? itemFound.title : null}
            </h1>

            <Card.Text className="lead">
              {itemFound ? itemFound.description : null}
            </Card.Text>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-verde-neon btn-lg px-4 me-md-2"
              >
                agregar a carrito
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </Col>
          <Col>
            <div className="h-50 w-50">
              <Image
                src={itemFound ? "../images/" + itemFound.image : null}
                className="d-block mx-lg-auto img-fluid roundedCircle bg-verde-neon"
                alt="Bootstrap Themes"
                width="800"
                height="800"
                loading="lazy"
                roundedCircle
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="bg-dark heroe rounded p-5 my-5 hero"
        data-bs-theme="dark"
        expand="lg"
      >
        <Card>
          <Row>
            <Col>
              <Card.Body>
                <Card className="h2">Card Title</Card>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Col>
            <Col>
              <Image
                variant="top"
                src={itemFound ? "../images/" + itemFound.image : null}
                className="d-block mx-lg-auto img-fluid roundedCircle bg-verde-neon"
                alt="Bootstrap Themes"
                width="800"
                height="800"
                loading="lazy"
                roundedCircle
              />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Heroes;
