import './Game.css'
const SquareComponent=(props)=>
{
    const classes=props.className ? `${props.className} square` : 'square' 
    return(
        <span className={classes}>
            {props.state}
        </span>
    )
}

export default SquareComponent