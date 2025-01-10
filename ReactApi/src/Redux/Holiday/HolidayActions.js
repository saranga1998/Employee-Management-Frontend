import {
    FETCH_HOLIDAY_FAILURE, FETCH_HOLIDAY_SUCCESS, FETCH_HOLIDAY_REQUEST,
    ADD_HOLIDAY_REQUEST, ADD_HOLIDAY_SUCCESS, ADD_HOLIDAY_FAILURE,
    DELETE_HOLIDAY_REQUEST, DELETE_HOLIDAY_SUCCESS, DELETE_HOLIDAY_FAILURE,
    UPDATE_HOLIDAY_SUCCESS
} from "./HolidayTypes";
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

export const addHolidayRequest = () => {
    return {
        type: ADD_HOLIDAY_REQUEST
    };
};

export const addHolidaySuccess = (holiday) => {
    return {
        type: ADD_HOLIDAY_SUCCESS,
        payload: holiday
    };
}

export const addHolidayFailure = (error) => {
    return {
        type: ADD_HOLIDAY_FAILURE,
        payload: error
    };
}

export const deleteHolidayRequest = () => {
    return {
        type: DELETE_HOLIDAY_REQUEST
    };
}
export const deleteHolidaySuccess = (holiday) => {
    return {
        type: DELETE_HOLIDAY_SUCCESS,
        payload: holiday
    };
}
export const deleteHolidayFailure = (error) => {
    return {
        type: DELETE_HOLIDAY_FAILURE,
        payload: error
    };
}

export const updateHolidaySuccess = (holiday) => {
    return {
        type: UPDATE_HOLIDAY_SUCCESS,
        payload: holiday
    };
}

export const fetchAll = () => {
    return (dispatch) => {
        dispatch(fetchHolidayRequest());
        holidayApi.holiday().fetchDays()
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

export const create = (holiday) => {
    return (dispatch) => {
        dispatch(addHolidayRequest());
        holidayApi.holiday().Adddate(holiday)
            .then((response) => {
                const day = response.data;
                dispatch(addHolidaySuccess(day));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(addHolidayFailure(errMsg));
            });
    };
};

export const deleteById = (id) => {
    return (dispatch) => {
        dispatch(deleteHolidayRequest());
        holidayApi.holiday().DeleteHoliday(id)
            .then((response) => {
                const day = response.data;
                dispatch(deleteHolidaySuccess(day));
                dispatch(fetchAll());
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(deleteHolidayFailure(errMsg));
            });
    }
}

export const FetchById = (id) => {
    return (dispatch) => {
        dispatch(fetchHolidayRequest());
        holidayApi.holiday().FetchByID(id)
            .then((response) => {
                const day = response.data;
                dispatch(fetchHolidaySuccess(day));
            })
            .catch((error) => {
                const err = error.message;
                dispatch(fetchHolidayFailure(err));
            });
    }
}

export const UpdateById = (id,edit) =>
    {
        return (dispatch) => {
            dispatch(addHolidayRequest());
            holidayApi.holiday().EditHoliday(id,edit)
            .then((response) => {
                const day = response.data;
                console.log("Res",edit);
                dispatch(updateHolidaySuccess(day));
                dispatch(fetchAll());
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(addEmployeeFailure(errMsg));
            });
    };
};