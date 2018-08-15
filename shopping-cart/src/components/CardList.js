import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CardListHeader from './CardListHeader';

export default class CardList extends Component{
    render(){
        return (
            <div class="shelf-container">
                <CardListHeader/>
            </div>
        )
    }
}