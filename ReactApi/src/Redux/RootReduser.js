import { combineReducers } from 'redux';

import EmpReducer from "./Employee/EmpReduser";

const RootReducer = combineReducers({
    employee: EmpReducer
});

export default RootReducer;