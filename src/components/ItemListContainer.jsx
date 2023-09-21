import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Navbarbookshop from "./Navbarbookshop";

function ItemListContainer() {
  const [bookdata, setBookdata] = useState([]);

  const params = useParams();
  console.log(params);

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
      <Navbarbookshop products={bookdata}></Navbarbookshop>
      <ItemList book={bookdata}></ItemList>
    </div>
  );
}

export default ItemListContainer;
