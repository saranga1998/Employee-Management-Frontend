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
                            <button onClick={() => navigate('/add-employee')}>Add Employee</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Employee Id</th>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Job</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {EmpData.employees.map(emp => (
                                    <tr key={emp.employeeId}>
                                        <td>{emp.employeeId}</td>
                                        <td>{emp.employeeName}</td>
                                        <td>{emp.employeeEmail}</td>
                                        <td>{emp.employeeJob}</td>
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