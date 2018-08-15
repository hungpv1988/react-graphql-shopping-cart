import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class OrderBy extends Component{
    render(){
        return(
            <div class="sort">
                <span>Order By</span>
                <select>
                    <option value="0">Select</option>
                    <option value="1">Lowest to Highest</option>
                    <option value="2">Highest to Lowest</option>
                </select>
            </div>
        )
    }
}