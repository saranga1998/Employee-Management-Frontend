import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, deleteById } from '../../Redux/Employee/EmpActions'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdEdit, MdPersonAddAlt1 } from "react-icons/md";
import { DataLoading } from '../Other/Spineers';

function EmployeeView() {

    const EmpData = useSelector(state => state.employees)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteById(id))

        //dispatch(fetchAll())
    }
    if (!EmpData) {
        return <h2>Loading...</h2>;
    }

    return EmpData.loading ? (<DataLoading />) :
        EmpData.error ? (<h2>{EmpData.error} </h2>) :
            EmpData.employees.length === 0 ? (
                <h2>No Employees Found</h2>
            ) :
                (

                    <div className='m-2'>

                        <div className='flex justify-end border-2 rounded-md shadow-md'>
                            <button onClick={() => navigate('add-employee')}
                                className="w-30  rounded-md bg-slate-800 py-2 px-4  text-center text-sm text-white inline-flex items-center justify-center">
                                <span className='mr-1'><MdPersonAddAlt1 /></span>Add Employee</button>
                        </div>
                        <div className='flex justify-center pt-2 text-sm'>
                            <table className='table-auto m-2 border-2'>
                                <thead className=' bg-blue-600 text-white'>
                                    <tr className='border-2 border-blue-500 rounded-t'>
                                        <th scope="col" className='px-4 py-2'>Employee Id</th>
                                        <th scope="col" className='px-4 py-2'>Employee Name</th>
                                        <th scope="col" className='px-4 py-2'>Email</th>
                                        <th scope="col" className='px-4 py-2'>Job</th>
                                        <th scope="col" className='px-4 py-2' colSpan={2}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EmpData.employees.map(emp => (
                                        <tr key={emp.employeeId} className='text-pink-600 cursor-pointer hover:bg-gray-200 hover:shadow-md'>
                                            <td className='border border-r-0 px-4'>{emp.employeeId}</td>
                                            <td className='border border-r-0 border-l-0 px-4 '>{emp.employeeName}</td>
                                            <td className='border border-r-0 border-l-0 px-4 '>{emp.employeeEmail}</td>
                                            <td className='border border-l-0 px-4 '>{emp.employeeJob}</td>
                                            <td className='text-black text-center hover:bg-white hover:shadow-lg '><button onClick={() => handleDelete(emp.employeeId)}><MdDelete /></button></td>
                                            <td className='text-black text-center hover:bg-white hover:shadow-lg '><button onClick={() => navigate(`edit/${emp.employeeId}`)}><MdEdit /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                );

}


export default EmployeeView