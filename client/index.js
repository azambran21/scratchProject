import React from 'react';
import Redux from 'react-redux';
import { render } from 'react-dom';
import App from './App.jsx';
import store from './store';

render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // this was given as default
);
