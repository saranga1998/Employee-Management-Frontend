import { FETCH_HOLIDAY_FAILURE,FETCH_HOLIDAY_SUCCESS,FETCH_HOLIDAY_REQUEST } from "./HolidayTypes";

const initialState = {
    loading: false,
    holiday: [],
    error: ''
}

const HolidayReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_HOLIDAY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_HOLIDAY_SUCCESS':
            return {
                loading: false,
                employees: action.payload,
                error: ''
            }
        case 'FETCH_HOLIDAY_FAILURE':
            return {
                loading: false,
                employees: [],
                error: action.payload
            }
        default: return state;
    }
};

export default HolidayReducer;