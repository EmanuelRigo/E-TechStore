import React from "react";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function ItemDetail({ product }) {
  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8 gy-5">
            <div>
              <img
                src={product.image}
                className="d-block mx-lg-auto img-fluid"
                alt="image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-md-4 gy-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  estrellas
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.price}
                </Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  llega mañana por $10
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  stock: {product.stock}
                </Card.Subtitle>
                <ItemCount product={product}></ItemCount>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
