import React from 'react'
import aboutImg from '../assests/Aboutpexel.jpg'

export default function About() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center w-fit mx-auto my-20 gap-10'>
    <img src={aboutImg} alt="" className='max-w-[400px] mx-auto' />
    <div>
    <h3 className='font-bold text-sky-600'>ABOUT ME</h3>
    <h2 className='font-bold'>A dedicated Full-Stack Web Developer</h2>
    <p className='max-w-[500px] text-slate-500'>As a rising full stack web developer, I embrace the challenge of seamlessly integrating front-end and back-end components, delivering cohesive and intuitive web applications.With expertise in HTML, CSS, JavaScript, as well as Node.js, Express, and databases like MongoDB, I'm equipped to handle the full spectrum of web development tasks.</p>
    </div>

    </div>
  )
}
