import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHandler=(event)=>
    {
      // console.log(event.target.value)  //need to forward the picked value to expenses.js file
        props.onChangeFilter(event.target.value); 
        
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter_control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>  {/* props.selected = selected attribute set in expenses.js file*/}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;