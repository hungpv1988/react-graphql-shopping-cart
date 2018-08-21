import {combineReducers} from 'redux';
import CardReducer from './CardReducer';
import SizeReducer from './SizeReducer';
import CriteriaReducer from './CriteriaReducer';

const rootReducer = combineReducers({
    cards : CardReducer,
    sizes: SizeReducer,
    criteria: CriteriaReducer
})

export default rootReducer;