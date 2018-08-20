import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as actions from './actions/UserAction';
import * as cardActions from './actions/CardAction';
import {connect} from 'react-redux';
import CardList from './components/CardList';

import FilterList from './components/FilterList';

class App extends Component{
    constructor(){
        super();
        
    }

    onComplete(e){
        this.props.complete();
    }

    onIncomplete(e){
        this.props.incomplete();
    }

    render(){
        var filterItems = [
            {name: 'XS', value : 'XS'}, 
            {name: 'S', value : 'S'}, 
            {name: 'M', value : 'M'}, 
            {name: 'ML', value : 'ML'}, 
            {name: 'L', value : 'L'}, 
            {name: 'XL', value : 'XL'}, 
            {name: 'XXL', value : 'XXL'}
         ];

        const cards = this.props.cards;
        return (
            <div>     
                <div className='main'>
                    <FilterList items={filterItems}/>
                    <CardList itemList={cards} />
                </div>
             
                <div className='float-card'>
                    <span className='bag bag--float-cart-closed'>
                        <span className='bag_quantity'>5</span>
                    </span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        // debugger;
        // if (!this.props.getAllCard){
        //     return;
        // }
        this.props.getAllCard();
    }
}

function mapStateToProps(state){
    return {
        text: state.userActions.message,
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        complete: () => {dispatch(actions.complete())},
        incomplete: () => {dispatch(actions.incomplete())},
        getAllCard: () => {dispatch(cardActions.getAllCard())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);