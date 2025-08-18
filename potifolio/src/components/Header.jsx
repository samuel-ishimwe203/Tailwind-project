import React from 'react'
import logo from '../assets/images/smlog.png'
import image from '../assets/images/sam.jpg'

function Header() {
  return (
    <>
    <header className='w-full flex bg-bg-input-blue-light-light text-white  text-xl items-center justify-between'>
        <div className='rounded-full'><img className='w-20 h-20  rounded-full border-2 border-blue-500 object-cover ' src={logo} alt="" /></div>
        
            <div className=' '>
                <ul className='flex gap-10'>
                       <li><a href="">Home</a></li>
                       <li><a href="">About</a></li>
                       <li><a href="">Skills</a></li>
                       <li><a href="">Experiences</a></li>
                       <li><a href="">contact</a></li>
                </ul>
            </div>
            <div className='m-4'> <img className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover " src={image} alt="Profile" /></div>
     </header>

    </>
  )
}

export default Header