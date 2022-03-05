import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //using this comp in expenses.js file
  const dropDownChangeHandler = (event) => {
    // console.log(event.target.value)  //need to forward the picked value to expenses.js file as we use this comp there
    props.onChangeFilter(event.target.value); //calling onChangeFilter via props passed as a prop in expenses.js file
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          {" "}
          {/* first adding onchange event to listen to changes, props.selected = selected attribute set in expenses.js file*/}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
