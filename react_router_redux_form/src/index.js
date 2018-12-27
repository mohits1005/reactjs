import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const Greeting = () => {
  return <div>Hey there!</div>
}
const Welcome = () => {
  return <div>Welcome to app!</div>
}
ReactDOM.render(
  <App>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} exact={true} />>
          <Route path="/greet" component={Greeting} />
      </Switch>
    </BrowserRouter>
  </App>
  , document.querySelector('.container'));
