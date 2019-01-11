import React, { Component } from 'react';
export default class SampleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: '', pswd: '', msg: 'grapefruit', essay: '', isGoing: true};
    }
    handleInputChange = (event) => {
        const target = event.target;
        // const value = target.value;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email + ' ' + this.state.pswd + ' ' + this.state.msg+' '+this.state.essay+' '+this.state.isGoing);
    }
    handleFileChange(selectorFiles) {
        console.log(selectorFiles);
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
                <label>
                    Fruit:
                    <select name="msg" value={this.state.msg} onChange={this.handleInputChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br />
                <label>
                    Essay:
                    <textarea name="essay" value={this.state.essay} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Upload file:
                    <input type="file" onChange={(e) => this.handleFileChange(e.target.files)} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
