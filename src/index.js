import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux'
// import store from './React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/index'
import {BrowserRouter, Routes} from 'react-router-dom'
import {AuthContextProvider} from './React Learning/Components/Udemy_Course_Examples/Authentication Section/store/auth-context'



// ReactDOM.render(
//   // <React.StrictMode> 
//    <Provider store={store} >
 
//     <App />
   
//    {/* </React.StrictMode>, */}
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  // <React.StrictMode> 
  <AuthContextProvider>
  <BrowserRouter>

    <App />
   
   {/* </React.StrictMode>, */}
 
   </BrowserRouter>
   </AuthContextProvider>,
  document.getElementById('root')
);





