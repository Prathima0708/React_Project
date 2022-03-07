import React, { Fragment } from 'react'
import mealsImage from '../../../Udemy_Course_Examples/assets/meals.jpg'

const Header=(props)=>
{
    return(
        <Fragment>
            <header>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div>
            <img src={mealsImage} alt="img"/>
            </div>
        </Fragment>
    )
}
export default Header