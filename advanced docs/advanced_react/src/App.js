import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ManagingFocus from './components/managing_focus';
class App extends Component {
  render() {
    return (
      <div>
        {/* <FragmentPractice items={[{ id: 1, term: 'Peas', description: 'Green vegetable' }, { id: 2, term: 'Rice', description: 'Whole Grain' }]}/> */}
        <ManagingFocus />
      </div>
    );
  }
}

export default App;