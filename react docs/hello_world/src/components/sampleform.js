import React, { Component } from 'react';
export default class SampleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', pswd: ''};
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email+' '+this.state.pswd);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login Form</h1>
                <label>
                    Email:
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="pswd" value={this.state.pswd} onChange={this.handleInputChange}/>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
