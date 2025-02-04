import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../Redux/Holiday/HolidayActions'
import { useNavigate } from "react-router-dom";
import { DateInput, TextInput } from '../Inputs/BasicInputs';

function AddHoliday() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.holidays.loading);
    const error = useSelector(state => state.holidays.error);

    const [holiday, setHoliday] = useState({
        title: '',
        holiday1: '',
    });

    const handleChange = (e) => {
        setHoliday({ ...holiday, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create(holiday));
        navigate('/DashBoard/holidays');
    };
    return (
        <div className='m-2 flex justify-center'>

            <div className='border-2 block p-5 rounded-md w-1/2 shadow-md'>
                <p className="text-md font-bold text-center text-gray-600">Add Holiday</p>
                <form onSubmit={handleSubmit} className='m-4 flex-row justify-center'>

                    <DateInput label="Select Date" name="holiday1" type="Date" value={holiday.holiday1} onChange={handleChange} />

                    <TextInput label="Holiday Title" name="title" type="text" value={holiday.title} onChange={handleChange} />


                    <div className='p-2 flex justify-center'>
                        <button type='submit'
                            className='bg-blue-500 hover:bg-blue-700
                             text-white font-bold py-2 px-4 border border-blue-700 rounded' >Add Holiday</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default AddHoliday;

