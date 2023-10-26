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
      <div className="card card-item">
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
    </>
  );
}

export default Item;
