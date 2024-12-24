import React, { useEffect } from 'react'
import{ useSelector ,useDispatch} from 'react-redux'
import { fetchAll,deleteById } from '../Redux/Employee/EmpActions'


function EmployeeView() {
    useEffect(() => {
        dispatch(fetchAll())
    }, [fetchAll])

    
    //console.log('EmpData', EmpData);
    const EmpData = useSelector(state=> state.employees)
    const dispatch = useDispatch()


    // const handleDelete = (id) =>{
    //     console.log('Delete button clicked',id)
    //     dispatch(deleteById(id))
    // }
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
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Job</th>
                                <th>Action</th>
                            </tr>

                            {EmpData.employees.map(emp => (
                                <tr key={emp.employeeId}>
                                    <td>{emp.employeeId}</td>
                                    <td>{emp.employeeName}</td>
                                    <td>{emp.employeeEmail}</td>
                                    <td>{emp.employeeJob}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                                
                            ))}

                        </table>
                        
                    </div>
                );

}


export default EmployeeView