import React, {  } from "react";
// import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import {Link} from 'react-scroll'
import { Outlet } from "react-router-dom";


function MainNavigation() {
 

  return (
    <header className='w-full h-16 flex bg-white text-black justify-between pt-4'>
      <Link spy={true} to='MainImage' smooth={true} >
          <a href="#mainImage" className="p-3 pb-4 no-underline text-2xl font-bold text-black font-sans hover:bg-slate-400 rounded-md">
          Gourmet au Catering
          </a>
          </Link>
      {/* <div className={classes.logo}>Gourmet au Catering</div> */}
      <nav>
        <ul >
          {/* <Link spy={true} to='About' smooth={true}> */}
          <a href="#About" className="p-3 no-underline text-black tracking-widest hover:bg-slate-300 rounded-md">
           About
          </a>
          {/* </Link> */}
          
          
          {/* <Link spy={true} to='Menu' smooth={true}> */}
          <a href="#Menu" className="p-3 no-underline text-black tracking-widest hover:bg-slate-300 rounded-md">
           Menu
          </a>
          {/* </Link> */}
          
           
          {/* <Link spy={true} to='Contact' smooth={true}> */}
          <a href="#Contact" className="p-3 no-underline text-black tracking-widest hover:bg-slate-300 rounded-md" >
           Contact
          </a>
          {/* </Link> */}

      
    
         
       
       
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation







