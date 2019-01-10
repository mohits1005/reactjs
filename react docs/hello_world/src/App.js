import React, { Component } from 'react';
import './App.css';
import SignIn from './components/signin';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleClick = () => {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      this.setState({ isLoggedIn: false });
    }
    else
      this.setState({ isLoggedIn: true });
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}
export default App;
