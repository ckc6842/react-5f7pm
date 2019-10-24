import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import TimerWrapper from './jsx/timerWrapper.jsx';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <TimerWrapper/>, 
    document.getElementById('timmerWrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
