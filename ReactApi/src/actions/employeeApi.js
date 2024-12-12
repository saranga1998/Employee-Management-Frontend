import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default{
    employee(url = baseUrl+'Employee/'){
        return{
            fetchAll : () => axios.get(url+'EmployeeDetails'),
        }
    }
}