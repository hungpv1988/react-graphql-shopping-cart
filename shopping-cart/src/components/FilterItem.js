import React, {Component} from 'react';
import '../css/FilterList.css';
export default class FilterItem extends Component{
    constructor(){
        super();
    };

    onClick(e){

    };

    render(){
        var item  = this.props.item;

        return(
            <div className='available-size'>
                <label>
                    <input type="checkbox" value={item.value} onClick={(e) => this.onClick(e)}  />
                    <span className='checkmark'>{item.name}</span>
                </label>
             </div>
        );
    }
}