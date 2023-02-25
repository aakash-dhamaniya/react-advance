import React, { useContext } from "react";
import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
function Cart(props) {
  const cartcnt = useContext(CartContext);
  const totalAmount = `₹${cartcnt.totalAmount.toFixed(2)}`;
  const hasItems = cartcnt.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartcnt.addItem({ ...item, amount: 1 });
  };
  const cartItemRmoveHandler = (id) => {
    cartcnt.removeItem(id);
  };
  const carItems = (
    <ul className={classes["cart-item"]}>
      {cartcnt.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemRmoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {carItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button-close"]}>
          Close
        </button>
        {hasItems && <button className={classes["button-order"]}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
