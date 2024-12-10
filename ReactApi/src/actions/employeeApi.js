import axios from "axios";

const baseUrl = "http://localhost:3000/employees";

export default{
    employee(url = baseUrl+'Employee/'){
        return{
            fetchAll : () => axios.get(url),
        }
    }
}