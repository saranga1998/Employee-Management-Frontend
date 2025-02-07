import React from 'react'
import { DashBoardBtn } from '../Inputs/BasicButtons';
import { RiDashboardHorizontalLine,RiSecurePaymentFill } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import { IoCalendarNumberSharp } from "react-icons/io5";

function DashBoard() {
  return (
    <div className='w-40 h-screen bg-blue-800 flex justify-start'>
      <div className='pl-4 w-40 pt-2'>
        <DashBoardBtn text='DashBoard' Icon={RiDashboardHorizontalLine} path="/DashBoard"/>
        <DashBoardBtn text='Employees' Icon={BsPersonLinesFill} path="employees"/>
        <DashBoardBtn text='Holidays' Icon={IoCalendarNumberSharp} path="holidays"/>
        <DashBoardBtn text='Payments' Icon={RiSecurePaymentFill} path="payments"/>
      </div>
    </div>
  )
}

export default DashBoard

