import React from "react";
import { Button } from "react-bootstrap";
import "./CartItem.css";
function CartItem(props) {
  return (
    <tr className="items">
      <td className="image-title">
        <span id="img">
          <img src={props.image} alt="" />
        </span>
        <span className="title">{props.title}</span>
      </td>
      <td className="tdprice">
        <div className="priceValue">{props.price}</div>
      </td>
      <td>
        <div className="quan-rem">
          <span className="quantity">
            <input type="number" min={1} />
          </span>
          <span className="rem">
            <Button style={{ fontSize: "10px" }}>Remove</Button>
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
