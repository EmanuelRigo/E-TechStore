import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";

import { FaCartPlus } from "react-icons/fa";

function Heroes({ itemFound }) {
  const { agregarProducto } = useContext(contexto);

  return (
    <>
      {itemFound ? (
        <Card
          border="0"
          data-bs-theme="dark"
          className="container py-3 heroe border-none"
        >
          <div className="row p-md-4 no-gutters d-flex align-items-center">
            <div className="col-5 ">
              <Link to={"/item/" + itemFound.id}>
                <Card.Img
                  src={itemFound ? "../images/" + itemFound.image : null}
                  alt="Imagen de la tarjeta"
                />
              </Link>
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
                        Notify.success("se agrego al carrito", {
                          success: {
                            background: "#28f100",
                            textColor: "black",
                          },
                        });
                      }}
                    >
                      <FaCartPlus className="m-md-2"></FaCartPlus>
                      <p className="d-none d-lg-block m-0">Agregar a carrito</p>
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
      ) : (
        <Container className="d-flex align-items-center justify-content-center">
          <Spinner
            animation="border"
            variant="verde-neon"
            size="lg"
            className="p-5 m-5"
          />
        </Container>
      )}
    </>
  );
}

export default Heroes;
