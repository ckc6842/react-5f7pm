import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from './jsx/tooltip.jsx';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
    <Tooltip text="The book you're reading now"> React Quickly </Tooltip>
    was published in 2017. It's awesome!
    </div>, 
    document.getElementById('tooltip'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
