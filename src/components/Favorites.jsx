import React from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Notify } from "notiflix";

function Favorites() {
  const { favorites, agregarProducto, addFavorites } = useContext(contexto);

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
            <Container
              key={item.id}
              data-bs-theme="dark"
              className="container-lg mt-4 px-0 itemFavorite"
            >
              <Row className="bg-light rounded my-4 mx-0 justify-content-center">
                <Col className="px-0 d-flex align-items-center">
                  <Image src={"../images/" + item.image} />
                  <h4>{item.title} </h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-center justify-content-md-end pb-3 pb-md-0">
                  <Button
                    onClick={() => {
                      addFavorites(item);
                    }}
                    className="d-flex align-items-center justify-content-center px-3 py-1 mx-3"
                    variant="verde-neon"
                  >
                    <MdDelete className="m-md-2" />
                    <p className="d-none d-lg-block m-0">borrar</p>
                  </Button>
                  <Button
                    onClick={() => {
                      agregarProducto(1, item);
                      Notify.success("se agrego al carrito", {
                        success: { background: "#28f100", textColor: "black" },
                      });
                    }}
                    className="d-flex align-items-center justify-content-center px-3 py-1 mx-3"
                    variant="verde-neon"
                  >
                    <FaCartPlus className="m-md-2"></FaCartPlus>
                    <p className="d-none d-lg-block m-0">Agregar a carrito</p>
                  </Button>
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
