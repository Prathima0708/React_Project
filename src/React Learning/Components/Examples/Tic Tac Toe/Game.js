import { useState,useEffect } from 'react'
import './Game.css'
import SquareComponent from './SquareComponent'
const Game=()=>{
    const initialState=["","","","","","","","",""]
    const [gameState,setGameState]=useState(initialState)
    const [isXChance,setIsXChance]=useState(false)

    const onSquareClicked = (index) => {
        let strings = Array.from(gameState);
        
        strings[index] = isXChance ? "X" : "0";
        setIsXChance(!isXChance)
        setGameState(strings)
    }

    useEffect(()=>{
        const winner=checkWinner()
        if(winner){
            alert(`${winner} has won the game`)
            setGameState(initialState)
        }

    },[gameState])
    

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }


    return(
<div className='app-header'>
    <p className='heading-text'>React Tic Tac Toe-2022</p>

    <div className='row jc-center'>
       <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)}/>
       <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)}/>
       <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)}/>
    </div>

    <div className='row jc-center'>
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)}/>
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)}/>
    </div>

    <div className='row jc-center'>
        <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSquareClicked(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSquareClicked(7)}/>
        <SquareComponent state={gameState[8]} onClick={() => onSquareClicked(8)}/>

     
    </div>

    <button className='clear-button' onClick={()=>setGameState(initialState)}>Clear Game</button>

</div>
    )
}

export default Game











// const clearState = ["", "", "", "", "", "", "", "", "", ""];

// const Game=()=>{

//     const [gameState, updateGameState] = useState(clearState)
//     const [isXChance, updateIsXChance] = useState(false)

//     const onUserClicked = (index) => {
//         let strings = Array.from(gameState);
//         if (strings[index])
//             return;
//         strings[index] = isXChance ? "X" : "0";
//         updateIsXChance(!isXChance)
//         updateGameState(strings)
//     }

//     const clearGame = () => {
//         updateGameState(clearState)
//     }
//     useEffect(() => {
//         let winner = checkWinner();
//         if (winner) {
//             clearGame();
//             alert(`Ta da ! ${winner} won the Game !`)
//         }
//     }, [gameState])

//     const checkWinner = () => {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
//         console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
//         for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
//             if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
//                 return gameState[a];
//             }
//         }
//         return null;
//     }
//     return(
//         <div className="app-header">
//             <p className="heading-text">React Tic Tac Toe - 2020</p>
//             <div className="row jc-center">
//                 <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]}/>
//                 <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]}/>
//                 <SquareComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}/>
//             </div>
//             <div className="row jc-center">
//                 <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]}/>
//                 <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
//                 <SquareComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]}/>
//             </div>
//             <div className="row jc-center">
//                 <SquareComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]}/>
//                 <SquareComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
//                 <SquareComponent onClick={() => onUserClicked(8)} state={gameState[8]}/>
//             </div>
//             <button className="clear-button" onClick={clearGame}>Clear Game</button>
//             <p className="fc-aqua fw-600">The Indian Dev</p>
//         </div>

//     )
// }

// export default Game