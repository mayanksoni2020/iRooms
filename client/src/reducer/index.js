import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import roomReducer from './roomReducer';
import pageReducer from './pageReducer';
import userReducer from './userReducer';
export default combineReducers({
    error:errorReducer,
    auth:authReducer,
    room:roomReducer,
    page:pageReducer,
    user:userReducer
});