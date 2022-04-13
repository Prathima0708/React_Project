// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

import { useNavigate } from "react-router-dom"
import NewMeetUpForm from "../components/meetups/NewMeetUpForm"

export default function Newmeetups() {
 const navigate= useNavigate()
  function addMeetUpHandler(meetUpData){
    fetch('https://section-29-4a8ae-default-rtdb.firebaseio.com/meetups.json',{
      method:'POST',
      body:JSON.stringify(meetUpData),
      headers:{
        'Content-Type':'application/json'
      }

    }).then(()=>{
      navigate('/')
    })
  }
  return (
   <section>
       <h1>Add NewMeetUp</h1>
       <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
   </section>
  )
}









// const Newmeetups = () => {
//   const navigate=useNavigate()

//   function addMeetUpHandler(meetUpData){
//     fetch('https://section-29-4a8ae-default-rtdb.firebaseio.com/meetups.json',{
//       method:'POST',
//       body:JSON.stringify(meetUpData),
//       headers:{
//         'Content-Type':'application/json'
//       }
//     }).then(()=>{
//       navigate('/')
//     })
//   }

//   return (
//    <section>
//      <h1>Add NewMeetUp</h1>
//      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
//    </section>
//   )
// }

// export default Newmeetups

