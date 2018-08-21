import {combineReducers} from 'redux';
import userActionReducer from './UserActionReducer';
import CardReducer from './CardReducer';
import SizeReducer from './SizeReducer';

const rootReducer = combineReducers({
    userActions : userActionReducer,
    cards : CardReducer,
    sizes: SizeReducer
})

export default rootReducer;