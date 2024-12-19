import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default{
    employee(url = baseUrl+'Employee/'){
        return{
            fetchAll : () => axios.get(url+'EmployeeDetails'),
            // create : newEmp => axios.post(url+'AddEmployee',newEmp,{
            //     headers:{
            //         'Content-Type': 'application/json',
            //     },
            // }),
            create: async (newEmp) => {
                console.log('Making API call with:', newEmp);
                try {
                    const response = await axios.post(baseUrl + 'AddEmployee', newEmp);
                    console.log('API call successful:', response);
                    return response;
                } catch (error) {
                    console.error('Error in API call:', error);
                    throw error;
                }
            }
        }
    }
}