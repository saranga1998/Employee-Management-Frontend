import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchById, UpdateById } from '../../Redux/Employee/EmpActions';
import { useNavigate, useParams } from "react-router-dom";
import { TextInput, EmailInput } from '../Inputs/BasicInputs';

const EmployeeEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const empData = useSelector(state => state.employees)
    const { loading, error, employees } = empData;
    const [updateEmployee, setEmployee] = useState({
        employeeId: "",
        employeeName: "",
        employeeEmail: "",
        employeeJob: "",
    });

    const Editemployee = employees.find((emp) => emp.employeeId.trim() === id.trim());

    useEffect(() => {
        if (Editemployee) {

            setEmployee({
                employeeId: Editemployee.employeeId.trim(),
                employeeName: Editemployee.employeeName.trim(),
                employeeEmail: Editemployee.employeeEmail.trim(),
                employeeJob: Editemployee.employeeJob.trim(),
            });
        } else {

            dispatch(FetchById(id));

        }
    }, [dispatch, id, employees]);

    const handleChange = (e) => {
        setEmployee({
            ...updateEmployee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateById(id, updateEmployee));
        navigate('/employees');
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2 className='block text-xl font-medium text-slate-800'>Update Employee</h2>
            <div className='border-2 border-black block p-5 rounded-md '>
                <form onSubmit={handleSubmit} className='m-4 content-around'>

                    <TextInput
                        label='Employee Id' name='employeeId' type='text' value={updateEmployee.employeeId} onChange={handleChange} disabled />
                    <TextInput
                        label="Employee Name" name="employeeName" type="text" value={updateEmployee.employeeName} onChange={handleChange} />
                    <EmailInput
                        label="Employee Email" name="employeeEmail" type="email" value={updateEmployee.employeeEmail} onChange={handleChange} />
                    <TextInput
                        label="Employee Job" name="employeeJob" type="text" value={updateEmployee.employeeJob} onChange={handleChange} />

                    
                    <div className='p-2 flex justify-center'>
                        <button type='submit'
                            className='bg-blue-500 hover:bg-blue-700
                             text-white font-bold py-2 px-4 border border-blue-700 rounded' >Update Employee</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default EmployeeEdit;
