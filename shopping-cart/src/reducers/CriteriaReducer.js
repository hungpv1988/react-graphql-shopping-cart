import * as actionTypes from '../constants/ActionType';
const initialState = [];

export default function CriteriaReducer(state = initialState, action){
    switch(action.type){
        case  actionTypes.ADDCRITERIA: 
              return [...initialState, action.size];
        
        case actionTypes.REMOVECRITERIA: 
            state = state.filter( function(item)  {return  (item !== action.size) ;}); 
            return state;

        default: return state;
    }
}