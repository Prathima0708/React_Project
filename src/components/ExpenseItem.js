import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
function ExpenseItem(props)
{
    const [title,setTitle]=useState(props.title);
    // console.log('Expense item evualted by recat');
     const ClickHandler=()=>
     {
         setTitle('updated')
         console.log('title updated')
     }
     
    return(
        <li>
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_decription">
                <h1>{title}</h1>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            <button onClick={ClickHandler}>Change Title</button>
        </div>
        </li>
    );
}

export default ExpenseItem;



