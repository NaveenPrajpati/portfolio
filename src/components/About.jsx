import React from 'react'
import aboutImg from '../assests/Aboutpexel.jpg'

export default function About() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center w-fit mx-auto my-20 gap-10'>
    <img src={aboutImg} alt="" className='max-w-[400px]' />
    <div>
    <h3 className='font-bold text-sky-600'>ABOUT ME</h3>
    <h2 className='font-bold'>A dedicated Full-Stack Developer</h2>
    <p className='max-w-[500px] text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur eligendi doloribus neque. Cupiditate nostrum excepturi, iusto laborum repellendus  blanditiis recusandae, repudiandae numquam vitae accusantium quis labore temporibus magni consequuntur.</p>
    </div>

    </div>
  )
}
