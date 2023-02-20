import React, { useContext } from "react";
import Input from "../../Ui/Input";
import Classes from "./MealitemForm.module.css";
import CartContext from "../../../store/cart-context";
function MealItemForm(props) {
  const cartcnt = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    // cartcnt.items.push(props.item);
    cartcnt.addItem({ ...props.item, quantity: quantity });
    console.log("after addItemToCart", cartcnt.items);
  };
  return (
    <form className={Classes.form}>
      {console.log("inside render", cartcnt.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
}

export default MealItemForm;
