import CardService from '../services/CardService.js';
import * as actionTypes from '../constants/ActionType.js';

const initialState = [];
const cardService = new CardService();


export default function SizeReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GETALLCARDSIZES: 
            var cardSizes = cardService.getAllCardSizes();
            return [...state, ...cardSizes];
        default: return state;    
    }

    return state;
}