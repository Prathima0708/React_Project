import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            React MeetUps
        </div>
        <nav>
            <ul>
                <li><Link to="/">Allmeetups</Link></li>
                <li><Link to="/new-meetup">Add Newmeetups</Link></li>
                <li><Link to="/favorites">My Favorites</Link></li>
            </ul>
        </nav>
    </header>
  )
}
