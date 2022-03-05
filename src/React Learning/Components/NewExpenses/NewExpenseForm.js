import React, { useState } from "react";
//import ExpenseDate from './ExpenseDate';
import "./NewExpenseForm.css";
const ExpenseForm = (props) => {
  const [EnteredTitle, SetEnteredTitle] = useState(""); //to gather user inputs
  const [EnteredAmt, SetEnteredAmt] = useState("");
  const [EnteredDate, SetEnteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    SetEnteredAmt(event.target.value);
  };

  const DateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault(); //to stop automatic reloading of page when clicking on add expense button

    const ExpenseData = {
      //creating object to store all the user input values  by using state variables
      title: EnteredTitle,
      amount: EnteredAmt,
      date: new Date(EnteredDate),
    };

    //we need to pass collected data to app.js file where our new expense comp resides but we can pass it through parent to child .this expense form comp resides in new expense.js file first we need to pass props in that comp

    props.onSaveExpenseData(ExpenseData); //executing function onSaveExpenseData which we passed as an attribute in newexpense.js file in our custom component also forwarding this ExpenseData craeted above to newexpense.js file

    // console.log(ExpenseData)
    SetEnteredTitle(""); //clearing form data after clicking on submit button
    SetEnteredAmt("");
    SetEnteredDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      {" "}
      {/*if a buuton with type submit is present then we pass on submit event to form*/}
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>

        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmt}
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={DateChangeHandler}
          />
        </div>

        <div className="new-expense_actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
