import React, { useState ,useEffect} from 'react'

// const Ex3 = () => {
//     const [value,setValue]=useState("")
//     const change=(event)=>{
//        setValue(event.target.value)
//     }
   
//   return (
//   <>
//   <input type='text' onChange={change} value={value} />
//   <p>{value}</p>
//   <button disabled={value.length<1}>Submit</button>
//   </>
//   )
// }

// export  default Ex3


// function Child({ setValue }) {
//     return (
//       <>
//         <div>Child</div>
//         <button onClick={() => setValue("Parent has been updated!")}>
//           Change Parent Value
//         </button>
//       </>
//     );
//   }
  
//   function Parent() {
//     const [value, setValue] = useState(
//       "I need to be updated from my child"
//     );
  
//     return (
//       <>
//         <h3>Update Parent State Challenge (Using Callback)</h3>
//         <div className="wrapper">
//           <div>Parent</div>
//           <div className="box-wrapper">{value}</div>
//         </div>
  
//         <div className="wrapper">
//           <Child setValue={setValue} />
//         </div>
//       </>
//     );
//   }

//   export default Parent




// export const Ex3 = () => {
//     const [number1, setNumber1] = useState();
//     const [number2, setNumber2] = useState();
//     const [total, setTotal] = useState(0);
  
//     function calculateTotal() {
//       setTotal(number1 + number2);
    
     
//     }
  
//   return (
//     <>
//      <h2>Adding Two Numbers</h2>
//       <input
//         placeholder="First Number"
//         type="number"
//         value={number1}
//         onChange={(e) => setNumber1(+e.target.value)}
//       />
//       <input
//         placeholder="Second Number"
//         type="number"
//         value={number2}
//         onChange={(e) => setNumber2(+e.target.value)}
//       />

//       <button onClick={calculateTotal}>Add Two Numbers</button>
//       <p>Total: {total}</p>
//     </>
//   )
// }





const Ex3 = () => {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const [userData, setUserData] = useState({});

    const getUserData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setUserData(jsonData);
    };
  
    useEffect(() => {
      getUserData();
    }, []);
  
  return (
    <div>
         <div className="App">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>

    </div>
  )
}

export  default Ex3