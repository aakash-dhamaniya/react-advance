import React from "react";
import "../cart/Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Container className="cart">
      <Row>
        <Col className="text-center cart-text">Cart</Col>
      </Row>
      <Row>
        <Col className="text-center">
          There is no item in this cart click <Link to={"store"}>here</Link> to
          shope
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
