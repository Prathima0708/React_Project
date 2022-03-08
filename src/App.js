import React, { Fragment, useEffect, useState } from "react";
import Cart from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Cart/Cart";


import Header from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Header";
import Meals from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Meals/Meals";


const App = (props) => {
  
  

  return (
    <Fragment>
      <Cart />
 <Header />

<main>
  <Meals />
</main>
    </Fragment>
  );
};

export default App;
