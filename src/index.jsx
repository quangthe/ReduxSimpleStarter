import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import YTSearch from 'youtube-api-search';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBzzj_xzDX-CYKDKOc5JreUJw-z-OvkVbA';

YTSearch({
  key: API_KEY,
  term: 'Nissan GTR'
}, (data) => {
  console.log(data);
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
