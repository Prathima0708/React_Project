import React , {useState} from 'react';
//import ExpenseDate from './ExpenseDate';
import './NewExpenseForm.css'
const NewExpenseForm=(props)=>
{
    const [EnteredTitle,SetEnteredTitle]=useState('');
    const [EnteredAmt,SetEnteredAmt]=useState('');
    const [EnteredDate,SetEnteredDate]=useState('');




    const TitleChangeHandler=(event)=>
    {
        SetEnteredTitle(event.target.value);
    }
    const AmountChangeHandler=(event)=>
    {
        SetEnteredAmt(event.target.value);
    }
    const DateChangeHandler=(event)=>
    {
        SetEnteredDate(event.target.value);
    }

    const SubmitHandler=(event)=>
    {
        event.preventDefault();
        const ExpenseData={
            title:EnteredTitle,
            amount:EnteredAmt,
            date:new Date(EnteredDate)
        };
        props.onSaveExpenseData(ExpenseData);
        SetEnteredTitle('');
        SetEnteredAmt('');
        SetEnteredDate('');
    }

    return(
        <form onSubmit={SubmitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={EnteredAmt} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
}
export default NewExpenseForm;