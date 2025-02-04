import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAll, deleteById } from '../../Redux/Holiday/HolidayActions'
import { MdDelete, MdEdit, MdAssignmentAdd } from "react-icons/md";
import { DataLoading } from '../Other/Spineers';


function HolidayView() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const DaysData = useSelector(state => state.holidays)

    useEffect(() => {
        dispatch(fetchAll())
    }, [fetchAll])

    const handleDelete = (id) => {
        dispatch(deleteById(id))
    }

    return DaysData.loading ? (
        <DataLoading />
    ) : DaysData.error ? (
        <h2>{DaysData.error}</h2>
    ) : DaysData.holiday.length === 0 ? (
        <h2>No Data Found</h2>
    ) : (
        <div className='m-2'>
            <div className='flex justify-end border-2 rounded-md shadow-md'>
                <button onClick={() => navigate('/DashBoard/add-holiday')}
                    className="w-30 rounded-md bg-slate-800 py-2 px-4  text-center text-sm text-white inline-flex items-center justify-center">
                    <span className='mr-1'><MdAssignmentAdd /></span>Add Holiday</button>
            </div>
            <div className='flex justify-center pt-2 text-sm'>
                <table className='table-auto m-2 border-2'>
                    <thead className=' bg-blue-600 text-white'>
                        <tr className=' bg-blue-600 text-white'>
                            <th scope="col" className='px-4 py-2'>Holiday Date</th>
                            <th scope="col" className='px-4 py-2'>Holiday Title</th>
                            <th scope="col" className='px-4 py-2' colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DaysData.holiday.map(day => (
                            <tr key={day.dayId} className='text-pink-600 cursor-pointer hover:bg-gray-200 hover:shadow-md'>
                                <td className='border border-r-0 px-4 '>{day.holiday1}</td>
                                <td className='border border-l-0 px-4 '>{day.title}</td>

                                <td className='text-black text-center hover:bg-white hover:shadow-lg '><button onClick={() => handleDelete(day.dayId)}><MdDelete /></button></td>
                                <td className='text-black text-center hover:bg-white hover:shadow-lg '><button onClick={() => navigate(`edit/${day.dayId}`)}><MdEdit /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );

}


export default HolidayView;