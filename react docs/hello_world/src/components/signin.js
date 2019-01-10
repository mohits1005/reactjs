import React, { Component } from 'react';
const UserGreeting = () => {
    return <h1>Welcome back!</h1>;
}
const GuestGreeting = () => {
    return <h1>Please sign up.</h1>;
}
const GreetingMessage = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    handleClick = () => {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            this.setState({ isLoggedIn: false });
        }
        else
            this.setState({ isLoggedIn: true });
    }
    render() {
        return (
            <div>
                <GreetingMessage isLoggedIn={this.state.isLoggedIn} />
                <button onClick={this.handleClick} >
                    {this.state.isLoggedIn ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        );
    }
}