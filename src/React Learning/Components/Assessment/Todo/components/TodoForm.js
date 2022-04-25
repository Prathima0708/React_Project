import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input,setInput]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
      props.onSubmit({
          id:Math.floor(Math.random()*10000),
          text:input
      })
        setInput('')
    }

    const handleChange=(e)=>{
    setInput(e.target.value)
    }
  return (
    <form>
        <input type="text" placeholder='Add a todo' value={input} onChange={handleChange} />
        <button onClick={handleSubmit} >Add Todo</button>
        </form>
  )
}

export default TodoForm







