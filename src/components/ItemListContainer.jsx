import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [bookdata, setBookdata] = useState([]);

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
      <ItemList book={bookdata}></ItemList>
    </div>
  );
}

export default ItemListContainer;
