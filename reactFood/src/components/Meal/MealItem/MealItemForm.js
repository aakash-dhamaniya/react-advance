import React, { useContext, useRef } from "react";
import Input from "../../Ui/Input";
import Classes from "./MealitemForm.module.css";
import CartContext from "../../../store/cart-context";
function MealItemForm(props) {
  const amountInputRef = useRef();
  const cartcnt = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    // const quantity = document.getElementById("amount_" + props.id).value;
    // if (!cartcnt.items.some((el) => el.id === props.item.id))
    //   cartcnt.addItem({ ...props.item, quantity: quantity });
    // else {
    //   cartcnt.items.forEach((el) => {
    //     if (el.id === props.id) {
    //       el.quantity = +el.quantity + +quantity;
    //     }
    //   });
    // }
    let amount = +amountInputRef.current.value;
    const price = `₹${props.item.price.toFixed(2)}`;
    cartcnt.addItem({
      id: props.item.id,
      name: props.item.title,
      amount: amount,
      price: props.item.price,
    });
  };
  return (
    <form className={Classes.form}>
      {/* {console.log("inside render", cartcnt.items)} */}
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
        ref={amountInputRef}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
}

export default MealItemForm;
