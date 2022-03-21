// import { useState } from "react";
// import Card from "./Card";

// function Form({name,setName}) {
//   // const [name, setName] = useState("Unknown");
//   // const [role, setRole] = useState("Developer");

//   // function changeName(event) {
//   //   setName(event.target.value);
//   // }

//   // function changeRole(event) {
//   //   setRole(event.target.value);
//   // }

//   return (
//     <div>
//       {/* <input onChange={changeName} type="text" value={name} />
//       <input onChange={changeRole} type="text" value={role} />

//       <Card name={name} role={role} /> */}

//       <input onChange={(e)=>setName(e.target.value)} />
//     </div>
//   );
// }

// export default Form;






export default function Form({ id, setId }) {
  return <input onChange={(e) => setId(e.target.value)} type="text" value={id} />;
}











