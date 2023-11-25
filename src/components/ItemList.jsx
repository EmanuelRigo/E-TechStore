import { useParams, useLocation } from "react-router-dom";
import Item from "./Item";
import Heroes from "./Heroes";
import { contexto } from "./CustomProvider"; //
import { useContext } from "react"; //
import { Container, Row, Col } from "react-bootstrap";

function ItemList() {
  const { bookdata, setCategory, setValorBusqueda } = useContext(contexto);

  //////

  const { categoria } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const busqueda = params.get("busqueda");

  setValorBusqueda(busqueda);

  //////

  const parametro = useParams();

  setCategory(parametro);

  //////HEROES//////////////

  const ordenRandom = Math.floor(Math.random() * bookdata.length);

  const itemFound = bookdata[ordenRandom];

  const primerosDoceElementos = bookdata.slice(0, 12);
  //////////////////////////////////////

  const ifBusqueda = () => {
    if (busqueda) {
      if (bookdata.length === 0) {
        return (
          <Container className="container-lg mt-4 px-0">
            <Row className="bg-light rounded my-4 mx-0 justify-content-center">
              <Col className="py-3 col-auto">
                <h4>No hay articulos con ese nombre</h4>
              </Col>
            </Row>
          </Container>
        );
      } else {
        return (
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
            {bookdata.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <Item producto={item}></Item>
                </div>
              );
            })}
          </Row>
        );
      }
    } else {
      return (
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
          {busqueda
            ? bookdata
            : primerosDoceElementos.map((item) => {
                return (
                  <div className="col" key={item.id}>
                    <Item producto={item}></Item>
                  </div>
                );
              })}
        </Row>
      );
    }
  };

  ////////////////////////////////////////

  return (
    <>
      {categoria || busqueda ? null : <Heroes itemFound={itemFound}></Heroes>}

      <Container className="container-lg mt-4 px-0">
        <Row className=" bg-light gx-3 rounded my-4 mx-0 mx-auto ">
          {categoria ? (
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center py-3 mx-auto"
            >
              <h2>{categoria} </h2>
            </Col>
          ) : null}
          {busqueda ? (
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center py-3 mx-auto"
            >
              <h4>articulos encontrados: {busqueda} </h4>
            </Col>
          ) : null}
        </Row>
        {ifBusqueda()}
      </Container>
    </>
  );
}

export default ItemList;
