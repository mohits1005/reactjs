import React, { Component } from 'react';
class ChildInputClass extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.changeParentState(e.target.value);
    }
    render() {
        const numberState = this.props.number;
        return (
            <div>
                <h3>Child state class</h3>
                <input type="text" name="cinput" value={numberState} onChange={this.handleChange} />
            </div>
        );
    }
}
export default ChildInputClass;
