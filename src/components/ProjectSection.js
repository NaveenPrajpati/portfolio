import React from 'react'
import { BsPuzzleFill } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'
import projectImg4  from '../assests/projectSnapshot.png'
import projectImg1  from '../assests/robogame.png'
import projectImg3  from '../assests/CrudApp.png'
import projectImg2  from '../assests/projectBlog.png'
import studynotionImg  from '../assests/studynotionImg.png'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <div className='my-20 w-full'>

    <div className=' sm:ml-32'>
      <h2 className=' text-sky-500 font-semibold'>PORTFOLIO</h2>
        <p className='font-bold text-lg flex items-center gap-1'>Each project is a unique piece of Development <BsPuzzleFill className='text-green-400  font-bold ' /></p>
    </div>

      {/* first projext */}
      <ProjectCard
        name={'StudyNotion'}
        direction={'flex-row-reverse'}
        image={studynotionImg}
        tech={['Cloudinary','Redux-Toolkit','nodeMailer']}
        gitLink={'https://github.com/NaveenPrajpati'}
        liveLink={'https://studynotionfront.netlify.app/'}
        description={'This is Blog app in which you can add your Stories by login into your acccount and you can also like and comment on others post. App has full login authentication features for storing media we using cloudinary server'}
      />

      {/* second projext */}
      <ProjectCard
        name={'Blog App'}
        direction={'flex-row'}
        image={projectImg2}
        tech={['React','Redux-Toolkit']}
        gitLink={'https://github.com/NaveenPrajpati/blog-front'}
        liveLink={'https://naveen-blogapp.netlify.app/'}
        description={'This is Blog app in which you can add your Stories by login into your acccount and you can also like and comment on others post. App has full login authentication features for storing media we using cloudinary server'}
      />
     
    {/* third projext */}
     <ProjectCard
        name={'Robot Game'}
        direction={'flex-row-reverse'}
        image={projectImg1}
        tech={['React','useState']}
        gitLink={'https://github.com/NaveenPrajpati/assignmentRacho'}
        liveLink={'https://648d3f13b32a794b204664d6--eclectic-flan-f5667d.netlify.app/'}
        description={'This is frontend react base project managing state is backbone of this project with drag and drop functionality you can change state or we can say position of robot in this game'}
      />

{/* fourth projext */}
<ProjectCard
        name={'Employee Management App'}
        direction={'flex-row'}
        image={projectImg3}
        tech={['React','useState']}
        gitLink={'https://github.com/NaveenPrajpati/emp-manage'}
        liveLink={'https://6470746aa1724172eb3bfbe8--heartfelt-cobbler-b062a3.netlify.app/'}
        description={'This is simple CRUD base application in which you can add, remove, update, delete employee'}
      />



    </div>
  )
}

export default ProjectSection