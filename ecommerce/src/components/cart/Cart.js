import React, { useContext } from "react";
import "../cart/Cart.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
function Cart() {
  const ctx = useContext(CartContext);
  const TotalAmount = ctx.totalAmount;
  const producst = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
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
            {" "}
            <span>Total</span> <span>${TotalAmount}</span>{" "}
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
