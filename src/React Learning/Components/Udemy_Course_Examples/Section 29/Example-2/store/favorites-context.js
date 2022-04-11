import { createContext, useState } from "react";
const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetUp)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite:(meetupId)=>{}
})

export function FavoritesContextProvider(props){

    const [userFavorites,setUserFavorites]=useState([])

    function addFavoriteHandler(favoriteMeetUp) {
        setUserFavorites((prevUserFav)=>{
            return prevUserFav.concat(favoriteMeetUp)

        })

    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFav)=>{
            return prevUserFav.filter(meetup=>meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id === meetupId)
    }

    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler
    }
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext
