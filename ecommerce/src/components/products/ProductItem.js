import React, { useContext } from "react";
import "./productItem.css";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../store/cart-context";
const ProductItem = (props) => {
  const ctx = useContext(CartContext);
  const AddItemHandler = (e) => {
    ctx.addItem({ ...props, quantity: 1 });
  };
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
          <span>${props.price}</span>
        </Card.Subtitle>
        <Button onClick={AddItemHandler}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
