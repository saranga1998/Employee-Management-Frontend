import React, { useState } from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

import Logout from '../UserDetails/Logout'

Modal.setAppElement('#root');
function Profile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const EmpData = useSelector(state => state.employees)
  const handleModal = () => {
    setModalIsOpen(true)
  }
  return (
    <div className='flex justify-center'>
      <button onClick={handleModal} className='text-base font-bold'><AiOutlineUser/></button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal bg-transparent flex justify-end mt-12'>
        <div className='rounded overflow-hidden shadow-2xl p-2  bg-white h-72 w-72'>
          <div className='flex justify-end hover:border-2 border-black-100'>
            <button onClick={() => setModalIsOpen(false)}><IoCloseOutline /></button>
          </div>
          <p>User name</p>
          <div className='flex justify-center'>
            <Logout/> 
          </div>
        </div>

      </Modal>
    </div>
  )
}

export default Profile
