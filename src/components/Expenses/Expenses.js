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



import './Expenses.css';
import ExpensesChart from './ExpensesChart';

// function Expenses (props)  {

//     const[filteredYear,setFilteredYear]=useState('2020')

//     const filterChangeHandler=selectedYear=>
//     {
//        setFilteredYear(selectedYear)
//     }
//     const filteredExpenses=props.items.filter(expense=>
//       {
//         return expense.date.getFullYear().toString()===filteredYear;

//       });

      
    
//   return (
//       <div className='expenses'>
//                <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />

//       <ExpensesList items={filteredExpenses} />
        


//     </div>
//   );
// }

// export default Expenses;





const Expenses=(props)=>
{
  const[filteredYear,setFilteredYear]=useState('2020')

  const filterChangeHandler=(selectedYear)=>
  {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses=props.items.filter(expense=>                      //filter -array method
          {
            return expense.date.getFullYear().toString()===filteredYear;
    
          });
            
 
  return(
    <div className='expenses'>
    <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
    {/* <ExpensesChart expenses={filteredExpenses} /> */}

    <ExpensesList items={filteredExpenses} />

    {/* {filteredExpenses.map((expense)=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

    {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
    <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}

    </div>

  )
}
export default Expenses