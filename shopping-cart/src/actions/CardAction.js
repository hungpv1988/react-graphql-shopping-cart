import * as actionTypes from '../constants/ActionType';

export function getAllCards(){
    return{
        type: actionTypes.GetALLCARD
    }
};

export function getAllSizes(){
    return{
        type:actionTypes.GETALLCARDSIZES
    }
}

export function addCriteria(){
    return{
        type: actionTypes.ADDCRITERIA
    }
}