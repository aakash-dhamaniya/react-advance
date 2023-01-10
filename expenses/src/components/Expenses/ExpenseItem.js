import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import Button from "../Button";
const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const changeMoney = (e) => {
    setAmount("100$");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="location"> {props.location}</div>
          <div className="expense-item_price">{amount}</div>
          <div className="edit_button">
            <Button onClick={changeMoney} text={"$"} />
          </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
