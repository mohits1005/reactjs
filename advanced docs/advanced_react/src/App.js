import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/lazy_suspense';
class App extends Component {
  render() {
    return (
      <div>
        {/* <FragmentPractice items={[{ id: 1, term: 'Peas', description: 'Green vegetable' }, { id: 2, term: 'Rice', description: 'Whole Grain' }]}/> */}
        {/* <ManagingFocus /> */}
        {/* <OuterClickExample /> */}
        <MyComponent />
      </div>
    );
  }
}

export default App;