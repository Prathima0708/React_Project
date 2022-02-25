import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import { useState } from 'react';
const NewExpense=(props)=>
{
    const [IsEditing,SetIsEditing]=useState(false)

    const saveExpenseHandler=(enteredExpenseData)=>
    {
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(ExpenseData)
        SetIsEditing(false)
    }

    const startEditingHandler=()=>
    {
        SetIsEditing(true)
    }
    const stopEditingHandler=()=>
    {
        SetIsEditing(false)
    }
    return(
        <div className='new-expense'>
           {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           {IsEditing && <NewExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;