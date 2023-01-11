import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Button from "../../Button";
export default function NewExpense(props) {
  function saveExpenseDataHandler(enterdExpenseData) {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random.toString(),
    };
    props.newData(expenseData);
  }
  const [add, setAdd] = useState(false);

  function expenseAddHandler() {
    setAdd(true);
  }
  function changeState() {
    setAdd(false);
  }

  return (
    <div className="new-expense">
      {!add && (
        <Button onClick={expenseAddHandler} text={"Add Expenses"}></Button>
      )}
      {add && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          changeState={changeState}
        ></ExpenseForm>
      )}
    </div>
  );
}
