import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ShowDetails() {
  const { cliente, sumarUsuario } = useContext(contexto);
  console.log(cliente);
  console.log(cliente.datosEnvio.name);
  const handleClick = (e) => {
    const venta = {
      usuario: {
        nombre: cliente.datosEnvio.name,
        apellido: cliente.datosEnvio.surname,
        fecha: serverTimestamp(),
      },
    };

    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, venta);

    pedido
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      ShowDetails
      <p>{cliente.datosEnvio.name} </p>
      <p>{cliente.datosEnvio.surname} </p>
      <p>{cliente.datosEnvio.address} </p>
      {cliente.compras.map((item) => {
        return (
          <p key={item.id}>
            {item.title} {item.cantidad}
          </p>
        );
      })}
      <Link onClick={handleClick} to={"/buy"}>
        confirmar compra
      </Link>
    </div>
  );
}

export default ShowDetails;
