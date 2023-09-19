import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [bookdata, setBookdata] = useState([]);
  const [product, setProduct] = useState({});

  const params = useParams();

  const fetchData = () => {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*   useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setBookdata(res.data);
        console.log(bookdata);
        console.log(params.id);

        const productFind = bookdata.find(
          (bookdata) => bookdata.id === params.id
        );
        console.log(productFind);
        setProduct(productFind);
      })

      .then(console.log(bookdata))
      .catch((err) => console.log(err));
  }, []); */

  return (
    <div>
      <ItemDetail product={product}></ItemDetail>
    </div>
  );
}

export default ItemDetailContainer;
