import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import Logout from '../UserDetails/Logout'
import Profilepic from '../../assets/Profilepic.jpg'

Modal.setAppElement('#root');
function Profile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [user, setUser] = useState(
    {
      id: '',
      username: '',
      email: '',
    }
  )
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("Access Token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5278/Authentication/UserProfile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser({
            id: response.data.id,
            username: response.data.username,
            email: response.data.email,
          });
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleModal = () => {
    setModalIsOpen(true)
  }

  return (
    <div className='flex justify-center'>
      <button onClick={handleModal} className=''><AiOutlineUser className='text-white'/></button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal bg-transparent flex justify-end mt-12'
      overlayClassName="fixed inset-0 bg-black bg-opacity-10">

        <div className='rounded-md overflow-hidden shadow-2xl p-2 bg-blue-100 h-72 w-72 hover:border-2 border-blue-700'>

          <div className='flex justify-end'>
            <button onClick={() => setModalIsOpen(false)} className='hover:scale-125 '><IoCloseOutline /></button>
          </div>
          <div className='inline-block justify-items-center pl-14'>
            <div className='size-12 border-2 border-blue-700 rounded-full p-1  bg-white hover:scale-105'>
              <img src={Profilepic} className='rounded-full shadow-lg'></img>
            </div>
            <div className='p-1 justify-items-center'>

              <p className='text-sm font-bold text-pink-500'>{user.username}</p>
              <p className='text-xs text-pink-500'>{user.email}</p>
            </div>
          </div>
          <div className='pl-4 font-light text-sm text-red-400 pt-3 m-1'>
            <a className='hover:font-normal'>Manage my details</a>
            <p className='hover:font-normal'> Privacy Policy</p>
            <p className='hover:font-normal'> Terms of Service</p>
            <a className='hover:font-normal' href="/DashBoard">DashBoard</a>
          </div>
          <div className='flex justify-center hover:scale-x-105 pt-8' onClick={() => setModalIsOpen(false)}>
            <Logout />
          </div>
        </div>

      </Modal>
    </div>
  )
}

export default Profile
