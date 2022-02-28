import { useState } from 'react'
import Backdrop from './Backdrop'
import './index.css'
import Modal from './Modal'

function Todo(props)
{
    const [showModal,setShowModal]=useState(false)
    function deleteHandler()
    {
        setShowModal(true)
    }
    return(
        <div className='container'>
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      {showModal ? <Modal/>:null}
      {showModal ? <Backdrop /> : null}
      </div>
      </div>
    )
}
export default Todo