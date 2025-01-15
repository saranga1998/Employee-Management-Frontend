import React, { useState } from 'react'
import { PasswordInput, TextInput } from '../../Components/Inputs/BasicInputs'

function Login() {

  const [credential, setCredential] = useState({
    username: '',
    password: '',
    isLogin: false,
    isEmpty: false,
    error: ''
  })

  const handleChange =(e) => {
    setCredential({...credential,[e.target.name]: e.target.value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Username" name="username" type="text" value={credential.username} onChange={handleChange} />

        <PasswordInput
          label="Password" name="password" type="password" value={credential.password} onChange={handleChange} />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
