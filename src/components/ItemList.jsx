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
  console.log(params);

  const busqueda = params.get("busqueda");
  console.log(busqueda);
  setValorBusqueda(busqueda);

  //////

  const parametro = useParams();

  setCategory(parametro);

  //////HEROES//////////////

  const ordenRandom = Math.floor(Math.random() * bookdata.length);

  const itemFound = bookdata[ordenRandom];

  const primerosDoceElementos = bookdata.slice(0, 12);
  //////////////////////////////////////

  return (
    <>
      {categoria ? null : <Heroes itemFound={itemFound}></Heroes>}
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

        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 ">
          {primerosDoceElementos.map((item) => {
            return (
              <div className="col">
                <Item producto={item} key={item.id}></Item>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ItemList;
