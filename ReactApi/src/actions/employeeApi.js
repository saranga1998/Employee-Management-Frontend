import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default{
    employee(url = baseUrl+'Employee/'){
        return{
            fetchAll : () => axios.get(url+'EmployeeDetails'),
            AddEmployee : newEmp => axios.post(url+'AddEmployee',newEmp,{
                headers:{
                    'Content-Type': 'application/json',
                },
            }),
            DeleteEmployee : (id) => axios.delete(`${url}DeleteEmployee/${id}`),
            FetchByID:(id)=>axios.get(`${url}Edit/${id}`),
            EditEmployee:(id,edit) => axios.put(`${url}Edit/${id}`,edit),
        }
    }
}