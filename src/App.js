import React, {  useEffect, useState } from "react";
import Form from "./React Learning/Components/Examples/Form";

import Cart from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Cart/Cart";


import Header from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Header/Header";
import Meals from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Meals/Meals";
import CartProvider from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Store/CartProvider";
import Card from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/UI/Card";


const App = (props) => {
  
  const [cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>
  {
    setCartIsShown(true)
  }
  const hideCartHandler=()=>
  {
    setCartIsShown(false)
  }


 
  








  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}  
 <Header onShowCart={showCartHandler} />

<main>
  <Meals />
</main>
<Form />
    </CartProvider>


  );
};

export default App;
