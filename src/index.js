import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux'
// import store from './React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/index'
import {BrowserRouter} from 'react-router-dom'
import { combineReducers, createStore } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { FavoritesContextProvider } from './React Learning/Components/Udemy_Course_Examples/Section 29/Example-2/store/favorites-context';
// import ProductsProvider from "./React Learning/Components/Udemy_Course_Examples/ReplacingRedux/context/products-context"
// import AuthContextProvider from './React Learning/Components/Udemy_Course_Examples/Section28/components/context/auth-context';
import {Provider} from 'react-redux'
import store from "./React Learning/Components/Examples/Website/components/redux/store"



ReactDOM.render(
  // <React.StrictMode> 

  
   <BrowserRouter>
<Provider store={store}>
<App />
   
</Provider>
    
   {/* </React.StrictMode>, */}
  
   </BrowserRouter>

    ,

  document.getElementById('root')
);



























