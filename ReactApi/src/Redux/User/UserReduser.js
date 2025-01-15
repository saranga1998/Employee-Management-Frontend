import { LOG_USER_FAILURE, LOG_USER_SUCCESS, LOG_USER_REQUEST } from "./UserTypes";

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOG_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }

        case LOG_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: payload.error
            }
        default: return state;
    }
}

export default UserReducer;