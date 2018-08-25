import React, {Component} from 'react';
import Card from './Card';
import CardListHeader from './CardListHeader';
import '../css/CardListStyle.css';
import CardService from '../services/CardService';
import {OrderEnum} from '../constants/Enum';

const cardService = new CardService();

export default class CardList extends Component{
    orderChanged(e){
        this.setState({orderBy: e.target.value});
    };

    sort(a, b){
        var orderBy = this.state.orderBy;
        if (orderBy == OrderEnum['ASC']) {
            return a.price - b.price;
        };

        return b.price - a.price; 
    }

    render(){
        var itemList;
        if (!this.state || !this.state.orderBy){
            itemList = this.props.itemList;
        }
        else{
            itemList = this.props.itemList.sort(this.sort.bind(this));
        };

        var cardList = itemList.map((item,index) => <Card key={index} item={item} />);
        
        return (
            <div className="card-list">
                <CardListHeader numberOfItem={cardList.length} orderChanged={(e) => this.orderChanged(e)}/>
                {cardList}
            </div>
        )
    }
}