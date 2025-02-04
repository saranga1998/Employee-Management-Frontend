import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const DashBoardBtn = ({ onclick, value, name, text, Icon,path }) => {
  const navigate = useNavigate();
  return (
    <div className='pl-1 flex justify-start pt-3 cursor-pointer hover:border-2  hover:shadow-2xl rounded-md rounded-r-none ' onClick={()=>navigate(path)}>
      {Icon && <Icon className="text-white mt-1" />}
      <button value={value} name={name} className='text-white font-semibold pl-1'>{text}</button>
    </div>
  )
}


