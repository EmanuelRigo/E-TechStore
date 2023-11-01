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
      {/*       <div className="card card-item">
        <div className="card-img__container">
          <img className="card-img" src={producto.image} alt="" />
        </div>

        <div className="card-body">
          <h2 className="h5 card-title">{producto.title}</h2>
          <h3 className="h6 card-subtitle text-muted mb-2">
            {producto.price}{" "}
          </h3>

          <Link to={"/item/" + producto.id} className="btn btn-primary">
            ver mas
          </Link>
        </div>
      </div>
 */}
      <Card data-bs-theme="dark" style={{ width: "100%" }}>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.title} </Card.Title>
          <Card.Text>{producto.price}</Card.Text>

          <Link to={"/item/" + producto.id} className="btn btn-verde-neon">
            ver mas
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
