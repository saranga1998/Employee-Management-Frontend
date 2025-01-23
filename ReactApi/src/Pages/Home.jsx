import React from 'react'
import Login from './Authentication/Login'
import { IoLockClosedSharp } from "react-icons/io5";
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import ErrorBoundary from '../Components/ErrorBoundary'

function Home() {
  return (
    <div className='row-auto mt-2 content-center'>
      <nav className='nav-bar bg-blue-300 flex justify-between p-2'>
        <div className="flex text-center">
          <p className=' text-md italic font-bold '>Employee Management System</p>        
        </div>
        <ul className="flex justify-evenly pl-2">
          <li className="flex-1 "><a className="text-center block hover:bg-pink-200 hover:border-2 border-blue-500 rounded py-2 px-4 text-black font-medium" href="/">Home</a></li>
          <li className="flex-1 "><a className="text-center block hover:bg-white hover:border-2 border-blue-500 rounded py-2 px-4 text-black" href="/login">Login</a></li>
        </ul>

      </nav>
      <div className='row-auto m-2 '>

        <div className='flex justify-center'>
          <div className='bg-gray-400 columns-1'>
            <p className='font-sans text-sm font-medium tracking-wide'>Abc</p>
          </div>
          <div className='border-solid border-black border rounded justify-start text-center  h-40' >
            <div className=' p-1 flex justify-items-end'>

              <div className='flex justify-center p-2'>
                <p className='text-gray-500 font-light italic '>Company Members Only</p>
                <IoLockClosedSharp className='pt-1'/>
              </div>

              <div className='p-2'>
                <p className='font-bold text-base text-center'>Welcome to the Employee Management System</p>
                <p className='text-sm bg-gray-200 rounded-sm text-center'>This is a simple employee management system built using React, Redux, and Tailwind CSS.
                  It allows you to manage employees and holidays efficiently.</p>
              </div>

            </div>
          </div>
        </div>

        <div className='columns-3 mt-5'>
          <div className='border-black border-solid border-2 p-1 m-1 rounded-md'>
            <p className='font-sans text-sm font-medium tracking-wide'>Abc</p>
          </div>
          <div className='border-black border-solid border-2 p-1 m-1 rounded-md'>
            <p className='font-sans text-sm font-medium tracking-wide'>Def</p>
          </div >
          <div className='border-black border-solid border-2 p-1 m-1 rounded-md'>
            <p className='font-sans text-sm font-medium tracking-wide'>Def</p>
          </div >
        </div>

      </div>

    </div >

  )
}

export default Home
