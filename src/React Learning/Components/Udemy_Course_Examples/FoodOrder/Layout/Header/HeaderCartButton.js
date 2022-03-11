import { useContext,useEffect,useState } from "react"
import CartContext from "../../Store/cart-context"
// import CartIcon from "./Cart/CartIcon"
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton=(props)=>
{
    const [btnIsHighlighted,setBtnIsHighlighted]=useState(false) 
    const cartCtx=useContext(CartContext)

    const {items}=cartCtx
    const numberOfCartItems=items.reduce((curNumber,item)=>{     //reduce array method which converts array to single object
        return curNumber+item.amount
    },0) 
    
 
    const btnClasses=`${classes.button} ${btnIsHighlighted ?   classes.bump : ''}`

    useEffect(()=>{
        if(items.length===0)
        {
            return
        }
        setBtnIsHighlighted(true)

        const timer=setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return()=>{
            clearTimeout(timer)                                //cleanup function
        }
    },[items])

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