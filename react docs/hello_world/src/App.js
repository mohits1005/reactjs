import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function formatDate(date) {
  return date.toLocaleDateString();
}
const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
const Comment = (props) => {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
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
