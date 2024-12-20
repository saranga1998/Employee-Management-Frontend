import {
    EMPLOYEE_REQUEST,EMPLOYEE_FAILURE,
    FETCH_EMPLOYEE_SUCCESS, 
    ADD_EMPLOYEE_SUCCESS
} from './EmpTypes';
import employeeApi from '../../actions/employeeApi';

export const fetchEmployeeRequest = () => {
    return {
        type: EMPLOYEE_REQUEST
    };
};

export const fetchEmployeeSuccess = (employees) => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: employees
    };
};

export const fetchEmployeeFailure = (error) => {
    return {
        type: EMPLOYEE_FAILURE,
        payload: error
    };
};
export const addEmployeeRequest = () => {
    return {
        type: EMPLOYEE_REQUEST
    };
};

export const addEmployeeSuccess = (employees) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS,
        payload: employees
    };
};

export const addEmployeeFailure = (error) => {
    return {
        type: EMPLOYEE_FAILURE,
        payload: error
    };
};

export const fetchAll = () => {
    return (dispatch) => {
        dispatch(fetchEmployeeRequest());
        employeeApi.employee().fetchAll()
            .then((response) => {
                const emp = response.data;
                dispatch(fetchEmployeeSuccess(emp));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(fetchEmployeeFailure(errMsg));
            });
    };
};

export const create = (employee) =>{
    console.log('Create',employee);
    return (dispatch) => {
        console.log('Success dispatched');
        dispatch(fetchEmployeeRequest());
        employeeApi.employee().AddEmployee(employee)
        .then((response) => {
            console.log('Response received:', response.data);
            const emp = response.data; 
            dispatch(addEmployeeSuccess(emp)); 
            console.log('Success dispatched');
        })
        .catch((error) => {
            console.error('Error occurred:', error);
            const errMsg = error.message;
            dispatch(addEmployeeFailure(errMsg)); 
        });
    };        
};

// export const create = (employee) =>{
//     console.log('Create',employee);
//         return (dispatch) =>{
//             fetch(()=>{
//                 console.log('Dispatching request');
//                 dispatch(addEmployeeRequest());
//                 employeeApi.employee().create(employee)

//             })
            
//             .then((response)=>{
//                 const emp = response.data;
//                 dispatch(addEmployeeSuccess(emp));
//             })
//             .catch((error)=>{
//                 const errMsg = error.message;
//                 dispatch(addEmployeeFailure(errMsg));
//             });
//         };
//     };

