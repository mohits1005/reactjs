import React, { Component } from 'react';
import './App.css';
import POSTS from './posts';
import FeedList from './components/feed_list';
class App extends Component {
  constructor() {
    super();
    this.state = {
      POSTS: POSTS
    };
  }
  render() {
    const { POSTS } = this.state;
    return (
      <div>
        <FeedList posts={POSTS} />
      </div>
    );
  }
}

export default App;
