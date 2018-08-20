import {combineReducers} from 'redux';
import userActionReducer from './UserActionReducer';
import CardReducer from './CardReducer';

const rootReducer = combineReducers({
    userActions : userActionReducer,
    cards : CardReducer
})

export default rootReducer;