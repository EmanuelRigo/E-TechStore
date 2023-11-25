import React from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Col, Row, Container } from "react-bootstrap";

function Favorites() {
  const { favorites } = useContext(contexto);

  console.log(favorites);

  return (
    <>
      {favorites.length === 0 ? (
        <Container className="container-lg mt-4 px-0">
          <Row className="bg-light rounded my-4 mx-0 justify-content-center">
            <Col className="py-3 col-auto">
              <h4>No hay favoritos</h4>
            </Col>
          </Row>
        </Container>
      ) : (
        favorites.map((item) => {
          return (
            <Container className="container-lg mt-4 px-0">
              <Row className="bg-light rounded my-4 mx-0 justify-content-center">
                <Col className="py-3 col-auto">
                  <h4>{item.title} </h4>
                </Col>
              </Row>
            </Container>
          );
        })
      )}
    </>
  );
}

export default Favorites;
