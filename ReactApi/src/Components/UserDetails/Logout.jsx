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
    navigate('/')
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
