import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAll } from '../Redux/Employee/EmpActions'


function EmployeeView({ EmpData, fetchAll }) {
    useEffect(() => {
        fetchAll()
    }, [fetchAll])

    if (!EmpData) {
        return <h2>Loading...</h2>;
    }
    //console.log('EmpData', EmpData);

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

const mapStateToProps = (state) => {
    return {
        EmpData: state.employees,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(fetchAll())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView)