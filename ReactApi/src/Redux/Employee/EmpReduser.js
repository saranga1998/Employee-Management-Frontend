import {
    EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_SUCCESS
} from './EmpTypes';

const initialState = {
    loading: false,
    employees: [],
    error: ''
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case EMPLOYEE_FAILURE:
            return {
                loading: false,
                employees: [],
                error: action.payload,
            }

        case FETCH_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                employees: action.payload,
                error: '',
            }
        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: [...state.employees, action.payload],
            }


        default: return state;
    }
};

export default EmpReducer;