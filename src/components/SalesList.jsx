import React from "react";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import SalesItems from "./SalesItems";

import { Container, Card } from "react-bootstrap";

function SalesList() {
  const { ventas } = useContext(contexto);

  console.log(ventas);
  return (
    <>
      <Container className="bg-dark rounded ">
        {ventas.map((item) => {
          return <SalesItems item={item}></SalesItems>;
        })}
      </Container>
    </>
  );
}

export default SalesList;
