import { LOG_USER_FAILURE, LOG_USER_SUCCESS, LOG_USER_REQUEST,
    LOGOUT_USER_FAILURE,LOGOUT_USER_REQUEST,LOGOUT_USER_SUCCESS} from "./UserTypes";
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

export const logoutUserRequest = () =>{
    return{
        type:LOGOUT_USER_REQUEST
    }
}

export const logoutUserSuccess = (user) =>{
    return{
        type:LOGOUT_USER_SUCCESS,
        payload:user
    }
}

export const logoutUserFailure = (error) =>{
    return{
        type:LOGOUT_USER_FAILURE,
        payload:error
    }
}

export const login = (user) => {
    return async(dispatch)=>{
        dispatch(logUserRequest())
        try{
            const response = await AuthenticateApi.Authenticate().LoginUser(user)
            const data = response.data;
            dispatch(logUserSuccess(data))
        }
        catch(error){
            dispatch(logUserFailure(error))
        }
        
    }
}

export const logout =(token) =>{
    return(dispatch)=>{
        dispatch(logoutUserRequest())
        AuthenticateApi.Authenticate().Logout(token)
        .then((response)=>{
            const data = response.data;
            dispatch(logoutUserSuccess(data))
        })
        .catch((error)=>{
            const errMsg = error.message;
            dispatch(logoutUserFailure(errMsg))
        })
    }
}