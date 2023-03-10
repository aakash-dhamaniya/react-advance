import React, { useContext, useState } from "react";
import MediContext from "../../store/medicine-context";
import MedicineItems from "./MedicineItems";
import "./ShowMedicine.css";
const ShowMedicine = () => {
  const medCnt = useContext(MediContext);
  const localstorage = localStorage;
  const localStoragekey = Object.keys(localstorage);
  const MediItems = localStoragekey.map((key) => {
    const detailsString = localstorage[key];
    const detailsobj = JSON.parse(detailsString);
    return (
      <MedicineItems
        key={detailsobj.name}
        name={detailsobj.name}
        description={detailsobj.description}
        price={detailsobj.price}
        quantity={detailsobj.quantity}
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
        {MediItems}
      </table>
    </div>
  );
};

export default ShowMedicine;
