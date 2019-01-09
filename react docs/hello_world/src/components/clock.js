import React, { Component } from 'react';
const FormattedDate = (props) => {
    return (
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
    );
}
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), isToggleOn: true };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({
                date: new Date()
            }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}
