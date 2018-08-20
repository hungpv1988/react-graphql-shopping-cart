import React, {Component} from 'react';
import '../css/Card.css';

export default class Card extends Component{
    constructor(props){
        super(props);
    };

    render(){
        var item = this.props.item;
        return(
            <div className="card">
                <div className="ship">{item.isFreeShipping ? 'Free Shipping' : '5 Usd for Shipping'}</div>
                
                <div className="thumb">
                    <img src={item.image}/>
                </div>

                <p className="title">{item.title}</p>
                
                <div className="price">
                    <div className="val">
                        <small>$</small>
                        <b>{item.price}</b>
                    </div>   
                </div>

                <div className="buy-btn"> Add to cart</div>
            </div>
        )
    }
}