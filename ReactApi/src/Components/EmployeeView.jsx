import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, deleteById } from '../Redux/Employee/EmpActions'


function EmployeeView() {

    const EmpData = useSelector(state => state.employees)
    const dispatch = useDispatch()

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
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                );

}


export default EmployeeView