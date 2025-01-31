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
  const handleModal =() =>{
    setModalIsOpen(true)
  }
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
        setModalIsOpen(false)
        navigate('/DashBoard');
      }
      else {
        setLogError('Log error');
      }
    }

  }


  return (
    <div className='content-center '>
      <button onClick={handleModal}>Login</button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal bg-transparent flex justify-center mt-28'
      overlayClassName="fixed inset-0 bg-black bg-opacity-10">
        <div className='rounded overflow-hidden shadow-2xl p-2  bg-white h-72 w-72'>
          <div className='flex justify-end '>
            <button onClick={() => setModalIsOpen(false)} className='hover:scale-125'><IoCloseOutline /></button>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col content-around gap-1">

            <TextInput
              label="Username" name="username" type="text" value={credential.username} onChange={handleChange} />

            <PasswordInput
              label="Password" name="password" type="password" value={credential.password} onChange={handleChange} />

            {credential.error && <p style={{ color: 'black' }}>{credential.error}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className='border-2 border-white rounded-lg border-solid m-1 text-center outline-none place-items-end shadow-md'>
              <button type='submit'
                className=" text-gray-700 font-bold text-sm ">LOGIN</button>
            </div>

          </form>
        </div>
      </Modal>


    </div>
  )
}

export default Login;
