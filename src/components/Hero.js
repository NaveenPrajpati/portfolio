import React from 'react'
import port from '../assests/port.jpg'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'




function Hero() {
    return (
        <div>
        <div className='flex flex-row flex-wrap sm:justify-center sm:items-center gap-10 '>

            {/* left section */}
            <div className='sm:min-w-[500px] '>
                {/* <h1>Full-Stack <br /> Developer</h1> */}
                <TypeAnimation
                    sequence={[
                        'Full-Stack Developer', // Types 'One'
                        1000, '' // Waits 1s
                    ]}
                    omitDeletionAnimation={true}
                    wrapper="strong"
                    speed={10}
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '3em', display: 'inline-block' }}
                />

                <p className='font-semibold text-slate-500 mt-4 '>Hi,i'm naveen kumar. A passionate Full-Stack Developer <br />
                    based in Noida-UP</p>
                <div className='flex text-3xl gap-2 mt-4'>
                   <a target='_blank' href="https://github.com/NaveenPrajpati"><AiFillGithub /></a> 
                   <a target='_blank' href="https://www.linkedin.com/in/naveen-kumar-106611237"><AiFillLinkedin /></a>         
                </div>
            </div>

            {/* right section */}
            <div className='mx-auto sm:w-fit'>
                <img src={port} alt="my image" className='w-[300px] h-[300px] rounded-full animate-[bounce_10s_infinite] mx-auto' />
            </div>
       
</div>


        </div>
    )
}

export default Hero