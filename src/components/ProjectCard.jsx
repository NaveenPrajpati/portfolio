import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'

export default function ProjectCard({gitLink,liveLink,description,name,direction,image,tech}) {
  return (
    <div className={`flex flex-wrap flex-col items-center sm:${direction} sm:justify-center w-full mx-auto my-20 gap-10 border-b-2`}>

          <img src={image} alt="prject image" className='sm:w-[500px]  max-h-[500px]' />
       
        <div className='sm:w-2/5 sm:min-w-[400px] '>
          <h2 className='font-bold text-xl sm:text-2xl'>{name}</h2>
          <p className='text-slate-500 min-w-[300px] font-semibold'>{description}</p>
          
          <div className='flex gap-4 my-4 mx-auto w-fit'>
          {tech?.map((item,index)=>(
            <h2 className='font-semibold' key={index}>{item}</h2>
          ))}
           
          </div>


          <div className='flex gap-5  my-4'>
            <a href={`${gitLink}`} target='_blank' className='flex items-center font-semibold'>
              <span>Code </span>
              <AiOutlineGithub className='text-xl' />
            </a>
            <a href={`${liveLink}`} target='_blank' className='flex items-center font-semibold'>
              <span>Live Demo</span>
              <SiNetlify className='text-xl text-cyan-500' />
            </a>
          </div>
        </div>
      </div>

        


        
    
  )
}
