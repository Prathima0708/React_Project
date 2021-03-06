import React, { useRef } from 'react'
import Card from '../UI/Card'
import classes from './NewMeetUpForm.module.css'

export default function NewMeetUpForm(props) {
  const titleInputRef= useRef()
  const imageInputRef= useRef()
  const addressInputRef= useRef()
  const descpInputRef= useRef()

  function submitHandler(event){
    event.preventDefault()
    const enteredTitle=titleInputRef.current.value
    const enteredImage=imageInputRef.current.value
    const enteredAddress=addressInputRef.current.value
    const enteredDescp=descpInputRef.current.value

    const meetUpData={
      title:enteredTitle,
      image:enteredImage,
      address:enteredAddress,
      descp:enteredDescp
    }

    // console.log(meetUpData)
    props.onAddMeetup(meetUpData)

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>MeetUp Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>

        <div className={classes.control}>
          <label htmlFor='image'>MeetUp Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>

        <div className={classes.control}>
          <label htmlFor='addresss'>Address</label>
          <input type='text' required id='address' ref={addressInputRef}/>
        </div>
        
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea required id='description' rows='5' ref={descpInputRef}/>
        </div>

        <div className={classes.actions}>
          <button>Add MeetUp</button>
        </div>

          </form>  
    </Card>
  )
}
















// import React, { useRef } from 'react'
// import Card from '../UI/Card'
// import classes from './NewMeetUpForm.module.css'

// const NewMeetUpForm = (props) => {
//  const titleInputRef= useRef()
//  const imageInputRef=useRef()
//  const addressInputRef=useRef()
//  const descpInputRef=useRef()

//   function submitHandler(event){
//     event.preventDefault()

//     const enteredTitle=titleInputRef.current.value
//     const enteredImage=imageInputRef.current.value
//     const enteredAddress=addressInputRef.current.value
//     const enteredDescp=descpInputRef.current.value

//     const meetUpData={
//       title:enteredTitle,
//       image:enteredImage,
//       address:enteredAddress,
//       desc:enteredDescp
//     }

//     props.onAddMeetUp(meetUpData)
    

//   }

//   return (
//    <Card>
//      <form className={classes.form} onSubmit={submitHandler}>
//        <div className={classes.control}>
//          <label htmlFor='text'>Meet up Title</label>
//          <input type="text" required id='text' ref={titleInputRef} />
//        </div>

//        <div className={classes.control}>
//          <label htmlFor='url'>Meet up Image</label>
//          <input type="url" required id='url' ref={imageInputRef} />
//        </div>

//        <div className={classes.control}>
//          <label htmlFor='address'>Meet up Address</label>
//          <input type="address" required id='address' ref={addressInputRef} />
//        </div>

//        <div className={classes.control}>
//          <label htmlFor='description'>Meet up Description</label>
//          <textarea type="description" rows={5} required id='description' ref={descpInputRef} />
//        </div>

//       <div className={classes.actions}>
//         <button>Add NewMeetUp</button>
//       </div>

//      </form>
//    </Card>
//   )
// }



// export  default NewMeetUpForm
