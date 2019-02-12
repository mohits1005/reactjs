import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//first we will make a new context
const MyContext = React.createContext();

//second we will create a provider component
class MyProvider extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Moh',
      age: 23
    }
  }
  render(){
    return(
      <MyContext.Provider value={{state: this.state}}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const ModernFamily = (props) => {
  return (
    <Family />
  );
}

const Family = (props) => {
  return(
    <Person />
  );
}

const renderPerson = (context) => {
  return(
    <React.Fragment>
      <div>
        I am {context.state.name}
      </div>
      <div>
        Age:  {context.state.age}
      </div>
    </React.Fragment>
  );
}

class Person extends Component{
  render(){
    //fourth we add a consumer
    return(
      <div>
        <MyContext.Consumer>
          {renderPerson}
        </MyContext.Consumer>
      </div>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      //third wrap entire application in provider
      <MyProvider>
        <div>
          I am the App
          <ModernFamily/>
        </div>
      </MyProvider>
    );
  }
}

export default App;
