import React from 'react'
import { logout } from '../../Redux/User/UserActions'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const AuthToken = localStorage.getItem('Access Token')
    dispatch(logout(AuthToken))
    localStorage.removeItem('Access Token')
    localStorage.removeItem('Refresh Token')
    navigate('/login')
  }
  return (
    <div>
      <button onClick={handleClick} 
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded 
      hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200">Logout</button>
    </div>
  )
}

export default Logout
