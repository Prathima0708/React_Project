import React, { useContext } from 'react'
import MeetUpList from '../components/meetups/MeetUpList'
import FavoritesContext from '../store/favorites-context'

export default function Favorites() {
  const favCtx=useContext(FavoritesContext)
  let content;

  if(favCtx.totalFavorites===0){
    content=<p>You got no favorites yet...Start adding some?</p>
  }
  else{
    content=<MeetUpList meetups={favCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}
