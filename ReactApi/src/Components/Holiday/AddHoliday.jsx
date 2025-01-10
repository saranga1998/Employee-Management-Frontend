import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../Redux/Holiday/HolidayActions'


function AddHoliday() {
    const dispatch = useDispatch();
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
        console.log('Submitting Holiday:', holiday);
        e.preventDefault();
        dispatch(create(holiday));
    };
    return (
        <div>

            <h2>Add Holiday</h2>
            <form onSubmit={handleSubmit}>

                <label>Employee Id</label>
                <input type='Date' name='holiday1' value={holiday.holiday1} onChange={handleChange} />

                <label>Holiday Title</label>
                <input type='text' name='title' value={holiday.title} onChange={handleChange} />

                <button type='submit'>Add Holiday</button>
            </form>

        </div>
    )
}

export default AddHoliday;

