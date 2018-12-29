import React, { Component } from 'react';
import FormCode from './form_code';
export default class App extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <FormCode onSubmit={this.submit} />
      </div>
    );
  }
}
