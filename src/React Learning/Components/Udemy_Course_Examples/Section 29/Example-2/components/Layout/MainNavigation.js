import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Allmeetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Newmeetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}








// import React from 'react'
// import { Link } from 'react-router-dom'
// import classes from './MainNavigation.module.css'

// const MainNavigation = () => {
//   return (
//     <header className={classes.header}>
//       <div className={classes.logo}>React MeetUps</div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">All meetups</Link>
//           </li>
//           <li>
//             <Link to="/new-meetup">Add NewMeetUp</Link>
//           </li>
//           <li>
//             <Link to="/favorites">Favorites</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default MainNavigation