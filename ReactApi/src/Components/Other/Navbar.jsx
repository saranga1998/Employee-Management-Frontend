import React from 'react'
import Login from '../../Pages/Authentication/Login'

import { useSelector} from 'react-redux'
function Navbar() {
    const user = useSelector((state) => state.users);
    const isLoggedIn = user || localStorage.getItem('Access Token')
    return (
        <div className='row-auto mt-2 content-center'>
            <nav className='nav-bar bg-blue-300 flex justify-between p-2'>
                <div className="flex text-center">
                    <p className=' text-md italic font-bold '>Employee Management System</p>
                </div>

                <ul className="flex justify-evenly pl-2">
                    <li className="flex-1 "><a className="text-center block hover:bg-pink-200 hover:border-2 border-blue-500 rounded py-2 px-4 text-black font-medium" href="/">Home</a></li>
                    {!isLoggedIn && <li className="flex-1 "><div className="text-center block hover:bg-white hover:border-2 border-blue-500 rounded py-2 px-4 text-black font-medium" ><Login /></div></li>}
                    
                </ul>

            </nav>
           
        </div>
    )
}

export default Navbar
