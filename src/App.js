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
import AddUser from './components/Users/AddUser';
// import ExpenseItem from './components/ExpenseItem';
import UsersList from './components/Users/UsersList';
import NumberGuessing from "./NumberGuessing";








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

      const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return(
    <div>
      <h1>Adding New Expenses and filtering out by year</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
    <h1>******************************************************</h1>
    <h1>Adding User form (with some validation)</h1>
    <AddUser onAddUser={addUserHandler} />
    
      <UsersList users={usersList} />
      <h1>******************************************</h1>
      <NumberGuessing />
   
    </div>
  )
}


export default App;









// function App() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prevUsersList) => {
//       return [
//         ...prevUsersList,
//         { name: uName, age: uAge, id: Math.random().toString() },
//       ];
//     });
//   };

//   return (
//     <div>
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
      
//     </div>
//   );
// }

// export default App;