import { combineReducers } from 'redux';

import EmpReducer from "./Employee/EmpReduser";
import HolidayReducer from './Holiday/HolidayReduser';
import UserReducer from './User/UserReduser';

const RootReducer = combineReducers({
    employees: EmpReducer,
    holidays: HolidayReducer,
    users : UserReducer
});

export default RootReducer;