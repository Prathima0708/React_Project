// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "./ExpenseFilter";
// import NewExpense from "./NewExpense";
// import { useState } from "react";


// const dummy_expenses=[
//     {title:'abc',amount:77.7,date:new Date(2022,3,27)},
//     {title:'xyz',amount:99.0,date:new Date(2020,4,23)}

//   ];
// function Expenses(props)
// {
//     const [expenses,setExpenses]=useState(dummy_expenses);
//     const [filteredYear,setFilteredYear]=useState('2020');

//     const filterChangeHandler=selectedYear=>
//     {
      
//         setFilteredYear(selectedYear)
//     }
//     const addExpenseHandler = expense => {
//         setExpenses((prevExpenses)=>
//           {
//             return [expense,...prevExpenses]
//           });
//       };
    
     
//     // const expenses=[
//     //     {tiltle:'abc',amount:77.7,date:new Date(2022,3,27)},
//     //     {tiltle:'xyz',amount:99.0,date:new Date(2020,4,23)}
    
//     //   ];
//     return(
//         <div className="expenses">
//              <NewExpense onAddExpense={addExpenseHandler}/>
//         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//         {expenses.map((e) => ( <ExpenseItem  title={e.title} amount={e.amount} date={e.date} />
//         ))}
        
       
//         {/* <ExpenseItem title={expenses[0].tiltle} amount={expenses[0].amount} date={expenses[0].date}/>
//         <ExpenseItem title={expenses[1].tiltle} amount={expenses[1].amount} date={expenses[1].date}/> */}
//         </div>
//     );
// }
// export default Expenses;







import React ,{useState} from 'react';


import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList';

// import './Expenses.css';

function Expenses (props)  {

    const[filteredYear,setFilteredYear]=useState('2020')

    const filterChangeHandler=selectedYear=>
    {
       setFilteredYear(selectedYear)
    }
    const filteredExpenses=props.items.filter(expense=>
      {
        return expense.date.getFullYear().toString()===filteredYear;

      });

      
    
  return (
      <div className='expenses'>
               <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

      <ExpensesList items={filteredExpenses} />
        


    </div>
  );
}

export default Expenses;