import {
    FETCH_HOLIDAY_FAILURE, FETCH_HOLIDAY_SUCCESS, FETCH_HOLIDAY_REQUEST,
    ADD_HOLIDAY_REQUEST, ADD_HOLIDAY_SUCCESS, ADD_HOLIDAY_FAILURE,
    DELETE_HOLIDAY_REQUEST, DELETE_HOLIDAY_SUCCESS, DELETE_HOLIDAY_FAILURE,
    UPDATE_HOLIDAY_SUCCESS
} from "./HolidayTypes";

const initialState = {
    loading: false,
    holiday: [],
    error: ''
}

const HolidayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HOLIDAY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_HOLIDAY_SUCCESS':
            return {
                loading: false,
                holiday: action.payload,
                error: ''
            }
        case 'FETCH_HOLIDAY_FAILURE':
            return {
                loading: false,
                holiday: [],
                error: action.payload
            }

        case 'ADD_HOLIDAY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_HOLIDAY_SUCCESS':
            return {
                ...state,
                loading: false,
                holiday: [...state.employees, action.payload]
            }

        case 'ADD_HOLIDAY_FAILURE':
            return {
                loading: false,
                holiday: [],
                error: action.payload
            }

        case 'DELETE_HOLIDAY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_HOLIDAY_SUCCESS':
            return {
                ...state,
                loading: false,
                holiday: state.holiday.filter(holiday => holiday.holidayId !== action.payload)
            }
        case 'DELETE_HOLIDAY_FAILURE':
            return {
                loading: false,
                holiday: [],
                error: action.payload
            }
        case 'UPDATE_HOLIDAY_SUCCESS':
            return {
                ...state,
                loading: false,
                holiday: state.holiday.map(holiday => holiday.holidayId === action.payload.holidayId ? action.payload : holiday)
            }
        default: return state;
    }
};

export default HolidayReducer;