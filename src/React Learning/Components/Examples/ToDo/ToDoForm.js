import { useState } from "react";

function ToDoForm(props)
{
    const[input,setInput]=useState('')

    const handleChange=(e)=>
    {
        setInput(e.target.value)
    }

    const handleSubmit=e=>
    {
        e.preventDefault()
        props.onSubmit({
            id:Math.random().toString(),
            text:input
        })

        setInput('')
    }
    return(
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange}/>
                <button className="todo-button">Add a Todo</button>
                </form>
        </div>
    )
}

export default ToDoForm