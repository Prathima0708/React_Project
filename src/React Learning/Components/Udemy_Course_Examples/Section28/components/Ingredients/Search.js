import React, { useEffect, useRef, useState } from "react";
import useHttp from "../customhooks/use-http";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilter, setenteredFilter] = useState("");
  const { onLoadIngredients } = props;
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
            sendRequest("https://react-hooks-261cc-default-rtdb.firebaseio.com/ingredients.json" +
            query,'GET')  
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef,sendRequest]);

  useEffect(()=>{
    if(!isLoading && !error && data){
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    
    }

  },[data,isLoading,error,onLoadIngredients])


  const filterHandler = (event) => {
    setenteredFilter(event.target.value);
  };
  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            type="text"
            value={enteredFilter}
            onChange={filterHandler}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
