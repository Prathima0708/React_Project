// import { useContext, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../store/auth-context';
// import classes from './ProfileForm.module.css';

// const ProfileForm = () => {

//   const navigate=useNavigate()

//   const newPasswordInputRef=useRef()
//   const authCtx=useContext(AuthContext)

//   const submitHandler=(event)=>{
//     event.preventDefault()

//     const enteredNewPassword=newPasswordInputRef.current.value

//     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFdhqV0mWVEuPjRq5t25omJJWRlYnJbh8',{
//       method:'POST',
//       body:JSON.stringify({
//         idToken:authCtx.token,
//         password:enteredNewPassword,
//         returnSecureToken:false
//       }),
//       headers:{
//         'Content-Type':'application/json'

//       }
//     }).then(res=>{
//       //assumption:always success
//       navigate('/')
//     })
//   }

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <div className={classes.control}>
//         <label htmlFor='new-password'>New Password</label>
//         <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
//       </div>
//       <div className={classes.action}>
//         <button>Change Password</button>
//       </div>
//     </form>
//   );
// }

// export default ProfileForm;




// import { useRef, useContext } from 'react';
// import {  useNavigate } from 'react-router-dom';

// import AuthContext from '../../store/auth-context';
// import classes from './ProfileForm.module.css';

// const ProfileForm = () => {
//   const navigate = useNavigate();

//   const newPasswordInputRef = useRef();
//   const authCtx = useContext(AuthContext);

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredNewPassword = newPasswordInputRef.current.value;

//     // add validation

//     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFdhqV0mWVEuPjRq5t25omJJWRlYnJbh8', {
//       method: 'POST',
//       body: JSON.stringify({
//         idToken: authCtx.token,
//         password: enteredNewPassword,
//         returnSecureToken: false
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(res => {
//       // assumption: Always succeeds!
//       navigate('/')
//     });
//   };

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <div className={classes.control}>
//         <label htmlFor='new-password'>New Password</label>
//         <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
//       </div>
//       <div className={classes.action}>
//         <button>Change Password</button>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;





import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;