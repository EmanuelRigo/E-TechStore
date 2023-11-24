import React from "react";
import { Link } from "react-router-dom";

import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { Card, Row, Col } from "react-bootstrap";

function Item({ producto }) {
  return (
    <>
      <Card
        data-bs-theme="dark"
        className="card__item"
        style={{ width: "100%" }}
      >
        <Card.Img variant="top" src={"../images/" + producto.image} />
        <Card.Body className="d-flex  justify-content-between flex-column">
          <Card.Title>{producto.title} </Card.Title>
          <div className="d-flex flex-column">
            <Row className="mb-3">
              <Col>
                <Card.Text>${producto.price}</Card.Text>
              </Col>
              <Col className="d-flex align-items-center justify-content-end ">
                <FaRegHeart className="text-verde-neon"></FaRegHeart>
              </Col>
            </Row>

            <Link to={"/item/" + producto.id} className="btn btn-verde-neon">
              ver mas
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
