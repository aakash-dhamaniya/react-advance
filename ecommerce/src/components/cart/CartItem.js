import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./CartItem.css";
function CartItem(props) {
  const ctx = useContext(CartContext);
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  return (
    <tr className="items">
      <td className="image-title">
        <span id="img">
          <img src={props.image} alt={props.title} />
        </span>
        <span className="title">{props.title}</span>
      </td>
      <td className="tdprice">
        <div className="priceValue">${props.price}</div>
      </td>
      <td>
        <div className="quan-rem">
          <span className="quantity">
            <input type="text" min={1} value={props.quantity} />
          </span>
          <span className="rem">
            <Button
              onClick={() => {
                removeItemHandler(props.id);
              }}
              style={{ fontSize: "10px" }}
            >
              Remove
            </Button>
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
