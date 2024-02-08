import React from "react";
import { useContext, useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { contexto } from "./CustomProvider";
import { Container, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Buy() {
  const { busquedaCompra } = useContext(contexto);

  const [sale, setSale] = useState();
  const [date, setDate] = useState();

  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const productosCollection = collection(db, "ventas");
        const referencia = doc(productosCollection, busquedaCompra);
        const pedido = await getDoc(referencia);

        if (pedido.exists()) {
          const producto = { ...pedido.data(), id: pedido.id };
          setSale(producto);
          ////
          let fecha = new Date(producto.fecha.toDate());
          fecha.setDate(fecha.getDate() + 3);

          //////
          setDate(fecha);
          setDay(fecha.getDate());
          setMonth(fecha.getMonth() + 1);
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
        <Container>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Gracias por la compra {sale.envio.name}!</Card.Title>
              <Card.Text>
                los productos llegaran el {day}/{month}
              </Card.Text>
              <Link to={"/"} className="btn btn-verde-neon">
                inicio
              </Link>
            </Card.Body>
          </Card>
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
