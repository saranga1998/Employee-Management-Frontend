import React from 'react'

export const DashBoardBtn = ({ onclick, value, name, text, Icon }) => {
  return (
    <div className='pl-1 flex justify-start pt-3 cursor-pointer hover:text-black hover:border-2  hover:shadow-2xl rounded-md rounded-r-none '>
      {Icon && <Icon className="text-white mt-1" />}
      <button onClick={onclick} value={value} name={name} className='text-white font-semibold pl-1'>{text}</button>
    </div>

  )
}
