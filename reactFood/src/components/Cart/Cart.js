import React from "react";
import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";
function Cart(props) {
  const carItem = (
    <ul className={classes["cart-item"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {carItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>350</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
