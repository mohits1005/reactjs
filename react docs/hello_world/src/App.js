import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock';
const FormattedDate = (props) => {
  return (
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  );
}
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}
export default App;
