import React, { useEffect, useState } from 'react'
import Login from '../../Pages/Authentication/Login'
import Logout from '../UserDetails/Logout'
import Profile from '../UserDetails/Profile'
import { IoHome ,IoLogIn} from "react-icons/io5";

import { useSelector } from 'react-redux'
function Navbar() {
    const user = useSelector((state) => state.users);
    const token = localStorage.getItem('Access Token')

    const isLoggedIn = !(user || token)
    console.log(isLoggedIn)

    return (
        <div className='row-auto  content-center'>
            <nav className='nav-bar bg-blue-800 flex justify-between p-2'>
                <div className="flex text-center pt-1">
                    <p className=' text-md italic font-bold text-white'>Employee Management System</p>
                </div>

                <ul className="flex justify-evenly pl-2">
                
                    <li className="flex-1 "><a className="inline-flex items-center justify-center text-center hover:border-2  hover:shadow-2xl rounded-md border-blue-500  py-2 px-4 text-white font-semibold" href="/">
                    <span className='mr-1'><IoHome/></span>Home</a></li>
                    <li className="flex-1 "><div className="inline-flex items-center justify-center text-center hover:border-2  hover:shadow-2xl rounded-md border-blue-500  py-2 px-4 text-white font-semibold" >                        
                    <span className='mr-1'><IoLogIn/></span><Login/></div></li>
                    <li className="flex-1"><div className=" hover:bg-blue-800 border-2 hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition border-blue-500 rounded-3xl  py-2 px-4 size-10" ><Profile/></div></li>
                </ul>

            </nav>

        </div>
    )
}

export default Navbar
