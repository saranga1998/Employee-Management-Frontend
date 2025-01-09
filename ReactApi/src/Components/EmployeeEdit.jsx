import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchById, UpdateById } from '../Redux/Employee/EmpActions';
import { useNavigate, useParams } from "react-router-dom";

const EmployeeEdit = () => {

    const { id } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const empData =  useSelector(state => state.employees)
   

    
    const {loading,error,employees} = empData;
    console.log("Employee ",employees);
    
    
    const [updateEmployee, setEmployee] = useState({
        employeeId: "",
        employeeName: "",
        employeeEmail: "",
        employeeJob: "",
    });

    const Editemployee = employees.find((emp) => emp.employeeId.trim() === id.trim());    
    console.log("Edit Employee ",Editemployee);

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
    }, [dispatch, id,employees]);

    const handleChange = (e) => {
        setEmployee({
            ...updateEmployee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateById(id, updateEmployee));
        navigate('/employee');
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Employee Id</label>
                <input
                    type="text"
                    name="employeeId"
                    value={updateEmployee.employeeId}
                    disabled
                />
                <label>Employee Name</label>
                <input
                    type="text"
                    name="employeeName"
                    value={updateEmployee.employeeName}
                    onChange={handleChange}
                />
                <label>Employee Email</label>
                <input
                    type="email"
                    name="employeeEmail"
                    value={updateEmployee.employeeEmail}
                    onChange={handleChange}
                />
                <label>Employee Job</label>
                <input
                    type="text"
                    name="employeeJob"
                    value={updateEmployee.employeeJob}
                    onChange={handleChange}
                />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

export default EmployeeEdit;
