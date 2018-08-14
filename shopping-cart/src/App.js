import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as actions from './actions/UserAction';
import {connect} from 'react-redux';

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
        var {text} = this.props;
        return (
            <div>
                <div>
                    super cool
                </div>
                
                <div>
                    {text}
                </div>
                
                <div>
                    <button onClick={(e) => this.onComplete(e)}> Complete </button>
                    <button onClick={(e) => this.onIncomplete(e)}> InComplete </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        text: state.userActions.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        complete: () => {dispatch(actions.complete())},
        incomplete: () => {dispatch(actions.incomplete())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);