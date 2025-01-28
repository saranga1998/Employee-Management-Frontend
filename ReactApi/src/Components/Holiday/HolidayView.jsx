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
                <button onClick={() => navigate('/add-holiday')} 
                className="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Add Holiday</button>
            </div>
            <table className='table-auto m-2'>
                <thead className=' bg-blue-600 text-white'>
                    <tr className=' bg-blue-600 text-white'>
                        <th scope="col" className='px-4 py-2'>Holiday Date</th>
                        <th scope="col" className='px-4 py-2'>Holiday Title</th>
                        <th scope="col" className='px-4 py-2' colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DaysData.holiday.map(day => (
                        <tr key={day.dayId} className='cursor-pointer hover:bg-gray-200'>
                            <td className='border px-4 py-2'>{day.holiday1}</td>
                            <td className='border px-4 py-2'>{day.title}</td>

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