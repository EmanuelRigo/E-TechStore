import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

function Item({ producto }) {
  return (
    <>
      <Card
        data-bs-theme="dark"
        className="card__item"
        style={{ width: "100%" }}
      >
        <Card.Img variant="top" src={"../images/" + producto.image} />
        <Card.Body>
          <Card.Title>{producto.title} </Card.Title>
          <Card.Text>${producto.price}</Card.Text>

          <Link to={"/item/" + producto.id} className="btn btn-verde-neon">
            ver mas
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
