// import { Component } from 'react';

// import { useSelector, useDispatch ,connect} from 'react-redux';
// import { counterActions } from '../Store/counter-slice';
// import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(state => state.counter.counter);
//   const show=useSelector(state=>state.counter.showCounter)

//   const incrementHandler = () => {
//     dispatch(counterActions.increment());
//   };

//   const increaseHandler=()=>{
//     dispatch(counterActions.increase(5))
//   }

//   const decrementHandler = () => {
//     dispatch(counterActions.decrement());
//   };

//   const toggleCounterHandler = () => {
//     dispatch(counterActions.toggleCounter())
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//      {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;










import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { counterActions } from '../Store';

const Counter = () => {
  const dispatch=useDispatch()
  // const [showCounter,setShowCounter]=useState(false)
  const counter=useSelector((state)=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
// dispatch({type:'increment'})
dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }

  const increaseBy5=()=>{
    // dispatch({type:'increaseBy5',amount:5})
    dispatch(counterActions.increaseBy5(5))
  }

  const toggleCounterHandler = ()=>{
    // setShowCounter(prev=>!prev)
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show &&   <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component{
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler(){
//     this.props.decrement()
//   }

//   toggleCounterHandler(){}

//   render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }

// }

// const mapStateToProps=state=>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps=dispatch=>{
//   return{
//     increment:()=>dispatch({type:"increment"}),
//     decrement:()=>dispatch({type:"decrement"}),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (Counter);