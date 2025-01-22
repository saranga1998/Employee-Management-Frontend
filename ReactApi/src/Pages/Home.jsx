import React from 'react'

function Home() {
  return (
    <div className='row-auto mt-2 content-center'>
      <div className='row-auto m-2 '>

        <div className='border-solid border-black border rounded justify-start text-center columns-2 h-40' >

          <div className='bg-gray-400 columns-1'>
            <p className='font-sans text-sm font-medium tracking-wide'>Abc</p>
          </div>

          <div className=' p-1 columns-1 justify-end'>

            <div className='flex items-center'>
              <p className='text-gray-500 font-light italic '>Company Members Only</p>
            </div>

            <div className=''>
              <p className='font-bold text-base text-center'>Welcome to the Employee Management System</p>
              <p className='text-sm bg-gray-200 rounded-sm text-center'>This is a simple employee management system built using React, Redux, and Tailwind CSS.
                It allows you to manage employees and holidays efficiently.</p>
            </div>

          </div>
        </div>

        <div className='columns-3 m-2'>
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
