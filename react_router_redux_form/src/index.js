import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';
import configureStore from './store.js'
const store = configureStore();
const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);
const Greeting = () => {
  return <div>Hey there!</div>
}
ReactDOM.render(
  <Provider store={store}>
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/greet" component={Greeting} />
      </Switch>
    </BrowserRouter>
  </App>
  </Provider>
  , document.querySelector('.container'));
