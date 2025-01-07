import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getEmployeeById,updateEmployee} from "../Actions/EmployeeActions";
import {useNavigate,useParams} from "react-router-dom";

const EmployeeEdit = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const employee = useSelector((state) => state.employee);
    const {loading,employeeData,error} = employee;

    const [updateEmployee,setEmployee] = useState({
            EmployeeId :'',
            EmployeeName:'',
            EmployeeEmail:'',
            EmployeeJob:''
        });

    useEffect(() => {
        if(employeeData){
            setEmployee(employeeData);
        }
        dispatch(getEmployeeById(id));
    },[employeeData]);

    const handleChange = (e) => {
        setEmployee({...updateEmployee,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(id,updateEmployee));
        navigate('/employee');
    };

    return (
        <div>
          <h2>Update Employee</h2>
          <form onSubmit={handleSubmit}>
            <label>Employee Id</label>
            <input type='text' name='EmployeeId' value={employee.EmployeeId} disabled/>
            <label>Employee Name</label>
            <input type='text' name='EmployeeName' value={employee.EmployeeName} onChange={handleChange}/>
            <label>Employee Email</label>
            <input type='email' name='EmployeeEmail' value={employee.EmployeeEmail} onChange={handleChange}/>
            <label>Employee Job</label>
            <input type='text' name='EmployeeJob' value={employee.EmployeeJob} onChange={handleChange}/>
    
            {/* <button type='submit' disabled={addEmployeeRequest}>{addEmployeeRequest?'Adding..':'Add Employee'}</button>  */}
             <button type='submit'>Update Employee</button> 
          </form>
        </div>
      )

}

export default EmployeeEdit;