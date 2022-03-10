import { useContext } from "react"
import CartContext from "../../Store/cart-context"
// import CartIcon from "./Cart/CartIcon"
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton=(props)=>
{
    const cartCtx=useContext(CartContext)
    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{     //reduce array method which converts array to single object
        return curNumber+item.amount
    },0) 
    
    const btnClasses=`${classes.button} ${classes.bump}`

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
               <CartIcon /> 
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton