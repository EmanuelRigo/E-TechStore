import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Container, Row, Col } from "react-bootstrap";

function Heroes({ itemFound }) {
  console.log(itemFound);
  return (
    <>
      <Container
        className="bg-dark rounded p-5 my-5"
        data-bs-theme="dark"
        expand="lg"
      >
        <Row>
          <Col>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {itemFound ? itemFound.title : null}
            </h1>
            <p className="lead">{itemFound ? itemFound.description : null}</p>
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
            <img
              src={itemFound ? itemFound.image : null}
              className="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Heroes;
