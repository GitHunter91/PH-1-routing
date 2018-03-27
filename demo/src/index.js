import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { HashRouter as R } from 'react-router-dom';
ReactDOM.render(<R>
    <App />
    </R>, document.getElementById('root'));
// registerServiceWorker();
