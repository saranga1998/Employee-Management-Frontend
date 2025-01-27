import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FetchById, UpdateById } from "../../Redux/Holiday/HolidayActions";
import { DateInput, TextInput } from '../Inputs/BasicInputs';

function HolidayEdit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const holidayData = useSelector(state => state.holidays)
    const { loading, error, holiday } = holidayData;

    const [updateDay, setDay] = useState({
        DayId: "",
        Holiday1: "",
        Title: "",
    });

    const EditDay = holiday.find((d) => d.dayId == id);
    console.log("EditDay", EditDay);
    useEffect(() => {
        if (EditDay) {
            setDay({
                DayId: EditDay.dayId,
                Holiday1: EditDay.holiday1,
                Title: EditDay.title,
            })

        } else {
            dispatch(FetchById(id))
        }
    }, [dispatch, id, EditDay])

    useEffect(() => {
        console.log("Updated updateDay:", updateDay);
    }, [updateDay]);

    const handleChange = (e) => {
        setDay({
            ...updateDay,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateById(id, updateDay));
        navigate('/holidays');
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
        <div>
            <h2 className='block text-xl font-medium text-slate-800'>Update Holiday</h2>
            <div className='border-2 border-black block p-5 rounded-md '>
                <form onSubmit={handleSubmit} className='m-4 content-around'>

                    <DateInput label="Select Date" name="holiday1" type="Date" value={updateDay.Holiday1} onChange={handleChange} />
                    <TextInput
                        label="Holiday Title" name="title" type="text" value={updateDay.Title} onChange={handleChange} />

                    
                    <div className='p-2 flex justify-center'>
                        <button type='submit'
                            className='bg-blue-500 hover:bg-blue-700
                             text-white font-bold py-2 px-4 border border-blue-700 rounded' >Update Holiday</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default HolidayEdit
