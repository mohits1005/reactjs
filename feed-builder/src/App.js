import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {POSTS} from './posts';
import FeedList from './components/feed_list';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';
import styles from './styles/styles.css';
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
    const addPostLink = "/add_post/";
    return (
      <div style={styles.main_container}>
        <Link to={{ pathname: addPostLink }}>
          <button style={styles.add_post_btn}>
            Add Post
          </button>
        </Link>
        <div>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMoreContent}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            <FeedList posts={posts} style={styles.center_container}/>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
