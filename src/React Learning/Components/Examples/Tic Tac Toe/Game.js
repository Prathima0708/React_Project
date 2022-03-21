import { useState } from 'react'
import './Game.css'
import SquareComponent from './SquareComponent'
const Game=()=>{
    const initialState=["","","","","","","","",""]
    const [gameState,setGameState]=useState(initialState)

    const onSquareClicked=(index)=>{

    }

    return(
<div className='app-header'>
    <p className='heading-text'>React Tic Tac Toe-2022</p>

    <div className='row jc-center'>
       <SquareComponent className="b-bottom-right" state={gameState[0]} onclick={()=>onSquareClicked(0)}/>
       <SquareComponent className="b-bottom-right" state={gameState[1]} onclick={()=>onSquareClicked(1)}/>
       <SquareComponent className="b-bottom" state={gameState[2]} onclick={()=>onSquareClicked(2)}/>
    </div>

    <div className='row jc-center'>
        <SquareComponent className="b-bottom-right" state={gameState[3]} onclick={()=>onSquareClicked(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onclick={()=>onSquareClicked(4)}/>
        <SquareComponent className="b-bottom" state={gameState[5]} onclick={()=>onSquareClicked(5)}/>
    </div>

    <div className='row jc-center'>
        <SquareComponent className="b-right" state={gameState[6]} onclick={()=>onSquareClicked(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onclick={()=>onSquareClicked(7)}/>
        <SquareComponent state={gameState[8]} onclick={()=>onSquareClicked(8)}/>

     
    </div>

    <button className='clear-button'>Clear Game</button>

</div>
    )
}
export default Game