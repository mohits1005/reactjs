import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};


function tick() {
    const element = (
        <h1>
            Hello, {formatName(user)}!
         <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </h1>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
