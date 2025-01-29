import React from 'react'
import { logout } from '../../Redux/User/UserActions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GrLogout } from "react-icons/gr";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const AuthToken = localStorage.getItem('Access Token')
    dispatch(logout(AuthToken))
    localStorage.removeItem('Access Token')
    localStorage.removeItem('Refresh Token')
    navigate('/')
  }
  return (
      <button onClick={handleClick} className='border-2 rounded-xl w-20 inline-flex items-center justify-center font-bold text-sm shadow-md bg-white'>Logout<span className='ml-1'><GrLogout/></span></button>
    
  )
}

export default Logout
