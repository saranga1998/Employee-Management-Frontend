import React from 'react'
import { IoLockClosedSharp } from "react-icons/io5";
import Icon from '../assets/Icon.png'




function Home() {
  return (
    <div className='flex justify-center p-3 '>
    
      <div className='bg-gray-400 flex justify-center rounded-lg rounded-r-none h-40 shadow-xl'>
        <img src={Icon} className='h-40 w-40 p-1'></img>
      </div>
      <div className='border-solid border rounded-lg rounded-l-none justify-start text-center h-40 w-3/6 shadow-xl' >
       
          <div className='flex justify-start p-2'>
            <p className='text-gray-500 font-light italic '>Company Members Only</p>
            <IoLockClosedSharp className='pt-1' />
          </div>

          <div className='p-2'>
            <p className='font-bold text-base text-center'>Welcome to the Employee Management System</p>
            <p className='text-sm bg-gray-200 rounded-sm text-center'>This is a simple employee management system built using React, Redux, and Tailwind CSS.
              It allows you to manage employees and holidays efficiently.</p>
          </div>
      </div>
    </div>

  )
}

export default Home
