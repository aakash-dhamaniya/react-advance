import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";
const App = () => {
  const expense = [
    {
      id: "e2",
      title: "New Tv",
      amount: 799,
      date: new Date(2022, 6, 12),
      LocationOfExpenditure: "laxmi nagar",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2022, 8, 12),
      LocationOfExpenditure: "pandav nagar",
    },
    {
      id: "e4",
      title: "new Dest (Wooden)",
      amount: 94.12,
      date: new Date(2022, 8, 13),
      LocationOfExpenditure: "mayur vihar",
    },
  ];
  // let arr=[];
  // for(let i=0;i<expense.length;i++){
  //   arr[i]=<div>
  //   <ExpenseItem
  //   title={expense[i].title}
  //   amount={expense[i].amount}
  //   date={expense[i].date} location={expense[i].location}>
  //   </ExpenseItem>

  // </div>
  // }
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expense} />
    </div>
  );
};

export default App;
