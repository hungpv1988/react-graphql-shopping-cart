import * as types from '../constants/ActionType';

export function complete(){
    return {
        type: types.COMPLETE
    }
}

export function incomplete(){
    return {
        type: types.INCOMPLETE
    }
}