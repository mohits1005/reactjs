import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// const App = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }
class App extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default App;
