import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'



function Navbar() {
  return (
   
   <nav className="w-full  flex items-center flex-wrap justify-between item-center px-6 py-2 ">
  <div className="flex items-center">
   <GiHamburgerMenu className='sm:hidden'/>
    <p className="font-semibold text-xl ">naveen.dev</p>
  </div>
  
 
    <div className="text-sm sm:flex hidden">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
        About
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
        Projects
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 ">
        Contact
      </a>
    </div>

    <div className='flex items-center gap-2'>
    <p className=' font-semibold flex items-center'>  </p>
      <a target='_blank' href="https://drive.google.com/file/d/1cXlEL5N-380hxJQH0vBtYk_yI-2X0Z-k/view?usp=sharing" className="text-sm px-4 py-1  border rounded  hover:border-transparent hover:text-teal-500 hover:bg-white flex items-center">My resume <AiOutlineArrowRight className=' animate-pulse'/></a>
    </div>
</nav>
  )
}

export default Navbar;