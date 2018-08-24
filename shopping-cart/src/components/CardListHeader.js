import React, {Component} from 'react';
import OrderBy from './OrderBy';
import '../css/CardListHeader.css';

export default class CardListHeader extends Component{
    render(){
        return(
            <div className='card-list-header'>
                <small className=''>
                    <span>{this.props.numberOfItem} product(s) found</span>
                </small>

                <OrderBy orderChanged={this.props.orderChanged} />

                <div className='clearfix'></div>
            </div>
        )
    }
}