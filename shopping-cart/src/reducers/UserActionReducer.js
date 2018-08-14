import * as types from '../constants/ActionType';

const initialState = {message:'Hello world'}

export default function userActionReducer(state = initialState, action){
    switch(action.type){
        case types.COMPLETE: return {...state, message: "Congratulations on your completion"} ;
        case types.INCOMPLETE: return {...state, message: "What a pity, you fail to complete the form. Let's try one more time"} ;
        default: return {...state, message: "let's start the form, please"} ; 
    }
}