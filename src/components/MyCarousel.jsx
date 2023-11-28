import React from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const MyCarousel = () => {
  const { bookdata, favorites, addFavorites } = useContext(contexto);

  const subconjuntos = bookdata.reduce((acc, _, index) => {
    if (index % 4 === 0) {
      acc.push(bookdata.slice(index, index + 4));
    }
    return acc;
  }, []);

  return (
    <Carousel>
      {subconjuntos.map((subconjunto, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="bg-dark mt-3 py-3 rounded">
              {subconjunto.map((elemento, subIndex) => (
                <Col key={subIndex}>
                  <Card
                    data-bs-theme="dark"
                    className="card__item"
                    style={{ width: "100%" }}
                  >
                    <Card.Img
                      variant="top"
                      src={"../images/" + elemento.image}
                    />
                    <Card.Body className="d-flex  justify-content-between flex-column bg-violeta-personalizado">
                      <Card.Title>{elemento.title} </Card.Title>
                      <div className="d-flex flex-column">
                        <Row className="mb-3">
                          <Col>
                            <Card.Text>${elemento.price}</Card.Text>
                          </Col>
                          <Col className="d-flex align-items-center justify-content-end ">
                            {favorites.some(
                              (articulo) => articulo.id === elemento.id
                            ) ? (
                              <FaHeart
                                onClick={() => {
                                  addFavorites(elemento);
                                }}
                                className="text-verde-neon"
                              ></FaHeart>
                            ) : (
                              <FaRegHeart
                                onClick={() => {
                                  addFavorites(elemento);
                                }}
                                className="text-verde-neon"
                              ></FaRegHeart>
                            )}
                          </Col>
                        </Row>

                        <Link
                          to={"/item/" + elemento.id}
                          className="btn btn-verde-neon"
                        >
                          ver mas
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
