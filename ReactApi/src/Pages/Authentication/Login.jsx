import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { PasswordInput, TextInput } from '../../Components/Inputs/BasicInputs'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../Redux/User/UserActions'
import { useNavigate } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement('#root');
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, error, loading } = useSelector((state) => state.users);
  const [logError, setLogError] = useState();
  const [credential, setCredential] = useState({
    username: '',
    password: '',
    error: '',
  });

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credential.username || !credential.password) {
      setCredential({
        ...credential,
        error: 'Please fill in both username and password.',
      });
    }
    else {
      await dispatch(login(credential));
      if (user && user.accessToken) {
        localStorage.setItem('Access Token', user.accessToken);
        localStorage.setItem('Refresh Token', user.refreshToken);
        navigate('/');
      }
      else {
        setLogError('Log error');
      }
    }

  }


  return (
    <div className='content-center'>
      <button onClick={() => setModalIsOpen(true)}>Login</button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal bg-transparent flex justify-center '>
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-2  bg-white'>
          <div className='flex justify-end'>
            <button onClick={() => setModalIsOpen(false)}><IoCloseOutline /></button>
          </div>
          <form onSubmit={handleSubmit} class="mt-8 flex flex-col">

            <TextInput
              label="Username" name="username" type="text" value={credential.username} onChange={handleChange} />

            <PasswordInput
              label="Password" name="password" type="password" value={credential.password} onChange={handleChange} />

            {credential.error && <p style={{ color: 'black' }}>{credential.error}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className='pt-2'>
              <button type='submit'
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded 
              focus:outline-none focus:shadow-outline">Login</button>
            </div>

          </form>
        </div>
      </Modal>


    </div>
  )
}

export default Login;
