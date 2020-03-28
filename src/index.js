import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename='/'>
      <Route path='/' component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
