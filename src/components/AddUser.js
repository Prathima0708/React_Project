import './AddUser.css';
import { useState } from 'react';


const AddUser=props=>
{
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')

    const addUserHandler=(event)=>
    {
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {
            return
        }
        if (+enteredAge<1)
        {
            return
        }
      props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    const userNameChangeHandler=(event)=>
    {
        setEnteredUsername(event.target.value)

    }
    
    const ageChangeHandler=(event)=>
    {
        setEnteredAge(event.target.value)

    }


    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input type="text" value={enteredUsername} id="username" onChange={userNameChangeHandler} />

            <label htmlFor="age">Age (in years)</label>
            <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />

            <button type="submit">Add User</button>

        

        </form>
    )
}
export default AddUser;