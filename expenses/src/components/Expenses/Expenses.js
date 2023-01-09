import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeHandler={filterChangeHandle}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.LocationOfExpenditure}
            key={item.id}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};
export default Expenses;
