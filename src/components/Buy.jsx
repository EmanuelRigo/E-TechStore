import React from "react";
import { useContext, useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { contexto } from "./CustomProvider";
import { Container } from "react-bootstrap";

function Buy() {
  const { cliente, busquedaCompra } = useContext(contexto);

  const [sale, setSale] = useState();

  /*  useEffect(() => {
    const productosCollection = collection(db, "ventas");
    const referencia = doc(productosCollection, busquedaCompra);
    const pedido = getDoc(referencia);
    console.log(pedido.data());

    pedido
      .then((res) => {
        const producto = { ...res.data(), id: res.id };
        setSale(producto);
        console.log(producto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */
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
        </Container>
      ) : (
        <Container className="bg-light">
          <p>Cargando datos...</p>
        </Container>
      )}
    </>
  );
}

export default Buy;
