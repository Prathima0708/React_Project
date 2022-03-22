import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux'
// import store from './React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/index'
import {BrowserRouter} from 'react-router-dom'



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
  
 <BrowserRouter>
    <App />
   
   {/* </React.StrictMode>, */}
   </BrowserRouter>,
  document.getElementById('root')
);





