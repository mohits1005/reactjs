import React, { Component } from 'react';
import './App.css';
import {POSTS} from './posts';
import FeedList from './components/feed_list';
import InfiniteScroll from 'react-infinite-scroller';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: POSTS
    };
    this.loadMoreContent = this.loadMoreContent.bind(this);
  }
  loadMoreContent(){
    console.log('load more');
    var posts = this.state.posts;
    posts = posts.concat(POSTS);
    console.log(posts);
    this.setState({posts:posts});
  }
  render() {
    const posts = this.state.posts;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMoreContent}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <FeedList posts={posts} />
      </InfiniteScroll>
    );
  }
}

export default App;
