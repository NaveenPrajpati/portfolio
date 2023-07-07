import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'



function Navbar() {
  return (
   
   <nav class="flex flex-col sm:flex-row items-center justify-between flex-wrap px-6 py-2 h-12">
  <div class="flex items-center  mr-6 w-fit">
   <GiHamburgerMenu className=' sm:hidden'/>
    <span class="font-semibold text-xl tracking-tight">naveen.dev</span>
  </div>
  
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
        Projects
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 ">
        Contact
      </a>
    </div>
    <div className='flex items-center gap-2'>
    <p className=' font-semibold flex items-center'>My resume <AiOutlineArrowRight className=' animate-pulse'/> </p>
      <a target='_blank' href="https://drive.google.com/file/d/1DclyErg1i3yDc-OFG_xESysDoUhlW0Ap/view?usp=sharing" class="inline-block text-sm px-4 py-2 leading-none border rounded  hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar;