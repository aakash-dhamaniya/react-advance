import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeHandler={filterChangeHandle}
      />
      {filteredExpenses.map((item) => {
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
