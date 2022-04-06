import React, { useEffect, useRef, useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter,setenteredFilter]=useState('')
  const {onLoadIngredients}=props
  const inputRef=useRef()

  useEffect(()=>{
  const timer=  setTimeout(() => {
      if(enteredFilter===inputRef.current.value) {
        const query=enteredFilter.length===0 ? '':`?orderBy="title"&equalTo="${enteredFilter}"`
    fetch(
      "https://react-hooks-261cc-default-rtdb.firebaseio.com/ingredients.json"+ query
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
       onLoadIngredients(loadedIngredients)
      });
      }
      
    }, 500);
    return ()=>{
      clearTimeout(timer)
    }
    
  },[enteredFilter,onLoadIngredients,inputRef])

  const filterHandler=(event)=>{
    setenteredFilter(event.target.value)
  }
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={filterHandler} ref={inputRef} />
        </div>
      </Card>
    </section>
  );
});

export default Search;