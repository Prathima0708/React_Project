// import { useContext } from 'react';
import { Switch, Route, Routes, Redirect, Navigate, Link } from 'react-router-dom';

import { useState } from "react"
import AuthPage from "./React Learning/Components/Examples/Login/components/pages/AuthPage"
import PhoneSignUp from './React Learning/Components/Examples/OTP/components/PhoneSignUp';
import '../src/App.css'



// import Layout from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/layout/Layout"
// import UserProfile from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/profile/UserProfile"
// import AuthPage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/AuthPage"
// import HomePage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/HomePage"
// import AuthContext from './React Learning/Components/Udemy_Course_Examples/Authentication Section/store/auth-context';

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path='/' element={  <HomePage />}>
        
//         </Route>
//         <Route path='/auth' element={<AuthPage />}>
          
//         </Route>
//         <Route path='/profile' element={  <UserProfile />}>
        
//         </Route>
//       </Routes>
//     </Layout>
//   );
// }

// export default App;


function App(){

  
  return(
    <>

{/* <Link to="/phoneSignUp">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit" className='w-72'>
              Sign in with Phone
            </Button>
          </div>
        </Link> */}

        <Routes>

          <Route path="/" element={<PhoneSignUp />}/>
        </Routes>


        
    </>
  )
}

export default App