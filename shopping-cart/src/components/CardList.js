import React, {Component} from 'react';
import Card from './Card';
import CardListHeader from './CardListHeader';
import '../css/CardListStyle.css';
import CardService from '../services/CardService';

const cardService = new CardService();

export default class CardList extends Component{
    constructor(args){
        super(args);
        if (!args && !args.orderBy){
            this.state = {
                orderBy: -1
            };
        }

        this.state = {
            orderBy: 1
        };
    };

    orderChanged(e){
        this.setState({orderBy: e.target.value});
    };

    render(){
        var itemList = this.props.itemList.sort( (a,b) => { if (!this.state.orderBy || this.state.orderBy == -1) {return b.price - a.price;} return a.price - b.price; });
        var cardList = itemList.map((item,index) => <Card key={index} item={item} />);
        
        return (
            <div className="card-list">
                <CardListHeader numberOfItem={cardList.length} orderChanged={(e) => this.orderChanged(e)}/>
                {cardList}
            </div>
        )
    }
}