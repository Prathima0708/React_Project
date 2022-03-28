import { useEffect, useState } from 'react';
// import '../../../App.css'

// function Card({ name, role }) {
//     const [x,setX]=useState(false)

//   const nameChange=()=>
//    {
//        setX(!x)
//    }

//     useEffect(()=>{
//         console.log("Name Changed")
//     },[name])
//     return (
//     //   <div className="my-card" onClick={()=>{
//     //       setX(x =>!x)
//     //   }}>
//     <div className='my-card' onClick={nameChange} >
//         <div>Name: {name}</div>
//         <div>Role: {role}</div>
//       </div>
//     );
//   }
  
//   export default Card;




// import { useState, useEffect } from "react";
import '../../../App.css'

function Card({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [id]);

  return (
    <div className="my-card">
      <div>Id: {data?.id}</div>
      <div>Name: {data?.title}</div>
    </div>
  );
}

export default Card;



// function Card(props){
  
//   return(
//       <div>
//           <p>{props.value}</p>
          
//       </div>

//   )
// }
// export default Card
