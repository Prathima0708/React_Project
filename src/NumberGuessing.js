import { useState } from "react";
let randNum=Math.floor(Math.random() *100)+1;

function NumberGuessing()
{
    const [UserGuess,SetUserGuess]=useState(""); //to know user guess
    const [UserCount,SetUserCount]=useState(0);  //to know how number of times user clicked on submit button
    const [UserAllGuessessVal,SetUserAllGuessessVal]=useState([])  //to know all the guesses guessed by user
    const [RandomNumber,SetRandomNumber]=useState(randNum); //generating random number
    const [Msg,SetMsg]=useState("")  //to display message in 3 cases(user wins,game over,wrong guess)
    const [Disabled,SetDisabled]=useState(false); //to disbale when game is over and user wins (disbaling input field as well)
    const [LowHighMsg,SetLowHighMsg]=useState("")

    
    const HandlerValueChange=(e)=>    //to know the value entered in the input field
    {
    SetUserGuess(e.target.value);
    }

    const SubmitHandler=()=>
    {
        if (Number(RandomNumber)=== Number( UserGuess))  //comparing the value of random number with user guess
        {
            SetMsg("Congratulations!!!");
            SetDisabled(true);
            SetLowHighMsg("")
        }
        else if(UserCount===4)
        {
            SetMsg("Game over");
            SetDisabled(true);
            SetLowHighMsg("")
        }
        else
        {
            SetMsg("Wrong Guess");
            if (randNum < UserGuess){
                SetLowHighMsg("selected value is High");
            }
            
            if (randNum > UserGuess){
                SetLowHighMsg("selected value is Low");
            }
        }
        SetUserCount(UserCount+1);  //when user clicks on submit button usercount is incremented by one
        SetUserAllGuessessVal([...UserAllGuessessVal,UserGuess]); //using spread operator to retain previous user guess.
    }
    const RestartAgain=()=>
    {
        SetDisabled(false); //to enable input field again
        SetMsg("");
        SetUserAllGuessessVal([]);
        SetUserCount(0);
        SetRandomNumber(Math.floor(Math.random() *100)+1);
        SetUserGuess("")
        SetLowHighMsg("");

    }

    return(

        <div>
            <h1>Number Guessing Game </h1>
            <input disabled={Disabled} type="text" value={UserGuess} onChange={HandlerValueChange}/>
            <br></br>
            <button disabled={Disabled} onClick={SubmitHandler}>Submit</button>
            {Disabled &&
            <button  onClick={RestartAgain}>Start Again</button>} 


            <div>
                <p>Message : {Msg}</p>
                <p>Low or High : {LowHighMsg}</p>
                <p>Total rounds played by user : {UserCount}</p>         {/*displaying total rounds played by user*/}
                <p>Random Number : {randNum}</p>
                <p>your guesses :
                    {UserAllGuessessVal.map((item,index)=>{                 //iterating over the array to display user guesses.
                        return <span key={index}> {item}, { }</span>    
                    }

                    
                    )}
                </p>
            </div>
        </div>
    )
}
export default NumberGuessing;