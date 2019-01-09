import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// const App = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
class App extends React.Component {
  render() {
    return <Welcome name='Mohit' />;
  }
}
export default App;
