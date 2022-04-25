// import React, { useState } from 'react'
// import TodoForm from './TodoForm'

// const TodoList = () => {
//     const [todos,setTodos]=useState([])

//     const addTodo=(todo)=>{
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return;
//           }
      
//           const newTodos = [todo, ...todos];
      
//           setTodos(newTodos);
//           console.log(todo,...todos);

//     }

//   return (
//     <div>
//         <h1>Add your todo here...</h1>
//         <TodoForm onSubmit={addTodo}/>
//     </div>
//   )
// }

// export default TodoList





// import React, { useEffect, useState } from 'react'

// const TodoList = (props) => {
//     const [counter,setCounter]=useState(0)
//     useEffect(()=>{
//         console.log("hello")
//         setCounter(1)
//     },[props.visible])
//   return (
//     <div>{counter}</div>
//   )
// }

// export default TodoList



import React, { useState } from 'react'

const fetchData=()=>new Promise((r)=>setTimeout(()=>r(Date.now()),100))

const TodoList = () => {
    const [result,setResult]=useState()
    const data=fetchData().then((value)=>setResult(value))
  return (
    <div>{result===data.toString()? (<div>Hello</div>):(<div>Good bye</div>)}</div>
  )
}

export default TodoList








