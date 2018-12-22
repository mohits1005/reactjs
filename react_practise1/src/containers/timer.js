import React, { Component } from 'react';
import { connect } from 'react-redux';
class Timer extends Component {
    render() {
        return (
            <div>
                <h3>Counter</h3>
                <h1>{this.props.count}</h1>
                <button className="btn btn-default">+</button>&nbsp;&nbsp;
                <button className="btn btn-default">-</button>
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
// Promote book list from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(Timer);