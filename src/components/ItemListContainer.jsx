import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [bookdata, setBookdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setBookdata(res.data))
      .then(console.log(bookdata))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemList book={bookdata}></ItemList>
    </div>
  );
}

export default ItemListContainer;
