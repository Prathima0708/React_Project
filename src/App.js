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




import React,{useState ,useEffect}from 'react';


import Clock from './Clock';

// import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Greetings from './components/Greetings';
import NewExpense from './components/NewExpenses/NewExpense';
import AddUser from './components/Users/AddUser';
// import ExpenseItem from './components/ExpenseItem';
import UsersList from './components/Users/UsersList';
import NumberGuessing from "./NumberGuessing";








const DUMMY_EXPENSES=[
    
  {
      id: 'e1',
      title: 'New Car',
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

      

      const [usersList, setUsersList] = useState([]);           //adding users
      const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };



  const [timerDays,setTimerDays]=useState()                         //timer
  const [timerHours,settimerHours]=useState()
  const [timerMinutes,settimerMinutes]=useState()
  const [timerSeconds,settimerSeconds]=useState()

  let interval;

  const startTimer=()=>
  {
    const countDownDate=new Date("Mar 9,2022").getTime();
    interval=setInterval(()=>{
      const now=new Date().getTime()
      const distance=countDownDate-now

      const days=Math.floor(distance/(24*60*60*1000))
      
      const hours=Math.floor((distance%(24*60*60*1000)) / (1000*60*60))

      const minutes=Math.floor((distance%(60*60*1000)) / (1000*60))

      const seconds=Math.floor((distance%(60*1000)) / 1000)

      if(distance<0)
      {
        clearInterval(interval.current)
      }
      else
      {
        setTimerDays(days)
        settimerHours(hours)
        settimerMinutes(minutes)
        settimerSeconds(seconds)
      }
    })
  }

useEffect(()=>{
  startTimer()
})

  return(
    <div>
     
      <h1>1)Adding New Expenses and filtering out by year :</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />

    <h1>******************************************************</h1>
    <h1>2)Adding User form (with some validation):</h1>
    <AddUser onAddUser={addUserHandler} />   {/*inside adduser componenet we should make use of onAddUser passed as a props here*/}
    
      <UsersList users={usersList} />
      <h1>************************************************</h1>
      <h1>3)CountDown Timer:</h1>

     <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
      <h2>************************************************</h2>
      <NumberGuessing />
      {/* <div className="p-4">
      <button className="bg-blue-500 text-white-500 p-7 rounded-lg">testing</button>
      </div> */}

<h1>***************************************************</h1>
<h1>5)Displaying greeting based on time</h1>
<Greetings />
    
     
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