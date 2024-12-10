import axios from 'axios';
import {FETCH_EMPLOYEE_REQUEST,FETCH_EMPLOYEE_SUCCESS,FETCH_EMPLOYEE_FAILURE} from './EmpTypes';

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

