import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [bookdata, setBookdata] = useState([]);
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setBookdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const foundProduct = bookdata.find(
      (product) => product.id === parseInt(params.id)
    );
    setProduct(foundProduct);
  }, [bookdata]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product}></ItemDetail>
      ) : (
        <h2>cargando </h2>
      )}
    </div>
  );
}

export default ItemDetailContainer;
