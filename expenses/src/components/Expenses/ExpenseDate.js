import './ExpenseDate.css'
const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString("default", { month: "long" }); 
    const date=props.date.toLocaleString("default",{day:'2-digit'}); 
    const year=props.date.getFullYear();
   return(
    <div className='date'>
                <div className="expense-date_month">{month}</div>
                <div className="expense-date_year">{year}</div>
                <div className="expense-date_day">{date}</div>
            </div>
   ) 
}
export default ExpenseDate;