import {FETCH_EMPLOYEE_REQUEST,FETCH_EMPLOYEE_SUCCESS,FETCH_EMPLOYEE_FAILURE} from './EmpTypes';

const initialState = {
    loading: false,
    employees: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                employees: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_FAILURE:
            return {
                loading: false,
                employees: [],
                error: action.payload
            }
        default: return state;
    }
};

export default UserReducer;