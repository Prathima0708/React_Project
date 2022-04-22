import React, { useEffect } from 'react'
import MenuContainer from './MenuContainer'
import './Bottom.css'

 const Bottom = () => {
     useEffect(()=>{
        const menuLi=document.querySelectorAll("#menu li")
        // console.log(menuLi)
        function setMenuActive(){
            console.log("Hello")
        }
        menuLi.forEach(n=>n.addEventListener('click',setMenuActive))
     },[])
  return (
    <div className='bottomMenu'>
        <ul id="menu">
            
                <MenuContainer link={'#'} icon={<i class="fa fa-home" aria-hidden="true"></i>} />
                <MenuContainer link={'#'} icon={<i class="fa fa-comment" aria-hidden="true"></i>} />
                <MenuContainer link={'#'} icon={<i class="fa fa-google-wallet" aria-hidden="true"></i>} />
                <MenuContainer link={'#'} icon={<i class="fa fa-heart-o" aria-hidden="true"></i>} />
                <MenuContainer link={'#'} icon={<i class="fa fa-cog" aria-hidden="true"></i>} />
            <div className='indicator'>

            </div>
        </ul>
    </div>
  )
}
export default Bottom