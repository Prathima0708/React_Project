// import './AddUser.css';

// import Card from '../UI/Card';
// import classes from './AddUser.module.css'
// import { useState } from 'react';


// const AddUser=props=>
// {
//     const [enteredUsername,setEnteredUsername]=useState('')
//     const [enteredAge,setEnteredAge]=useState('')

//     const addUserHandler=(event)=>
//     {
//         event.preventDefault();  //preventing default submission of form
//         if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
//         {
//             return
//         }
//         if (+enteredAge<1)
//         {
//             return
//         }
//       props.onAddUser(enteredUsername,enteredAge);
//         setEnteredUsername('')
//         setEnteredAge('')
//     }

//     const userNameChangeHandler=(event)=>
//     {
//         setEnteredUsername(event.target.value)

//     }
    
//     const ageChangeHandler=(event)=>
//     {
//         setEnteredAge(event.target.value)

//     }


//     return(
//         <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//             <label htmlFor="username">User Name</label>
//             <input type="text" value={enteredUsername} id="username" onChange={userNameChangeHandler} />

//             <label htmlFor="age">Age (in years)</label>
//             <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />

//             <button type="submit">Add User</button>

        

//         </form>
//         </Card>
//     )
// }
// export default AddUser;





import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');  //state to collect user entered values
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();   //for managing error state

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredUsername,enteredAge)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {    //trim method removes extra white spaces
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {   //converting enetred age to number by + ,default it is string
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');  //restting the fields after the submission(while resetting value property needs to be added in input feild)
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {    
    setEnteredUsername(event.target.value);  //setting the user entered value through event obj
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (             //outputting conditionally
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>  {/*custom comp button*/}
        </form>
        
      </Card>
    </div>
  );
};

export default AddUser;