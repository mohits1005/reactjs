import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Family = (props) => {
  return(
    <Person name={props.name}/>
  );
}

class Person extends Component{
  render(){
    return(
      <div>
        I am {this.props.name}
      </div>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Moh',
      age: 23
    }
  }
  render() {
    return (
      <div>
        I am the App
        <Family name={this.state.name}/>
      </div>
    );
  }
}

export default App;
