// import "./App.css";
// import Card from "./Card";


// import Form from "./Form";

// import Hook from "./Hook";
// import NumberGuessing from "./NumberGuessing";
// function App() {

  // const employees = [
  //   { name: "Priya", role: "Frontend dev" },
  //   { name: "Prathima", role: "Tech lead" },
  //   { name: "Kavya", role: "Backend dev" },
  //   { name: "Ashwitha", role: "Compute Lead" },
  // ];

 
  // return (
    // <div>
    //   <h1> Hello, world</h1>
/*      
 {employees.filter(e => e.name !== "Priya").map((e) =>
        <Card name={e.name} role={e.role} />
      )}   */

   

       /* {employees.map((e) => (
        <Card name={e.name} role={e.role} />
      ))}    */

      /* <Form />  */
/* 

       <Hook /> */

       /* <NumberGuessing /> 



    </div> */
    
//   );
// }

// export default App;




import React,{useState}from 'react';

// import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
// import ExpenseItem from './components/ExpenseItem';


// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   }
//   // {
//   //   id: 'e4',
//   //   title: 'New Desk (Wooden)',
//   //   amount: 450,
//   //   date: new Date(2021, 5, 12),
//   // },
// ];

// const App = () => {
//   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

//   const addExpenseHandler = expense => {
//     setExpenses((prevExpenses) => {
//       return [expense, ...prevExpenses];
//     });
//   };
//   return (
//     <div>
//       <NewExpense onAddExpense={addExpenseHandler} />
//       <Expenses items={expenses} />
//     </div>
//   );
// }






const DUMMY_EXPENSES=[
    
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
const App=()=>
{
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
      const addExpenseHandler=(expense)=>  //expense passed here as an arg is the new expense we are getting
      {
        // console.log("in app.js")
        // console.log(expense)
        setExpenses((prevExpenses) => {
                return [expense, ...prevExpenses];
              });
      }

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
    </div>
  )
}

export default App;










// import React from 'react';
// import './Example/index.css';

// import Todo from './Example/Todo';
// function App()
// {
//   return (
//     <div>
//       <h1>My Todos</h1>
//      <Todo text="learn react" />
//      <Todo text="react corse"/>
//      <Todo text="full course"/>
    

//     </div>

//   )
// }
// export default App;