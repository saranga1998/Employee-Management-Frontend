import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAll } from '../Redux/Employee/EmpActions'


function EmployeeView({EmpData,fetchAll}){
    useEffect(()=>{
        fetchAll()
    },[])

    console.log('EmpData',EmpData);

    return EmpData.loading?(<h2>loading</h2>):
        EmpData.error?(<h2>{EmpData.error}</h2>):
        (
            <div>
                <h2>Employees</h2>
                {
                    EmpData && EmpData.employees && EmpData.employees.map(emp=>(
                        <p key={emp.id}>{emp.name}</p>
                    ))
                }
            </div>
        );
        
}

const mapStateToProps = state => {
    return {
        EmpData: state.emp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(fetchAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView)