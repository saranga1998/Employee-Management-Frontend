import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAll } from '../Redux/Employee/EmpActions'


function EmployeeView({ EmpData, fetchAll }) {
    useEffect(() => {
        fetchAll()
    }, [fetchAll])

    if (!EmpData) {
        return <h2>Loading...</h2>; // Safe fallback in case `EmpData` is undefined
    }
    //console.log('EmpData', EmpData);

    return EmpData.loading ? (<h2>loading...</h2>) :
        EmpData.error ? (<h2>{EmpData.error}</h2>) :
        EmpData.employees.length === 0 ? (
            <h2>No Employees Found</h2>
        ) :
            (
                <div>
                    <h2>Employees</h2>
                    {EmpData.employees.map(emp => (
                        <p key={emp.employeeId}>{emp.employeeName}--{emp.employeeEmail}--{emp.employeeJob}</p>
                    ))}
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