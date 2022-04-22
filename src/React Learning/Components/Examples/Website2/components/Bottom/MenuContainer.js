import React from 'react'
import './Bottom.css'

const MenuContainer = ({icon,link}) => {
  return (
    <li className='list-none'>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
    </li>
  )
}
export  default MenuContainer