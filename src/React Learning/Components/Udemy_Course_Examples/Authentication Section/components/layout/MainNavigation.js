
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const navigate=useNavigate()
   const authCtx= useContext(AuthContext)
   const isLoggedIn=authCtx.isLoggedIn

   const logoutHandler=()=>{
     authCtx.logout()
    //  navigate('/')   //optional:redirecting user by navigation ,instead we can protect our frontend page (in app.js file) by conditionally outputting the route.
   }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
            {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          
          {isLoggedIn &&  <li>
            <Link to='/profile'>Profile</Link>
          </li> }

         {isLoggedIn &&  <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
         

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;