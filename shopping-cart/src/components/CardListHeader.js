import React, {Component} from 'react';
import '../css/CardListHeader.css';
import '../css/Common.css';
import {OrderEnum} from '../constants/Enum';

export default class CardListHeader extends Component{
    render(){
        var options = [];
        for(var key in OrderEnum){
            options = [...options, <option value={key}>{OrderEnum[key]}</option>];
        };

        return(
            <div className='card-list-header'>
                <small className=''>
                    <span>{this.props.numberOfItem} product(s) found</span>
                </small>

                <div className='sort'>
                    <span>Order By</span>

                    <select onChange={(e) => this.props.orderChanged(e)}>
                     {options}
                    </select>
                </div>

                <div className='clearfix'></div>
            </div>
        )
    }
}