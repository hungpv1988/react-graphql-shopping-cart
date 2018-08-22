import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/CardAction';
import '../css/FilterList.css';

class FilterItem extends Component{
    constructor(){
        super();
    };

    onClick(e){
        if (e.target.checked){
            this.props.addCriteria(e.target.value);
            return;
        }

        this.props.removeCriteria(e.target.value);
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

function mapStateToProps(state){
    return{
        criteria: state.criteria
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addCriteria: (criteria) => {dispatch(actions.addCriteria(criteria))} ,
        removeCriteria: (criteria) => {dispatch(actions.removeCriteria(criteria))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);