import React from 'react'
import { BsPuzzleFill } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import projectImg4  from '../assests/projectSnapshot.png'
import projectImg1  from '../assests/robogame.png'
import projectImg3  from '../assests/CrudApp.png'
import projectImg2  from '../assests/projectBlog.png'

function ProjectSection() {
  return (
    <div className='my-20'>

    <div className='w-fit ml-32'>

      <h2 className=' text-sky-500 font-semibold'>PORTFOLIO</h2>
      <div className='flex items-center gap-2'>
        <p className='font-bold text-lg'>Each project is a unique piece of Development</p>
        <BsPuzzleFill className='text-green-400 text-2xl font-bold ' />
      </div>
    </div>

      {/* first projext */}
      <div className='flex flex-col sm:flex-row sm:h-[400px]  mt-10 gap-10 box-border mx-auto w-fit'>

        <div>
          <img src={projectImg2} alt="prject image" className='max-w-[500px]' />
        </div>
        <div className='max-w-[500px]'>
          <h2 className='font-semibold'>Blog App</h2>
          <p className='text-slate-500 font-semibold'>This is Blog app in which you can add your Stories by login into your acccount and you can also like and comment on others post. App has full login authentication features for storing media we using cloudinary server</p>

          <div className='flex gap-4 my-4 mx-auto w-fit'>
            <h2 className='font-semibold'>React</h2>
            <h2 className='font-semibold'>Redux-Toolkit</h2>
          </div>


          <div className='flex gap-5  my-4'>
            <a href='https://github.com/NaveenPrajpati/blog-front' target='_blank' className='flex items-center font-semibold'>
              <span>Code </span>
              <AiOutlineGithub className='text-xl' />
            </a>
            <a href='https://naveen-blogapp.netlify.app/' target='_blank' className='flex items-center font-semibold'>
              <span>Live Demo</span>
              <SiNetlify className='text-xl text-cyan-500' />
            </a>
          </div>
        </div>
      </div>

{/* second projext */}
      <div className='flex flex-col sm:flex-row-reverse sm:h-[600px] mt-10 gap-10 box-border mx-auto w-fit'>

        <div>
          <img src={projectImg1} alt="prject image" className='max-w-[500px]'/>
        </div>
        <div className='max-w-[500px]'>
          <h2 className='font-semibold'>Robot Game</h2>
          <p className='text-slate-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam corporis cum earum enim, obcaecati totam harum magnam nostrum error aut quidem deleniti consectetur, explicabo blanditiis qui sapiente non reprehenderit!</p>

          <div className='flex gap-4 my-4 mx-auto w-fit'>
            <h2 className='font-semibold'>React</h2>
            <h2 className='font-semibold'>useState</h2>
          </div>


          <div className='flex gap-5  my-4'>
            <a href='https://github.com/NaveenPrajpati/assignmentRacho' target='_blank' className='flex items-center font-semibold'>
              <span>Code </span>
              <AiOutlineGithub className='text-xl' />
            </a>
            <a href='https://648d3f13b32a794b204664d6--eclectic-flan-f5667d.netlify.app/' target='_blank' className='flex items-center font-semibold'>
              <span>Live Demo </span>
              <SiNetlify className='text-xl text-cyan-500' />
            </a>
          </div>
        </div>
      </div>

   {/* third projext */}
   <div className='flex flex-col sm:flex-row sm:h-[400px]  mt-10 gap-10 box-border mx-auto w-fit'>

<div>
  <img src={projectImg3} alt="prject image" className='max-w-[500px]' />
</div>
<div className='max-w-[500px]'>
  <h2 className='font-semibold'>Employee Management App</h2>
  <p className='text-slate-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam corporis cum earum enim, obcaecati totam harum magnam nostrum error aut quidem deleniti consectetur, explicabo blanditiis qui sapiente non reprehenderit!</p>

  <div className='flex gap-4 my-4 mx-auto w-fit'>
    <h2 className='font-semibold'>React</h2>
    <h2 className='font-semibold'>Redux-Toolkit</h2>
  </div>


  <div className='flex gap-5  my-4'>
    <a href='https://github.com/NaveenPrajpati/emp-manage' target='_blank' className='flex items-center font-semibold'>
      <span>Code </span>
      <AiOutlineGithub className='text-xl' />
    </a>
    <a href='https://6470746aa1724172eb3bfbe8--heartfelt-cobbler-b062a3.netlify.app/' target='_blank' className='flex items-center font-semibold'>
      <span>Live Demo</span>
      <SiNetlify className='text-xl text-cyan-500' />
    </a>
  </div>
</div>
</div>

{/* fourth projext */}
<div className='flex flex-col sm:flex-row-reverse sm:h-[600px] mt-10 gap-10 box-border mx-auto w-fit'>

<div>
  <img src={projectImg4} alt="prject image" className='max-w-[500px]'/>
</div>
<div className='max-w-[500px]'>
  <h2 className='font-semibold'>Snapshot</h2>
  <p className='text-slate-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam corporis cum earum enim, obcaecati totam harum magnam nostrum error aut quidem deleniti consectetur, explicabo blanditiis qui sapiente non reprehenderit!</p>

  <div className='flex gap-4 my-4 mx-auto w-fit'>
    <h2 className='font-semibold'>React</h2>
    <h2 className='font-semibold'>context-api</h2>
  </div>


  <div className='flex gap-5  my-4'>
    <a href='https://github.com/NaveenPrajpati/snapshot' target='_blank' className='flex items-center font-semibold'>
      <span>Code </span>
      <AiOutlineGithub className='text-xl' />
    </a>
    <a href='https://sparkling-torte-4449d4.netlify.app/' target='_blank' className='flex items-center font-semibold'>
      <span>Live Demo </span>
      <SiNetlify className='text-xl text-cyan-500' />
    </a>
  </div>
</div>
</div>




    </div>
  )
}

export default ProjectSection