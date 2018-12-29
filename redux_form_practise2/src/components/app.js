import React, { Component } from 'react';
import UserForm from './user_form';
export default class App extends Component {
  handleSubmit = (vars) => {
    alert(vars);
    console.log(vars);
  }
  render() {
    return (
      <div>
        <div>Sample form</div>
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
