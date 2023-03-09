import React, { useContext, useRef } from "react";
import MediContext from "../../store/medicine-context";

const MedicineForm = () => {
  const amountInputRef = useRef();
  const medcnt = useContext(MediContext);

  const addItemHandler = (e) => {
    e.preventDefault();
    let amount = +amountInputRef.current.value;
    medcnt.addItem({
      id: "5",
      name: e.target.medicine.value,
      description: e.target.description.value,
      price: e.target.price.value,
      amount: amount,
    });
  };
  return (
    <form className="form" onSubmit={addItemHandler}>
      <label htmlFor="">Medicine Name:</label>
      <input name="medicine" type="text" />
      <label>Description:</label>
      <input name="description" type="text" />
      <label htmlFor="">Price:</label>
      <input name="price" type="text" />
      <label>Quantity</label>
      <input type="number" className="number" min={1} ref={amountInputRef} />
      <button>Add</button>
    </form>
  );
};

export default MedicineForm;
