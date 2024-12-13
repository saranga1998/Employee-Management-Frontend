import { FETCH_HOLIDAY_FAILURE,FETCH_HOLIDAY_SUCCESS,FETCH_HOLIDAY_REQUEST } from "./HolidayTypes";
import holidayApi from "../../actions/holidayApi";

export const fetchHolidayRequest = () => {
    return {
        type: FETCH_HOLIDAY_REQUEST
    };
};

export const fetchHolidaySuccess = (holiday) => {
    return {
        type: FETCH_HOLIDAY_SUCCESS,
        payload: holiday
    };
};

export const fetchHolidayFailure = (error) => {
    return {
        type: FETCH_HOLIDAY_FAILURE,
        payload: error
    };
};

export const fetchAll = () => {
    return (dispatch) => {
        dispatch(fetchHolidayRequest());
        holidayApi.holiday().fetchAll()
            .then((response) => {
                const days = response.data;
                dispatch(fetchHolidaySuccess(days));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(fetchHolidayFailure(errMsg));
            });
    };
};