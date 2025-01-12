import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAll,deleteById } from '../../Redux/Holiday/HolidayActions'


function HolidayView() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const DaysData = useSelector(state => state.holidays)

    useEffect(() => {
        dispatch(fetchAll())
    }, [fetchAll])

    const handleDelete = (id) =>{
        dispatch(deleteById(id))
    }

    return DaysData.loading ? (
        <h2>Loading...</h2>
    ) : DaysData.error ? (
        <h2>{DaysData.error}</h2>
    ) : DaysData.holiday.length === 0 ? (
        <h2>No Data Found</h2>
    ) : (
        <div>
            <div>
                <button onClick={() => navigate('/add-holiday')}>Add Holiday</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Holiday Date</th>
                        <th scope="col">Holiday Title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DaysData.holiday.map(day => (
                        <tr key={day.dayId}>
                            <td>{day.holiday1}</td>
                            <td>{day.title}</td>

                            <td><button onClick={() => handleDelete(day.dayId)}>Delete</button></td>
                            <td><button onClick={() => navigate(`/holidays/edit/${day.dayId}`)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    
        </div>
    );

}


export default HolidayView;