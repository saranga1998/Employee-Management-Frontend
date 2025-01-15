import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5278/Authentication/",
    headers: {
        "Content-Type": "application/json",
    },
});
const baseUrl = "http://localhost:5278/";

export default{
    authenticate(){
        return{
            
            LoginUser : user => axiosInstance.post('Login',user),
            RegisterUser : newUser => axiosInstance.post('RegisterUser',newUser),
            Refresh : refresh => axiosInstance.post('Refresh',refresh),
            Logout : () => axiosInstance.delete(`DeleteEmployee`),
            
        }
    }
}