import { useState } from "react";

function Hook()
{
    let [count,setCount]=useState(0);
    let [count1,setCount1]=useState(0);

    function increment()
    {
        // setCount(count+1);
       if (count%5===0){
           setCount1(count1+1)
       }
     setCount((c)=> c+1);
    

       
    }
    function decrement()
    {
        // setCount(count-1);
        if (count%5===0){
            setCount1(count1-1)
        }
        setCount((c)=> c-1);
    }
    function incr1sec()
    {
        setTimeout(() => {
            setCount(count+1)
        }, 1000);
        setTimeout(increment,3000);
    }


    return(
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incr1sec}>Increment after 1 sec</button>
            <h1>{count}</h1>
             <h1>{count1}</h1> *
           {count >10 && <h1>hurray</h1> }

        </div>
    )
    
}
export default Hook;


// import { useState } from "react";

// function Hook()
// {
//     let[count,setCount]=useState(0)
//     let[count1,setCount1]=useState(0)
//     function increment()
//     {
//         setCount(count+1)
//         if(count%5===0)
//         {
//             setCount1(count1+1)
//         }
//     }
//     function decrement()
//     {
//         setCount(count-1)
//         if(count%5===0)
//         {
//             setCount1(count1-1)
//         }
//     }

//     function incr1sec()
//     {
//         setTimeout(() => {
//             setCount(count+1)
//         }, 1000);
//     }
//     return (
//     <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={incr1sec}>Increment after 1sec</button>
//         <h1>{count}</h1>
//         <h1>{count1}</h1>
//        {count>10 && <h1>Hurrayyy</h1>}
//     </div>
//     )
// }
// export default Hook;