import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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
      {bookdata.map((item) => {
        let title = item.title;
        let price = item.price;
        return (
          <article>
            <h3>{title} </h3>
            <h4>{price} </h4>
          </article>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
