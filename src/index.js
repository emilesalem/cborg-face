import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'muicss/lib/css/mui.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(state = [], action) {

}

const store = createStore(reducer, []);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
