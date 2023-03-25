import React from "react";
import Modal from "../../Ui/Modal";
import { useState } from "react";

const Update = (props) => {
  console.log(props);
  const [medicine, setMedicine] = useState(props.item[0]);
  const [description, setDescription] = useState(props.item[1]);
  const [price, setPrice] = useState(props.item[2]);
  const [quantity, Setquantity] = useState(props.item[3]);
  function addItemHandler() {
    
  }
  return (
    <Modal onClose={props.onClose}>
      <div>
        <form onSubmit={addItemHandler}>
          <label htmlFor="">Medicine Name:</label>
          <input
            name="medicine"
            type="text"
            required
            onChange={(e) => setMedicine(e.target.value)}
            value={medicine}
          />
          <label>Description:</label>
          <input
            name="description"
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label htmlFor="">Price:</label>
          <input
            name="price"
            type="number"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <label>Quantity</label>
          <input
            type="number"
            className="number"
            min={1}
            required
            onChange={(e) => Setquantity(e.target.value)}
            value={quantity}
          />
          <button>update</button>
        </form>
      </div>
    </Modal>
  );
};

export default Update;
