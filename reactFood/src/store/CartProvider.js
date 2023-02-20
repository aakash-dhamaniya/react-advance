import { useState } from "react";
import CartContext from "./cart-context";
// let items = [];
const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log("inside addItemToCartHandler", cartContext);
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    totalAmmount: 0,
    addItem: addItemToCartHandler,
    removItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside crtContext", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
