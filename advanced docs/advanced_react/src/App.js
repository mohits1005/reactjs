import React, { Component } from 'react';
import './App.css';
import OuterClickExample from './components/outer_click_example';
class App extends Component {
  render() {
    return (
      <div>
        {/* <FragmentPractice items={[{ id: 1, term: 'Peas', description: 'Green vegetable' }, { id: 2, term: 'Rice', description: 'Whole Grain' }]}/> */}
        {/* <ManagingFocus /> */}
        <OuterClickExample />
      </div>
    );
  }
}

export default App;