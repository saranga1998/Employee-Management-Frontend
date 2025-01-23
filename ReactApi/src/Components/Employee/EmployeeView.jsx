import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, deleteById } from '../../Redux/Employee/EmpActions'
import { useNavigate } from 'react-router-dom'


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
    return EmpData.loading ? (<h2>loading...</h2>) :
        EmpData.error ? (<h2>{EmpData.error}</h2>) :
            EmpData.employees.length === 0 ? (
                <h2>No Employees Found</h2>
            ) :
                (

                    <div>
                        <div>
                            <button onClick={() => navigate('/add-employee')} 
                            className="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Add Employee</button>
                        </div>
                        <table className='table-auto m-2'>
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
                                    <tr key={emp.employeeId} className='cursor-pointer hover:bg-gray-200'>
                                        <td className='border px-4 py-2'>{emp.employeeId}</td>
                                        <td className='border px-4 py-2'>{emp.employeeName}</td>
                                        <td className='border px-4 py-2'>{emp.employeeEmail}</td>
                                        <td className='border px-4 py-2'>{emp.employeeJob}</td>
                                        <td><button onClick={() => handleDelete(emp.employeeId)}>Delete</button></td>
                                        <td><button onClick={() => navigate(`/employees/edit/${emp.employeeId}`)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                );

}


export default EmployeeView