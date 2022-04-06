import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount,setenteredAmount]=useState('')
  console.log('rendering ingredient form')

  const inputTitleHandler=(event)=>{
   setenteredTitle(event.target.value)
  }

  const inputAmountHandler=(event)=>{
   setenteredAmount(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title:enteredTitle,amount:enteredAmount})
    setenteredTitle("")
    setenteredAmount("")
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={inputTitleHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={inputAmountHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator />: null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;