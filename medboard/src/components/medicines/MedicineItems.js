import React from "react";

function MedicineItems(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <button>add to cart</button>
    </tr>
  );
}

export default MedicineItems;
