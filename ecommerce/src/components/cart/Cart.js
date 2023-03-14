import React from "react";
import "../cart/Cart.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CartItem from "./CartItem";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function Cart() {
  const producst = productsArr.map((item, key) => (
    <CartItem
      key={key}
      title={item.title}
      price={item.price}
      image={item.imageUrl}
    />
  ));
  return (
    <Container className="cart">
      <Row>
        <Col className="text-center cart-text">Cart</Col>
      </Row>
      <Row>
        <Col className="text-center">
          {/* There is no item in this cart click <Link to={"store"}>here</Link> to
          shope */}
          <Table responsive="sm">
            <thead>
              <tr className="th">
                <th className="item">ITEM</th>
                <th className="price">PRICE</th>
                <th className="quantity">QUANTITY</th>
              </tr>
            </thead>
            <tbody>{producst}</tbody>
          </Table>
          <div>
            <span>Total</span> <span>$27.98</span>
          </div>
          <div>
            <Button>PURCHESE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
