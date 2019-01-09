import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const FormattedDate = (props) => {
  return (
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
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

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
export default App;
