import {
    FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_SUCCESS,ADD_EMPLOYEE_REQUEST,ADD_EMPLOYEE_FAILURE 
} from './EmpTypes';

const initialState = {
    loading: false,
    employees: [],
    error: ''
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEE_REQUEST':
            return {
                ...state,
                loading: true,
            }

        case 'FETCH_EMPLOYEE_FAILURE':
            return {
                loading: false,
                employees: [],
                error: action.payload,
            }

        case 'FETCH_EMPLOYEE_SUCCESS':
            return {
                ...state,
                loading: false,
                employees: action.payload,
                error: '',
            }
        case 'ADD_EMPLOYEE_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_EMPLOYEE_SUCCESS':
            return {
                ...state,
                loading: false,
                employees: [...state.employees, action.payload],
            }
        case 'ADD_EMPLOYEE_FAILURE':
            return {
                loading: false,
                employees: [],
                error: action.payload,
            }

        default: return state;
    }
};

export default EmpReducer;