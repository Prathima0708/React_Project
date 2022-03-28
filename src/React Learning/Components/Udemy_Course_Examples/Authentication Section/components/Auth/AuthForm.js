import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import {useNavigate} from 'react-router-dom'

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const navigate=useNavigate()
    const emailInputRef=useRef()
    const passwordInputRef=useRef()

  const authCtx=  useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault()

    const enteredEmail=emailInputRef.current.value
    const enteredPassword=passwordInputRef.current.value

    setIsLoading(true)
    let url;
    if(isLogin){  //if we are in login mode

    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFdhqV0mWVEuPjRq5t25omJJWRlYnJbh8'
    }else{  
        
        //if we are in signup mode ,we will send req to api(url is from firebase rest auth api docs)
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFdhqV0mWVEuPjRq5t25omJJWRlYnJbh8'
   
    }

    fetch(url,
    {
        method :'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':'application/json'
        }
    } ).then(res=>{
        setIsLoading(false)
        if(res.ok){
            return res.json()
        }else{
           return res.json().then(data=>{
               let errorMessage='Authentication failed!'

              //  if(data && data.error && data.error.message){
              //      errorMessage=data.error.message   //.error.message is the object provided by default (by firebase) we can console.log(data) and check
              //  }
               
               throw new Error(errorMessage)
            })
        }
    }).then(data=>{   //adding another promise after 1st then block
        // console.log(data)  //sucess data
        const expirationTime=new Date(new Date().getTime + (+data.expiresIn*1000))
        authCtx.login(data.idToken,expirationTime.toISOString())
        navigate('/')
    }).catch(err=>{
        alert(err.message)
    })
  }

  return (
    <section className='m-3 mx-auto  mb-auto w-11/12 max-w-sm rounded-md bg-purple-900 p-4 text-center text-white  '>
      <h1 className='text-center text-white'>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
        {!isLoading &&   <button>{isLogin ? 'Login' : 'Create Account'}</button> }
        {isLoading && <p>Sending data...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;