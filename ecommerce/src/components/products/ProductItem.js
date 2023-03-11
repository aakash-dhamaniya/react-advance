import React from "react";
import "./productItem.css";
import { Button, Card } from "react-bootstrap";
const ProductItem = (props) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
          <span>${props.price}</span>
        </Card.Subtitle>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
