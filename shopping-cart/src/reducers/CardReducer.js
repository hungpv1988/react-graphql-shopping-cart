import * as actionTypes from '../constants/ActionType.js';
import CardService from '../services/CardService.js';

const cardService = new CardService();
const initialState = [];

export default function CardReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GETCARDS: 
            state = cardService.getItems(action.criteria);
            return [...state];
    }

    return state;
}