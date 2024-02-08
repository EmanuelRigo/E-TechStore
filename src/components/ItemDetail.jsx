import ItemCount from "./ItemCount";
import { useContext } from "react";
import { contexto } from "./CustomProvider";

import Card from "react-bootstrap/Card";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import { Container, Row, Col, Image } from "react-bootstrap";
import MyCarousel from "./MyCarousel";

function ItemDetail({ product }) {
  const { favorites, addFavorites } = useContext(contexto);

  return (
    <>
      <Container className="bg-dark rounded item">
        <Row>
          <Col lg={8} className="p-3">
            <div className="imgContainer rounded">
              <Image src={"../images/" + product.image} fluid />
            </div>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="h-100" style={{ width: "100%" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.title}</Card.Title>

                  <Row>
                    <Col>
                      {[...new Array(5)].map((star, index) => {
                        return index < product.qualification ? (
                          <FaStar key={index} />
                        ) : (
                          <FaRegStar key={index} />
                        );
                      })}
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                      {favorites.some(
                        (articulo) => articulo.id === product.id
                      ) ? (
                        <FaHeart
                          style={{ fontSize: "1.5rem" }}
                          onClick={() => {
                            addFavorites(product);
                          }}
                          className="text-verde-neon"
                        ></FaHeart>
                      ) : (
                        <FaRegHeart
                          style={{ fontSize: "1.5rem" }}
                          onClick={() => {
                            addFavorites(product);
                          }}
                          className="text-verde-neon"
                        ></FaRegHeart>
                      )}
                    </Col>
                  </Row>

                  <Card.Subtitle className="my-2 text-muted">
                    ${product.price}
                  </Card.Subtitle>
                  <Card.Text className="mb-3">{product.description}</Card.Text>
                </div>
                <div>
                  <Card.Subtitle className="mb-2 text-muted">
                    stock: {product.stock}
                  </Card.Subtitle>
                  <Card.Text className="mb-2 text-muted">
                    {product.price > 160 ? (
                      <span>
                        llega
                        <strong> gratis mañana</strong>
                      </span>
                    ) : (
                      <span>
                        llega <strong>mañana</strong> por $15
                      </span>
                    )}
                  </Card.Text>
                  <ItemCount product={product}></ItemCount>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <MyCarousel></MyCarousel>
    </>
  );
}

export default ItemDetail;
