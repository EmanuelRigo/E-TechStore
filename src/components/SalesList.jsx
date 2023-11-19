import React from "react";
import { contexto } from "./CustomProvider";
import { useContext, useEffect, useState } from "react";
import SalesItems from "./SalesItems";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { Container, Card, Spinner } from "react-bootstrap";

function SalesList() {
  // const { ventas } = useContext(contexto);

  const [ventas, setVentas] = useState();

  const ventasCollection = collection(db, "ventas");

  useEffect(() => {
    const pedidoFireStoreVentas = getDocs(ventasCollection);

    pedidoFireStoreVentas.then((res) => {
      const documentArrayVentas = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setVentas(documentArrayVentas);
    });
  }, []);

  /*   useEffect(() => {
    if (ventas === 0) {
      <h3>no hay componentes</h3>;
    } else if (ventas > 0) {
      <Container className="bg-dark rounded py-1 ">
        {ventas.map((item) => {
          return <SalesItems item={item}></SalesItems>;
        })}
      </Container>;
    } else {
      <Container className="d-flex align-items-center justify-content-center">
        <Spinner
          animation="border"
          variant="verde-neon"
          size="lg"
          className="p-5 m-5"
        />
      </Container>;
    }
  }, [ventas]);

  console.log(ventas);
  return;

 */

  /*  <>
      {ventas ? (
        <Container className="bg-dark rounded py-1 ">
          {ventas.map((item) => {
            return <SalesItems item={item}></SalesItems>;
          })}
        </Container>
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
    </> */

  // Define el contenido JSX basado en las condiciones

  const [contenido, setContenido] = useState(null);

  useEffect(() => {
    // Lógica para cambiar el contenido según el valor de ventas
    if (ventas == undefined) {
      setContenido(
        <Container className="d-flex align-items-center justify-content-center">
          <Spinner
            animation="border"
            variant="verde-neon"
            size="lg"
            className="p-5 m-5"
          />
        </Container>
      );
    } else if (ventas.length > 0) {
      setContenido(
        <Container className="bg-dark rounded py-1">
          {ventas.map((item) => (
            <SalesItems key={item.id} item={item} />
          ))}
        </Container>
      );
    } else if (ventas.length == 0) {
      setContenido(<h3>No hay componentes</h3>);
    }
  }, [ventas]);

  /* useEffect(() => {
    // Lógica para cambiar el contenido según el valor de ventas
    if (ventas.length === 0) {
      setContenido(<h3>No hay componentes</h3>);
    } else if (ventas.length > 0) {
      setContenido(
        <Container className="bg-dark rounded py-1">
          {ventas.map((item) => (
            <SalesItems key={item.id} item={item} />
          ))}
        </Container>
      );
    } else {
      setContenido(
        <Container className="d-flex align-items-center justify-content-center">
          <Spinner
            animation="border"
            variant="verde-neon"
            size="lg"
            className="p-5 m-5"
          />
        </Container>
      );
    }
  }, [ventas]); */

  console.log(ventas);

  // Devuelve el contenido JSX
  return <div>{contenido}</div>;
}

export default SalesList;
