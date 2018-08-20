import React, {Component} from 'react';
import '../css/FilterList.css';
import FilterItem from './FilterItem';

export default class FilterList extends Component{
    constructor(){
        super();
    };

    render(){
        var filterItems =  this.props.items.map((option, index) => 
            <FilterItem item={option} key={index} />
        );
        return(
            <div className='filters'>
                <h4 className="title"> Sizes: </h4>
                {filterItems}
            </div>
        )
    }
}