import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addEmployeeFailure, addEmployeeRequest, create } from '../Redux/Employee/EmpActions';

function AddEmp() {
    const [employee,setEmployee] = useState({
        EmployeeId :'',
        EmployeeName:'',
        EmployeeEmail:'',
        EmployeeJob:''
    });
    
    const handleChange = (e) => {
        setEmployee({...employee,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        create(employee);
    };



  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Id</label>
        <input type='text' name='empId' value={employee.EmployeeId} onChange={handleChange}/>
        <label>Employee Name</label>
        <input type='text' name='empName' value={employee.EmployeeName} onChange={handleChange}/>
        <label>Employee Email</label>
        <input type='text' name='empEmail' value={employee.EmployeeEmail} onChange={handleChange}/>
        <label>Employee Job</label>
        <input type='text' name='empJob' value={employee.EmployeeJob} onChange={handleChange}/>

        {/* <button type='submit' disabled={addEmployeeLoading}>{addEmployeeLoading?'Adding..':'Add Employee'}</button> */}
        <button type='submit'>Add Employee</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        addEmployeeLoading : state.loading,
        addEmployeeFailure : state.error
        
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        create : (employee)=> dispatch(create(employee))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmp)