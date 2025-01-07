import {
    FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE,
    ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_FAILURE,
    Delete_EMPLOYEE_FAILURE, Delete_EMPLOYEE_REQUEST, Delete_EMPLOYEE_SUCCESS
} from './EmpTypes';
import employeeApi from '../../actions/employeeApi';


export const fetchEmployeeRequest = () => {
    return {
        type: FETCH_EMPLOYEE_REQUEST
    };
};

export const fetchEmployeeSuccess = (employees) => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: employees
    };
};

export const fetchEmployeeFailure = (error) => {
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: error
    };
};
export const addEmployeeRequest = () => {
    return {
        type: ADD_EMPLOYEE_REQUEST
    };
};

export const addEmployeeSuccess = (employees) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS,
        payload: employees
    };
};

export const addEmployeeFailure = (error) => {
    return {
        type: ADD_EMPLOYEE_FAILURE,
        payload: error
    };
};

export const deleteEmployeeRequest = () => {
    return {
        type: Delete_EMPLOYEE_REQUEST
    };
};

export const deleteEmployeeSuccess = (id) => {
    return {
        type: Delete_EMPLOYEE_SUCCESS,
        payload: id
    };
};

export const deleteEmployeeFailure = (error) => {
    return {
        type: Delete_EMPLOYEE_FAILURE,
        payload: error
    };
};

export const fetchAll = () => {
    return (dispatch) => {
        dispatch(fetchEmployeeRequest());
        employeeApi.employee().fetchAll()
            .then((response) => {
                const emp = response.data;
                dispatch(fetchEmployeeSuccess(emp));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(fetchEmployeeFailure(errMsg));
            });
    };
};

export const create = (employee) => {
    return (dispatch) => {
        dispatch(addEmployeeRequest());
        employeeApi.employee().AddEmployee(employee)
            .then((response) => {
                const emp = response.data;
                dispatch(addEmployeeSuccess(emp));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(addEmployeeFailure(errMsg));
            });
    };
};

export const deleteById = (id) => {
    return (dispatch) => {
        dispatch(deleteEmployeeRequest());
        employeeApi.employee().DeleteEmployee(id)
            .then((response) => {
                const emp = response.data;
                dispatch(deleteEmployeeSuccess(id));
                dispatch(fetchAll());
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(deleteEmployeeFailure(errMsg));
            });
    }
}

export const FetchById = (id) => {
    return (dispatch) => {
        dispatch(fetchEmployeeRequest());
        employeeApi.employee().EditEmployee(id)
            .then((response) => {
                const emp = response.data
                dispatch(fetchEmployeeSuccess(emp));
            })
            .catch((error) => {
                const err = error.message;
                dispatch(fetchEmployeeFailure(err));
            });
    }
}

export const UpdateById = (id,edit) =>
    {
        return (dispatch) => {
            dispatch(addEmployeeRequest());
            employeeApi.employee().EditEmployee(id,edit)
            .then((response) => {
                const emp = response.data;
                dispatch(addEmployeeSuccess(emp));
            })
            .catch((error) => {
                const errMsg = error.message;
                dispatch(addEmployeeFailure(errMsg));
            });
    };
};


