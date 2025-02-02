import React from 'react'
import { Outlet } from "react-router-dom";
import DashBoard from '../Components/Other/DashBoard'

function DashBoardLayout() {
  return (
    <div className='flex'>
      <DashBoard/>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoardLayout
