import React, { useContext, useRef } from 'react'
import { TodosContext } from '../store/todos.context'
import classes from './NewTodo.module.css'

const NewTodo :React.FC = () => {
    const todosCtx=useContext(TodosContext)
    const todoTextInputRef=useRef<HTMLInputElement>(null)

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault()
        
        const enteredTodoText=todoTextInputRef.current!.value

      if(enteredTodoText.trim().length===0){
          //throw a error
          return
      }
        
      todosCtx.addTodo(enteredTodoText)
      todoTextInputRef.current!.value=''
    }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type="text" id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
  )
}


export  default NewTodo