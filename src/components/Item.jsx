import React from "react";
import { Link, useParams } from "react-router-dom";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function Item({ producto }) {
  const { sumaredad, restaredad } = useContext(contexto);
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
