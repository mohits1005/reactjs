import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function formatDate(date) {
  return date.toLocaleDateString();
}
const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
};
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
class App extends React.Component {
  render() {
    return <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />;
  }
}
export default App;
