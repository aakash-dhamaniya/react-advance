import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  function saveExpenseDataHandler(enterdExpenseData) {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random.toString(),
    };
    props.newData(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}
