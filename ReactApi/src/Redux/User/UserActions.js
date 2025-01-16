import { LOG_USER_FAILURE, LOG_USER_SUCCESS, LOG_USER_REQUEST } from "./UserTypes";
import AuthenticateApi from "../../actions/AuthenticationApi"

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

export const login = (user) => {
    return(dispatch)=>{
        dispatch(logUserRequest())
        AuthenticateApi.Authenticate().LoginUser(user)
        .then((response)=>{
            const data = response.data;
            dispatch(logUserSuccess(data))
        })
        .catch((error)=>{
            const errMsg = error.message;
            dispatch(logUserFailure(errMsg))
        })
    }
}