import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default{
    holiday(url = baseUrl+'Holiday/'){
        return{
            fetchAll : () => axios.get(url+'HolidayDetails'),
        }
    }
}