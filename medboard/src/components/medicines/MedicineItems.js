import React from "react";

function MedicineItems(props) {
  const updateItemHandler = () => {
    props.onShowUpdate(
      props.name,
      props.description,
      props.price,
      props.quantity
    );
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>${props.price}</td>
      <td>{props.quantity}</td>
      <div className="add-update">
        <button>cart</button>
        <button onClick={updateItemHandler}>Udate</button>
      </div>
    </tr>
  );
}

export default MedicineItems;
