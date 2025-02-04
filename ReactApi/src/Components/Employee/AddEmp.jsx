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
    navigate('/DashBoard/employees');
  };



  return (
    <div className='m-2 flex justify-center'>

      <div className='border-2 block p-5 rounded-md w-1/2 shadow-md'>
        <p className="text-md font-bold text-center text-gray-600">Add Employee</p>
        <form onSubmit={handleSubmit} className='m-4 flex-row justify-center'>
          <TextInput
            label="Employee Id" name="EmployeeId" type="text" value={employee.EmployeeId} onChange={handleChange} />
          <TextInput
            label={'Employee Name'} name={'EmployeeName'} type={'text'} value={employee.EmployeeName} onChange={handleChange} />
          <EmailInput
            label='Employee Email' name={'EmployeeEmail'} type='email' value={employee.EmployeeEmail} onChange={handleChange} />
          <TextInput
            label={'Employee Job'} name={'EmployeeJob'} type={'text'} value={employee.EmployeeJob} onChange={handleChange} />

          {/* <button type='submit' disabled={addEmployeeRequest}>{addEmployeeRequest?'Adding..':'Add Employee'}</button>  */}
          <div className='p-2 flex justify-center'>
            <button type='submit'
              className='bg-blue-500 hover:bg-blue-700
            text-white font-bold py-2 px-4 border border-blue-700 rounded' >Add Employee</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default AddEmp;