import {combineReducers} from 'redux';
import userInformReducer from './UserInformReducer';
import { root } from 'postcss';

const rootReducer = combineReducers({
    inform : userInformReducer
})

export default rootReducer;