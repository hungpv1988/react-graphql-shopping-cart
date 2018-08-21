import * as actionTypes from '../constants/ActionType';

export function getAllCards(){
    return{
        type: actionTypes.GetALLCARD
    }
};

export function getCardsByCriteria(criteria){
    return{
        type: actionTypes.GETCARDBYCRITERIA,
        criteria: criteria
    }
}

export function getAllSizes(){
    return{
        type:actionTypes.GETALLCARDSIZES
    }
}

export function addCriteria(size){
    return{
        type: actionTypes.ADDCRITERIA,
        size: size
    }
}

export function removeCriteria(size){
    return{
        type: actionTypes.REMOVECRITERIA,
        size: size
    }
}