import React, { Component } from 'react';
import './App.css';
import ContextUsage from './components/context_usage_practise';
class App extends Component {
  render() {
    return (
      <div>
        {/* <FragmentPractice items={[{ id: 1, term: 'Peas', description: 'Green vegetable' }, { id: 2, term: 'Rice', description: 'Whole Grain' }]}/> */}
        {/* <ManagingFocus /> */}
        {/* <OuterClickExample /> */}
        {/* <MyComponent /> */}
        {/* <ContextPractise /> */}
        <ContextUsage />
      </div>
    );
  }
}

export default App;