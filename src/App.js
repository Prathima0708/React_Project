import React, { useState } from "react";

import Clock from "./React Learning/Components/Examples/Clock/Clock";

import Expenses from "./React Learning/Components/Expenses/Expenses";
import Greetings from "./React Learning/Components/Examples/Greetings/Greetings";
import NewExpense from "./React Learning/Components/NewExpenses/NewExpense";
import AddUser from "./React Learning/Components/Users/AddUser";

import UsersList from "./React Learning/Components/Users/UsersList";
import NumberGuessing from "./React Learning/Components/Examples/NumberGuess/NumberGuessing";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Car",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (
    expense //expense passed here as an arg is the new expense we are getting
  ) => {
    // console.log("in app.js")
    // console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const [usersList, setUsersList] = useState([]); //adding users
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*as new expense we are using in app.js file ,need to pass props here and use it in newexpense.js file*/}
      <Expenses items={expenses} />
      {/*passing items props and using in expenses comp*/}

      <AddUser onAddUser={addUserHandler} />
      {/*inside adduser componenet we should make use of onAddUser passed as a props here*/}
      <UsersList users={usersList} />

      <Clock
        timerDays={props.timerDays}
        timerHours={props.timerHours}
        timerMinutes={props.timerMinutes}
        timerSeconds={props.timerSeconds}
      />

      <NumberGuessing />

      <Greetings />
      {/* 
<Calculator />
     */}
    </div>
  );
};

export default App;
