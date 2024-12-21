import React,{useState} from 'react'
import{ useSelector ,useDispatch} from 'react-redux'
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

    const addEmployeeRequest = useSelector(state => state.employees.loading);
    const addEmployeeFailure = useSelector(state => state.employees.error);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log('Submitting Employee:', employee);
        e.preventDefault();
        dispatch(create(employee));
    };
    


  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Id</label>
        <input type='text' name='EmployeeId' value={employee.EmployeeId} onChange={handleChange}/>
        <label>Employee Name</label>
        <input type='text' name='EmployeeName' value={employee.EmployeeName} onChange={handleChange}/>
        <label>Employee Email</label>
        <input type='text' name='EmployeeEmail' value={employee.EmployeeEmail} onChange={handleChange}/>
        <label>Employee Job</label>
        <input type='text' name='EmployeeJob' value={employee.EmployeeJob} onChange={handleChange}/>

        {/* <button type='submit' disabled={addEmployeeRequest}>{addEmployeeRequest?'Adding..':'Add Employee'}</button>  */}
         <button type='submit'>Add Employee</button> 
      </form>
    </div>
  )
}

export default AddEmp;