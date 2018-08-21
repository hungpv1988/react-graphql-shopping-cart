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
        const cards = this.props.cards;
        const sizes = this.props.sizes;

        return (
            <div>     
                <div className='main'>
                    <FilterList sizes={sizes} onItemClick='onItemClick'/>
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

    onFilterItemClick(e){

    };
    
    componentDidMount(){
        this.props.getAllCards();
        this.props.getAllSizes();
    }
}

function mapStateToProps(state){
    return {
        text: state.userActions.message,
        cards: state.cards,
        sizes: state.sizes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        complete: () => {dispatch(actions.complete())},
        incomplete: () => {dispatch(actions.incomplete())},
        getAllCards: () => {dispatch(cardActions.getAllCards())},
        getAllSizes: () => {dispatch(cardActions.getAllSizes())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);