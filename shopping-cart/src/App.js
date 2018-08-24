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
                    <FilterList sizes={sizes}/>
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
        this.props.getCards(this.props.sizes);
        this.props.getAllSizes();
    }

    componentDidUpdate(prevProps){
        if (prevProps.criteria != this.props.criteria){
            this.props.getCards(this.props.criteria);
        }
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
        getCards: (criteria) => {dispatch(cardActions.getCards(criteria))},
        getAllSizes: () => {dispatch(cardActions.getAllSizes())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);   