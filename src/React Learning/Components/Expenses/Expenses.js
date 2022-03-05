import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
// import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); //creating state to managed filtered expenses

  const filterChangeHandler = (
    selectedYear //passing selected year as an arg
  ) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (
      expense //filter -array method
    ) => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />{" "}
      {/*passing onChangeFilter and selected as props}
    {/* <ExpensesChart expenses={filteredExpenses} /> */}
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.map((expense)=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}
      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
    <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
    </div>
  );
};
export default Expenses;
