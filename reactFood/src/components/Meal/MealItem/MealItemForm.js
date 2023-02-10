import React from "react";
import Input from "../../Ui/Input";
import Classes from "./MealitemForm.module.css";
function MealItemForm(props) {
  return (
    <form className={Classes.form}>
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
      <button>+Add</button>
    </form>
  );
}

export default MealItemForm;
