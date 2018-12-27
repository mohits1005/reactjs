import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import PostsIndex from './components/posts_index';
const createStoreWithMiddleware = applyMiddleware()(createStore);
const Greeting = () => {
  return <div>Hey there!</div>
}
ReactDOM.render(
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/greet" component={Greeting} />
      </Switch>
    </BrowserRouter>
  </App>
  , document.querySelector('.container'));
