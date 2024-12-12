import { combineReducers } from 'redux';

import EmpReducer from "./Employee/EmpReduser";

const RootReducer = combineReducers({
    employees: EmpReducer
});

export default RootReducer;