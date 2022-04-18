// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import {Provider} from 'react-redux'
// // import store from './React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/index'
// import {BrowserRouter} from 'react-router-dom'
// import { combineReducers, createStore } from 'redux';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'
// import { FavoritesContextProvider } from './React Learning/Components/Udemy_Course_Examples/Section 29/Example-2/store/favorites-context';
// // import ProductsProvider from "./React Learning/Components/Udemy_Course_Examples/ReplacingRedux/context/products-context"
// // import AuthContextProvider from './React Learning/Components/Udemy_Course_Examples/Section28/components/context/auth-context';
// import {Provider} from 'react-redux'
// import productReducer from './React Learning/Components/Udemy_Course_Examples/ReplacingRedux/store/reducers/products'



// ReactDOM.render(
//   // <React.StrictMode> 

  
//    <BrowserRouter>

//     <App />
   
//    {/* </React.StrictMode>, */}
  
//    </BrowserRouter>

//     ,

//   document.getElementById('root')
// );


















import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import ProductsContextProvider from './React Learning/Components/Udemy_Course_Examples/ReplacingRedux/context/products-context';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './React Learning/Components/Udemy_Course_Examples/ReplacingRedux/store/reducers/products'




ReactDOM.render(
  // <React.StrictMode> 

  <ProductsContextProvider>
   <BrowserRouter>

    <App />
   
   {/* </React.StrictMode>, */}
  
   </BrowserRouter>
   </ProductsContextProvider>
    ,

  document.getElementById('root')
);




