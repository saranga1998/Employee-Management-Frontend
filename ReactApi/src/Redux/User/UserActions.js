import { LOG_USER_FAILURE, LOG_USER_SUCCESS, LOG_USER_REQUEST } from "./UserTypes";

export const logUserRequest = () =>{
    return{
        type:LOG_USER_REQUEST
    }
}
export const logUserSuccess = (user) =>{
    return{
        type:LOG_USER_SUCCESS,
        payload:user
    }
}

export const logUserFailure = (error) =>{
    return{
        type:LOG_USER_FAILURE,
        payload:error
    }
}