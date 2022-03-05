import { useReducer } from 'react';
import './Calculator.css'

const actions={
    add_digit:'add-digit',
    choose_operation:'choose-operation',
    clear:'clear',
    delete_digit:'del-digit',
    evaluate:'evaluate'
}

function reducer(state,{type,payload})
{
    // switch(type)
    // {
    //     case actions.add_digit:
    //         return {
    //             ...state,
    //             currentOperand:`${currentOperand || " " }${payload.digit}`
    //         }
    // }

}

const Calculator=()=>
{
    const [{currentOperand,prevOperand,operation},dispatch]=useReducer(reducer,{})

    dispatch({type:actions.add_digit,payload:{digit:1}})
    return(
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand"> {prevOperand} {operation} </div>
                <div className="current-operand"> {currentOperand}</div>
                
            </div>

            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>/</button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>

            <button>.</button>
            <button>0</button>
            <button className="span-two">=</button>


        </div>
    )
}

export default Calculator;