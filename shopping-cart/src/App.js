import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as actions from './actions/UserInform';
import {connect} from 'react-redux';

class App extends Component{
    constructor(){
        super();
        
    }

    onClick(e){
        this.props.alert("Yahoo");
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
                    <button onClick={(e) => this.onClick(e)}> Complete </button>
                    <button> InComplete </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        text: state.inform.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        alert: (text) => {dispatch(actions.alert(text))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);