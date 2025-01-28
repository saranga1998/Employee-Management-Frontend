import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Profile() {
    const EmpData = useSelector(state => state.employees)
    
  return (
    <div>
      <p>
        Profile
      </p>
    </div>
  )
}

export default Profile
