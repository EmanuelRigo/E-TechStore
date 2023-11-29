import React from "react";
import { useContext, useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { contexto } from "./CustomProvider";
import { Container, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Buy() {
  const { busquedaCompra } = useContext(contexto);

  const [sale, setSale] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const productosCollection = collection(db, "ventas");
        const referencia = doc(productosCollection, busquedaCompra);
        const pedido = await getDoc(referencia);

        if (pedido.exists()) {
          const producto = { ...pedido.data(), id: pedido.id };
          setSale(producto);
          console.log(producto);
        } else {
          console.log("El documento no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };

    obtenerDatos();
  }, [busquedaCompra]);

  return (
    <>
      {sale ? (
        <Container className="bg-light">
          <p>{`Gracias por la compra ${sale.envio.name}`}</p>
          <p>{`Los ${sale.compras.length} productos llegarán en RANDOM días`}</p>
          <Link className="btn m-1 btn-verde-neon" to={"/"}>
            ir al inicio
          </Link>
        </Container>
      ) : (
        <Container className="d-flex  align-items-center justify-content-center">
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

export default Buy;
