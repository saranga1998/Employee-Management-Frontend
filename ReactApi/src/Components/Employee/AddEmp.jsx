import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEmployeeFailure, addEmployeeRequest, create } from '../../Redux/Employee/EmpActions';
import { useNavigate, } from "react-router-dom";
import { TextInput, EmailInput } from '../Inputs/BasicInputs';

function AddEmp() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    EmployeeId: '',
    EmployeeName: '',
    EmployeeEmail: '',
    EmployeeJob: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const addEmployeeRequest = useSelector(state => state.employees.loading);
  const addEmployeeFailure = useSelector(state => state.employees.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('Submitting Employee:', employee);
    e.preventDefault();
    dispatch(create(employee));
    navigate('/employees');
  };



  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Employee Id" name="EmployeeId" type="text" value={employee.EmployeeId} onChange={handleChange} />
        <TextInput
          label={'Employee Name'} name={'EmployeeName'} type={'text'} value={employee.EmployeeName} onChange={handleChange} />
        <EmailInput
          label='Employee Email' name='EmployeeEmail' type='email' value={employee.EmployeeEmail} onChange={handleChange} />
        <TextInput
          label={'Employee Job'} name={'EmployeeJob'} type={'text'} value={employee.EmployeeJob} onChange={handleChange} />

        {/* <button type='submit' disabled={addEmployeeRequest}>{addEmployeeRequest?'Adding..':'Add Employee'}</button>  */}
        <button type='submit'>Add Employee</button>
      </form>
    </div>
  )
}

export default AddEmp;