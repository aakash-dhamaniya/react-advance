import React, { useState } from "react";
import "./ExpenseForm.css";
import Button from "../../Button";
import Expenses from "../Expenses";
export default function ExpenseForm(props) {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredtitle(e.target.value);
  };
  const amuntChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  function newItem(e) {
    e.preventDefault();
    const object = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      LocationOfExpenditure: "Delhi",
    };

    props.onSaveExpenseData(object);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredtitle("");
  }
  return (
    <form onSubmit={newItem}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.1"
            onChange={amuntChangeHandler}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-11-1"
            max="2023-12-31"
            onChange={dateChangeHandler}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="submit" text={"Add Expense"}></Button>
      </div>
    </form>
  );
}
