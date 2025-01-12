import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchById, updateById } from "../../Redux/Holiday/HolidayActions";

function HolidayEdit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const holidayData = useSelector(state => state.holidays)
    const { loading, error, holiday } = holidayData;

    const [updateDay, setDay] = useState({
        dayId: "",
        holiday1: "",
        title: "",
    });

    const EditDay = holiday.find((day) => day.dayId.trim() === id.trim());

    useEffect(() => {
        if (EditDay) {
            setDay({
                dayId: EditDay.dayId.trim(),
                holiday1: EditDay.holiday1.trim(),
                title: EditDay.title.trim(),
            })
        } else {
            dispatch(fetchById(id))
        }
    },[id,dispatch,holiday])

    const handleChange = (e) => {
        setEmployee({
            ...updateDay,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateById(id, updateDay));
        navigate('/holidays');
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
        <div>
            <h2>Update Holiday</h2>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input
                    type="date"
                    name="holiday1"
                    value={updateDay.holiday1}
                    onChange={handleChange}
                />
                <label>Day Title</label>
                <input
                    type="text"
                    name="title"
                    value={updateDay.title}
                    onChange={handleChange}
                />

                <button type="submit">Update Holiday</button>
            </form>
        </div>
    )
}

export default HolidayEdit
