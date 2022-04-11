import React, { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import Card from '../UI/Card'
import classes from './MeetUpItem.module.css'

export default function MeetUpItem(props) {
 const favCtx= useContext(FavoritesContext)

 const itemIsFavorite=favCtx.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favCtx.removeFavorite(props.id)
    }else{
      favCtx.addFavorite({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address:props.address
      })
    }
  }


  return (
    <li className={classes.item}>
        <Card >
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites':'To Favorites'}</button>
        </div>
        </Card>
    </li>
  )
}
