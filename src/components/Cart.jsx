import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";

import { GrClose, GrAdd, GrSubtract } from "react-icons/gr";

function Cart() {
  const {
    carrito,
    eliminarProducto,
    vaciarCarrito,
    incrementarCantidad,
    decrementarCantidad,
    setTotalVentas,
    totalVentas,
    setValorEnvio,
    valorEnvio,
  } = useContext(contexto);

  let totalSuma = 0;

  function sumarPrecios() {
    totalSuma = carrito.reduce(
      (total, item) => total + item.price * item.cantidad,
      0
    );
    const totalSuma2 = Number(totalSuma.toFixed(2)) + valorEnvio;
    const totalSuma3 = Number(totalSuma.toFixed(2));

    setTotalVentas(Number(totalSuma2.toFixed(2)));
    if (totalSuma3 > 160) {
      setValorEnvio(0);
    } else {
      setValorEnvio(100);
    }
    return totalSuma;
  }

  sumarPrecios();

  const handleClick = (id) => () => eliminarProducto(id);
  return (
    <>
      {carrito.length === 0 ? (
        <Container className="container-lg mt-4 px-0">
          <Row className="bg-light rounded my-4 mx-0 justify-content-center">
            <Col className="py-3 col-auto">
              <h4>No hay articulos en el carrito</h4>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="bg-dark py-3 rounded" bg={"dark"}>
          {carrito.map((item) => {
            return (
              <Row
                key={item.id}
                className="bg-light rounded m-2 justify-content-center"
              >
                <Col
                  className="d-flex flex-column justify-content-center pt-2 px-md-5"
                  md={"6"}
                >
                  <div>
                    <Row className="my-2">
                      <Card.Title className="col-md-auto d-flex align-items-center justify-content-center">
                        {item.title}{" "}
                      </Card.Title>
                      <Card.Text className="col-md-auto d-flex align-items-center justify-content-center">
                        {" "}
                        c/u ${item.price}{" "}
                      </Card.Text>
                    </Row>

                    <Row>
                      <Card.Title className="col-md-auto d-flex align-items-center justify-content-center my-3">
                        Cantidad: {item.cantidad}
                      </Card.Title>
                      <Col
                        md={"auto"}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button
                          className="bg-verde-neon m-1  d-flex justify-content-center"
                          onClick={() => incrementarCantidad(item.id)}
                        >
                          <GrAdd />
                        </Button>
                        <Button
                          className="bg-verde-neon m-1  d-flex justify-content-center"
                          onClick={() => decrementarCantidad(item.id)}
                        >
                          <GrSubtract />
                        </Button>
                        <Button
                          className="bg-verde-neon m-1 d-flex justify-content-center"
                          onClick={handleClick(item.id)}
                        >
                          <GrClose />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <div></div>
                </Col>
                <Col
                  md={3}
                  className="d-flex flex-column pt-2 align-items-center justify-content-center"
                >
                  <Image
                    className="w-100 bg-dark rounded"
                    src={"/images/" + item.image}
                  />
                  <Card.Title className="m-2 text-center">
                    {"total: $" + (item.price * item.cantidad).toFixed(2)}
                  </Card.Title>
                </Col>
              </Row>
            );
          })}

          <Row className="bg-light rounded m-2 justify-content-center">
            <Col className="py-4 px-5 ">
              {valorEnvio === 0 ? (
                <p className="h5 m-0">
                  Envio <strong>gratis</strong>
                </p>
              ) : (
                <p className="h5 m-0">valor envio: $ {valorEnvio} </p>
              )}
            </Col>
          </Row>

          <Row className="mt-4 mx-md-4">
            <Col
              md={6}
              className="d-flex mb-4 mb-md-0 align-items-center justify-content-center"
            >
              <h4 className="text-light m-0">Total ${totalVentas} </h4>
            </Col>
            <Col className="text-center">
              <Button className="btn-verde-neon m-1" onClick={vaciarCarrito}>
                vaciar carrito
              </Button>

              <Link className="btn m-1 btn-verde-neon" to="/confirmAddress">
                continuar
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Cart;
