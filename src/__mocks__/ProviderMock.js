import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { testState } from '../frontend/initialState';
import reducer from '../frontend/reducers';

const store = createStore(reducer, testState);
const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
);

export default ProviderMock;
