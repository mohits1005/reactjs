import React, { Component } from 'react';
import ChildInputClass from './ciclass';
import ChildDetailClass from './cdclass';
class ParentStateClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.changeParentState = this.changeParentState.bind(this);
    }
    changeParentState(number){
        this.setState({number});
    }
    render() {
        return (
            <div>
                <h1>Parent state class</h1>
                Number: {this.state.number}
                <ChildInputClass number={this.state.number} changeParentState={this.changeParentState}/>
                <ChildDetailClass number={this.state.number} changeParentState={this.changeParentState}/>
            </div>
        );
    }
}
export default ParentStateClass;
