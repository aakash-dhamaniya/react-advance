import React, { useContext, useState } from "react";
import MediContext from "../../store/medicine-context";
import MedicineItems from "./MedicineItems";
import "./ShowMedicine.css";
const ShowMedicine = ({ medicines }) => {
  const mediItems = medicines.map((item) => {
    return (
      <MedicineItems
        key={item.medicine}
        name={item.medicine}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className="items">
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {medicines.length < 1 && <div> no data found</div>}
        {mediItems}
      </table>
    </div>
  );
};

export default ShowMedicine;
