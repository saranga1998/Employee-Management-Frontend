import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../Redux/Holiday/HolidayActions'
import { useNavigate} from "react-router-dom";
import { DateInput,TextInput } from '../Inputs/BasicInputs';

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
        navigate('/holidays');
    };
    return (
        <div>

            <h2>Add Holiday</h2>
            <form onSubmit={handleSubmit}>
    
                <DateInput label="Select Date" name="holiday1" type="Date" value={holiday.holiday1} onChange={handleChange}/>
                
                <TextInput
                    label="Holiday Title" name="title" type="text" value={holiday.title} onChange={handleChange} />
                    
                <button type='submit'>Add Holiday</button>
            </form>

        </div>
    )
}

export default AddHoliday;

