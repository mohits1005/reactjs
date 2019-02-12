import React, { Component } from 'react';
import './App.css';
import UpdateContextChild from './components/update_context_child';
class App extends Component {
  render() {
    return (
      <div>
        {/* <FragmentPractice items={[{ id: 1, term: 'Peas', description: 'Green vegetable' }, { id: 2, term: 'Rice', description: 'Whole Grain' }]}/> */}
        {/* <ManagingFocus /> */}
        {/* <OuterClickExample /> */}
        {/* <MyComponent /> */}
        {/* <ContextPractise /> */}
        {/* <ContextUsage /> */}
        {/* <DynamicContext /> */}
        <UpdateContextChild />
      </div>
    );
  }
}

export default App;