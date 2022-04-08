import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
// import store from './React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/index'
import {BrowserRouter, Routes} from 'react-router-dom'
import ProductsProvider from "./React Learning/Components/Udemy_Course_Examples/ReplacingRedux/context/products-context"
import AuthContextProvider from './React Learning/Components/Udemy_Course_Examples/Section28/components/context/auth-context';



ReactDOM.render(
  // <React.StrictMode> 
   <BrowserRouter>
 
    <App />
   
   {/* </React.StrictMode>, */}
   </BrowserRouter> ,
  document.getElementById('root')
);








