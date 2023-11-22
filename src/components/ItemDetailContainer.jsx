import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import { Container, Spinner } from "react-bootstrap";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  console.log(id);

  useEffect(() => {
    const productosCollection = collection(db, "products");
    console.log(productosCollection);
    const referencia = doc(productosCollection, id);
    const pedido = getDoc(referencia);
    console.log(pedido);

    pedido
      .then((res) => {
        const producto = { ...res.data(), id: res.id };
        setProduct(producto);
        console.log(producto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {product ? (
        <ItemDetail product={product}></ItemDetail>
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
    </div>
  );
}

export default ItemDetailContainer;
