import React from "react";
import { useContext, useState, useEffect, useMemo } from "react";
import { contexto } from "./CustomProvider";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

/* const MyCarousel = () => {
  const { bookdata, favorites, addFavorites, setValorBusqueda } =
    useContext(contexto);

  setValorBusqueda(false);

  const [conjunto, setConjunto] = useState([]);

  const subconjuntos = bookdata.reduce((acc, _, index) => {
    if (index % 4 === 0) {
      acc.push(bookdata.slice(index, index + 4));
    }
    return acc;
  }, []);

  setConjunto(subconjuntos); */

const MyCarousel = () => {
  const { bookdata, favorites, addFavorites, setValorBusqueda } =
    useContext(contexto);

  // useEffect para ejecutar setValorBusqueda solo en el montaje inicial
  useEffect(() => {
    setValorBusqueda(false);
  }, []); // El array de dependencias vacío asegura que esto solo se ejecute una vez

  // Calcula los subconjuntos solo cuando bookdata cambia
  const subconjuntos = useMemo(() => {
    return bookdata.reduce((acc, _, index) => {
      if (index % 4 === 0) {
        acc.push(bookdata.slice(index, index + 4));
      }
      return acc;
    }, []);
  }, [bookdata]);

  const [conjunto, setConjunto] = useState(subconjuntos);

  // Actualiza setConjunto cuando subconjuntos cambia
  useEffect(() => {
    setConjunto(subconjuntos);
  }, [subconjuntos]);

  return (
    <Carousel className="container bg-dark rounded mt-4 py-4 px-1 d-none d-md-block">
      {conjunto.map((subconjunto, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row>
              {subconjunto.map((elemento, subIndex) => (
                <Col sm={3} key={subIndex}>
                  <Card
                    data-bs-theme="dark"
                    className="card__item"
                    style={{ width: "100%" }}
                  >
                    <Card.Img
                      variant="top"
                      src={"../images/" + elemento.image}
                    />
                    <Card.Body className="d-flex rounded justify-content-between flex-column bg-violeta-personalizado">
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
