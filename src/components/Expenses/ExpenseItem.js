import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
// function ExpenseItem(props)
// {
//     const [title,setTitle]=useState(props.title);
//     // console.log('Expense item evualted by recat');
//      const ClickHandler=()=>
//      {
//          setTitle('updated')
//          console.log('title updated')
//      }
     
//     return(
//         <li>
//         <div className="expense-item">
//             <ExpenseDate date={props.date} />
//             <div className="expense-item_decription">
//                 <h1>{title}</h1>
//                 <div className="expense-item_price">${props.amount}</div>
//             </div>
//             <button onClick={ClickHandler}>Change Title</button>
//         </div>
//         </li>
//     );
// }

// export default ExpenseItem;










const ExpenseItem=(props)=>
{
    const [title,setTitle]=useState(props.title)
    const clickHandler=()=>
    {
        setTitle("Clicked")
    }
    
    return(
        <li>
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'><h2>{title}</h2></div>
            <div className='expense-item_price'>${props.amount}</div>
            <button onClick={clickHandler} style={{marginLeft:20,height:33,backgroundColor:'lightblue',color:"black",borderRadius:5,fontSize:15,cursor:'pointer'}}>Change Title</button>
        </div>
        </li>
    )

}
export default ExpenseItem




