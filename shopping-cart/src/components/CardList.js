import React, {Component} from 'react';
import Card from './Card';
import CardListHeader from './CardListHeader';
import '../css/CardListStyle.css';
import CardService from '../services/CardService';

const cardService = new CardService();

export default class CardList extends Component{
    render(){
        var cardList = this.props.itemList.map((item,index) => <Card key={index} item={item} />);

        return (
            <div className="card-list">
                <CardListHeader/>
                {cardList}
            </div>
        )
    }
}