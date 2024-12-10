import RootReducer from "./RootReduser";
import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))
export default store;