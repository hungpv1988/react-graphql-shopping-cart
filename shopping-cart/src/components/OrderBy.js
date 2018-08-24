import React, {Component} from 'react';
import '../css/Common.css';

export default class OrderBy extends Component{
    constructor(args){
        super(args);

        if (!args && !args.orderBy){
            this.state = {
                value: -1
            };
        }

        this.state = {
            value: 1
        };
    }

    render(){
        var onChange = this.props.orderChanged;
        return(
            <div className='sort'>
                <span>Order By</span>

                <select onChange={(e) => onChange(e)} defaultValue='-1'>
                    <option value="-1">Lowest to Highest</option>
                    <option value="1">Highest to Lowest</option>
                </select>
            </div>
        )
    }
}