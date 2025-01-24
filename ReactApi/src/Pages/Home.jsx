import React from 'react'
import { IoLockClosedSharp } from "react-icons/io5";




function Home() {
  return (
    <div className='flex justify-center'>
    
      <div className='bg-gray-400 columns-1'>
        <p className='font-sans text-sm font-medium tracking-wide'>Abc</p>
      </div>
      <div className='border-solid border-black border rounded justify-start text-center  h-40' >
        <div className=' p-1 flex justify-items-end w-[300]'>

          <div className='flex justify-center p-2'>
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
    </div>

  )
}

export default Home
