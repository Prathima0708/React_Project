
import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono ' role='navigation'>
      <a href='#' className='pl-8'>EGG</a>
      <div className='px-4 cursor-pointer md:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>

      </div>

<div className='pr-8 md:block hidden'>


</div>
    <a href="" className='pr-4'>Home</a>
    <a href="" className='pr-4'>Menu</a>
    <a href="" className='pr-4'>About</a>
    <a href="" className='pr-4'>Contact</a>
    
   </nav>
  )
}

export default Navbar