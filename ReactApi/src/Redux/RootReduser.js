import { combineReducers } from 'redux';

import EmpReducer from "./Employee/EmpReduser";
import HolidayReducer from './Holiday/HolidayReduser';

const RootReducer = combineReducers({
    employees: EmpReducer,
    holidays: HolidayReducer
});

export default RootReducer;