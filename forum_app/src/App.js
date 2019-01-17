import React, { Component } from 'react';
import './App.css';
import FeedList from './components/feed_list';
import Search from './components/search';
import POSTS from './posts';
const postsPerPage = 3;
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      POSTS: POSTS
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeFilterText = this.changeFilterText.bind(this);
  }
  changeFilterText(value) {
    //change state of posts based on search keyword
    let filterPosts = [];
    POSTS.forEach((post) => {
      const term = value.trim();
      if (term !== '' && post.category.toLowerCase().includes(term.toLowerCase())) {
        filterPosts.push(post);
        console.log(post.category+' ' + value);
      }
    });
    if(filterPosts.length>0)
      this.setState({POSTS: filterPosts});
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    const { currentPage, POSTS } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //remove posts
    const currentPosts = POSTS.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(POSTS.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      const selected = currentPage === number ? '': 'unselected';
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={selected}
        >
          {number}
        </li>
      );
    });
    return (
      <div>
        <Search changeFilterText={this.changeFilterText}/>
        <div className="container center-container">
          <FeedList posts={currentPosts}/>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
