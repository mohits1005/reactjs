import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions/index';
import { bindActionCreators } from 'redux';

class Timer extends Component {
    render() {
        return (
            <div>
                <h3>Counter</h3>
                <h1>{this.props.count}</h1>
                <button className="btn btn-default" onClick={() => this.props.incrementCounter()}>+</button>&nbsp;&nbsp;
                <button className="btn btn-default" onClick={() => this.props.decrementCounter()}>-</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    //whatever is returned will show up as props
    //inside of booklist
    return {
        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
    //whenever select book is called, the result should be passed 
    //to all of our reducers
    return bindActionCreators({ incrementCounter, decrementCounter }, dispatch)
}
// Promote book list from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Timer);