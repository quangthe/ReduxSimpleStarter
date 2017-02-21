import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBzzj_xzDX-CYKDKOc5JreUJw-z-OvkVbA';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App apiKey={API_KEY} />
  </Provider>
  , document.querySelector('.container'));
