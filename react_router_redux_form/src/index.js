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
ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />>
        <Route path="/greet" component={Greeting} />
      </Switch>
  </BrowserRouter>
  , document.querySelector('.container'));
