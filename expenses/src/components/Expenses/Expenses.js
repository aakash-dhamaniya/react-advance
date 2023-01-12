import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandle = (selectedYear) => {
    setFilterYear(selectedYear);
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
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
