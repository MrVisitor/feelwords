import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App.component';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

/**
 * Insert app to block by id "root"
 */
ReactDOM.render((
  <App />
), document.getElementById('root'));
registerServiceWorker();
