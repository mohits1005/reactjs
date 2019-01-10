import React, { Component } from 'react';
import './App.css';
import SampleForm from './components/sampleform';
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isLoggedIn: false };
  }
  // handleClick = () => {
  //   const isLoggedIn = this.state.isLoggedIn;
  //   if (isLoggedIn) {
  //     this.setState({ isLoggedIn: false });
  //   }
  //   else
  //     this.setState({ isLoggedIn: true });
  // }
  render() {
    return (
      <div>
        {/* <ListMap /> */}
        <SampleForm />
      </div>
    );
  }
}
export default App;
