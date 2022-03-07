import React ,{useState}from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const[todos,setTodos]=useState([])

    const addTodo=todo=>
    {
       const newTodo=[todo,...todos]
       setTodos(newTodo)
       console.log(...todos)
    }
  return (
    <div>
        <h1>ehats the plan</h1>
        <ToDoForm onSubmit={addTodo}/>
    </div>
  )
}

export default ToDoList