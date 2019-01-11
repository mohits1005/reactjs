import React, { Component } from 'react';
class ChildDetailClass extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.changeParentState(150);
    }
    render() {
        const numberState = this.props.number;
        return (
            <div>
                <h3>Child detail class</h3>
                number: {numberState}
                <br />
                <button onClick={this.handleChange}>
                    Make 150!!
                </button>
            </div>
        );
    }
}
export default ChildDetailClass;
