import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [IsEditing, SetIsEditing] = useState(false);

  const saveExpenseHandler = (
    enteredExpenseData //passing parameter to collect user input data collected in newexpense form
  ) => {
    const ExpenseData = {
      //creating another obj
      ...enteredExpenseData, //retrieving expenses collected (all values of obj created in newexpense form )
      id: Math.random.toString(),
    };
    // console.log(ExpenseData)
    props.onAddExpense(ExpenseData); //forwarding this ExpenseData created in this file(above) to app.js file (lifting state up)
  };
  const startEditingHandler = () => {
    SetIsEditing(true);
  };
  const stopEditingHandler = () => {
    SetIsEditing(false);
  };

  return (
    <div className="new-expense">
        
      {!IsEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {IsEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {/*passing   onSaveExpenseData as a props to use collected user input data from newexpense form comp*/}
    </div>
  );
};
export default NewExpense;
