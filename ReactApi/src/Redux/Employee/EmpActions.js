import {
    FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_FAILURE
} from './EmpTypes';
import employeeApi from '../../actions/employeeApi';


export const fetchEmployeeRequest = () => {
    return {
        type: FETCH_EMPLOYEE_REQUEST
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
        type: FETCH_EMPLOYEE_FAILURE,
        payload: error
    };
};
export const addEmployeeRequest = () => {
    return {
        type: ADD_EMPLOYEE_REQUEST
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
        type: ADD_EMPLOYEE_FAILURE,
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

export const create = (employee) => {
    return (dispatch) => {
        dispatch(addEmployeeRequest());
        employeeApi.employee().AddEmployee(employee)
            .then((response) => {
                const emp = response.data;
                dispatch(addEmployeeSuccess(emp));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(addEmployeeFailure(errMsg));
            });
    };
};



