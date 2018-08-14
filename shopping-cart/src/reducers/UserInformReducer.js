import * as types from '../constants/ActionType';
const initialState = {text:'Hello world'}
export default function userInformReducer(state = initialState, action){
    switch(action.type){
        case types.ALERT: return {...state, text: "Congratulations on your completion"} ;
        default: state.text = "let's try one more time to complete the form"; return state;
    }
}