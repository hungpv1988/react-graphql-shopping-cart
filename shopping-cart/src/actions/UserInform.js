import * as types from '../constants/ActionType';

export function alert(text){
    return {
        type: types.ALERT,
        text
    }
}