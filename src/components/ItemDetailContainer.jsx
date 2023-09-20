import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import ItemDetailList from "./ItemDetailList";

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

  return (
    <div>
      <ItemDetailList products={bookdata}></ItemDetailList>
    </div>
  );
}

export default ItemDetailContainer;
