import React, {Component} from "react";
import * as cardActions from './actions/CardAction';
import {connect} from 'react-redux';
import CardList from './components/CardList';
import FilterList from './components/FilterList';

class App extends Component{
    constructor(){
        super();
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
        this.props.getAllCards(this.props.sizes);
        this.props.getAllSizes();
    }

    componentDidUpdate(){
        var item = 1;
    }
}

function mapStateToProps(state){
    return {
        cards: state.cards,
        sizes: state.sizes,
        criteria: state.criteria
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAllCards: () => {dispatch(cardActions.getAllCards())},
        getAllSizes: () => {dispatch(cardActions.getAllSizes())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);   