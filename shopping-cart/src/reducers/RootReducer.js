import {combineReducers} from 'redux';
import userActionReducer from './UserActionReducer';
import { root } from 'postcss';

const rootReducer = combineReducers({
    userActions : userActionReducer
})

export default rootReducer;