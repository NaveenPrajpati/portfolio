import React from 'react'
import reactImg from '../assests/reactjs.png'
import htmlImg from '../assests/html-5.png'
import cssImg from '../assests/css.png'
import jsImg from '../assests/js.png'
import tailImg from '../assests/tail.png'
import mongoImg from '../assests/mongodb.png'
import nodeImg from '../assests/nodejs.png'
import reduxImg from '../assests/redux.png'

function Skillsection() {
  return (
    <div className='flex mx-auto w-fit items-center gap-6 my-10'>
    <h2 className='text-2xl font-semibold'>Tech Stack |</h2>
    <ul className='flex gap-5'>
        <li><img src={htmlImg} alt="" /></li>
        <li><img src={cssImg} alt="" /></li>
        <li><img src={tailImg} alt="" /></li>
        <li><img src={jsImg} alt="" /></li>
        <li><img src={reactImg} alt="" /></li>
        <li><img src={reduxImg} alt="" /></li>
        <li><img src={nodeImg} alt="" /></li>
        <li><img src={mongoImg} alt="" /></li>
    </ul>
</div>

  )
}

export default Skillsection